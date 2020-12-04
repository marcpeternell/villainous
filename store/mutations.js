import characters from "~/api/characters";

export default {
    setGames(state, payload) {
        state.games = payload
    },
    setCharacters(state, payload) {
        state.characters = payload
    },
    incrementStepCounter(state) {
        state.stepCounter++
    },
    pushPlayerToPlayerList(state, payload) {
        state.players.unshift(payload)
    },
    async toggleGameList(state, payload) {
        if (!state.selectedGames.includes(payload)) {
            //Add
            state.selectedGames.push(payload);
            state.games.forEach((element)=>{
                if (element.game_id === payload){
                    state.selectedGames.push(element)
                }
            })
            state.characters.forEach((element) => {
                if (element.game_id === payload) {
                    state.selectedCharacter.push(element)
                    ++state.maxPlayers
                }
            });
        } else {
            //Remove
            state.selectedGames = state.selectedGames.filter((element) => element !== payload);
            state.selectedCharacter = state.selectedCharacter.filter((element) => {
                element.game_id === payload ? --state.maxPlayers : null
                return element.game_id !== payload
            });
        }
    },
    deletePlayerFromPlayerList(state, payload) {
        state.players = state.players.filter((element) => {
            return element.id !== payload
        })
    },
    assignPlayersToCharacters(state) {
        state.players.forEach((element) => {
            let randomSelectedCharacter = state.selectedCharacter[Math.floor(Math.random() * state.selectedCharacter.length)];
            state.selectedCharacter = state.selectedCharacter.filter((element) => {
                return element !== randomSelectedCharacter
            });
            state.characterAssignedToPlayer.push({
                playerId: element.id,
                character: randomSelectedCharacter
            })
        });
    },
}
