import games from "~/api/games";
import characters from "~/api/characters";

export default {
  fetchGames({commit}) {
    return new Promise((resolve) => {
      games.getAllGames(games => {
        commit('setGames', games)
        resolve()
      })
    })
  },
  fetchCharacters({commit}) {
    return new Promise((resolve) => {
      characters.getAllCharacter(games => {
        commit('setCharacters', games)
        resolve()
      })
    })
  },
  nextStep(context, payload) {
    context.commit('incrementStepCounter', payload)
  },
  addPlayerToList(context, payload) {
    context.commit('pushPlayerToPlayerList', payload)
  },
  deletePlayerFromList(context, payload) {
    context.commit('deletePlayerFromPlayerList', payload)
  },
  toggleGameList(context, payload) {
    context.commit('toggleGameList', payload)
  },
  assignPlayersToCharacters(context, payload){
    context.commit('incrementStepCounter', payload)
    context.commit('assignPlayersToCharacters', payload)
  }
}
