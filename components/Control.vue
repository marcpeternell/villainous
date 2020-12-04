<template>
  <div class="footer fixed bottom-0 w-full bg-black h-20 flex justify-center">
    <nav class="w-screen flex items-center">
      <ul class="w-full flex justify-around items-start">
        <li title="Add Players">
          <button @click="addPlayer"
                  class="p-2"
                  :class="this.$store.state.selectedCharacter.length === 0 || this.$store.state.stepCounter !== 1 ? 'text-red-500': 'text-gray-400'"
                  :disabled="(this.$store.state.selectedCharacter.length === 0 || this.$store.state.stepCounter !== 1) || !this.$store.getters.maxPlayerEqualsPlayerCount">
            <fa icon="users"/>
            <p class="text-xs">Add Player</p>
          </button>
        </li>
        <li title="Play the Game">
          <button @click="playGame"
                  class="p-2"
                  :class="this.$store.state.players.length < 2 || this.$store.state.stepCounter !== 2 ? 'text-red-500': 'text-gray-400'"
                  :disabled="this.$store.state.players.length < 2 || this.$store.state.stepCounter !== 2">
            <fa icon="play-circle"/>
            <p class="text-xs">Play</p>
          </button>
        </li>
        <li title="Restart">
          <button @click="restart"
                  class="p-2 text-gray-400"
                  :class="this.$store.state.stepCounter === 1 ? 'text-red-500': 'text-gray-400'"
                  :disabled="this.$store.state.stepCounter === 1">
            <fa icon="redo"/>
            <p class="text-xs">Restart</p>
          </button>
        </li>
<!--        <li title="Menu">-->
<!--          <button class="p-2 text-gray-400">-->
<!--            <fa icon="bars"/>-->
<!--            <p class="text-xs">Menu</p>-->
<!--          </button>-->
<!--        </li>-->
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "Controls",
    methods: {
      addPlayer() {
        this.$store.dispatch('nextStep')
      },
      playGame() {
        this.$store.dispatch('assignPlayersToCharacters')
      },
      restart() {
        this.$confirm(
          {
            message: `Are you sure you want to restart? All selected games and added players will be reset.`,
            button: {
              no: 'No',
              yes: 'Yes'
            },
            callback: confirm => {
              if (confirm) {
                window.location.reload()
              }
            }
          }
        )

      }
    }
  }
</script>

<style scoped>
  .footer {
    box-shadow: 0px -2px 10px 5px rgba(15, 15, 15, 1);
  }
</style>
