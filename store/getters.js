export default {
  maxPlayersReached: state => {
    return state.players.length >= state.maxPlayers
  },

  maxPlayerEqualsPlayerCount: state => {
    return state.selectedCharacter.length === state.maxPlayers
  }
}
