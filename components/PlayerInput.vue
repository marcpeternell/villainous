<template>
  <div class="flex justify-center mt-6 w-full">
    <form class="w-full max-w-sm mt-6" v-if="!this.$store.getters.maxPlayersReached">
      <div class="flex items-center border-b border-white py-2 m-3">
        <input class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none text-xl"
               type="text" required placeholder="John Doe" aria-label="Full name" v-model="player.name">
        <button class="bg-gray-400 hover:bg-white font-bold py-2 px-4 rounded"
                @click.prevent="addPlayerToList"
                :disabled="this.$store.getters.maxPlayersReached">
          <fa icon="plus"/>
        </button>
      </div>
    </form>
    <p class="text-red-500 text-xl m-3" v-if="this.$store.getters.maxPlayersReached">Max Players reached.</p>
  </div>

</template>

<script>
  export default {
    name: "PlayerInput",
    data() {
      return {
        player: {
          name: '',
          id: '',
        }
      }
    },
    methods: {
      addPlayerToList() {
        if (!this.$store.getters.maxPlayersReached) {
          if (this.player.name !== '') {
            let playerObj = {
              id: helpers.uuid(),
              name: this.player.name
            }
            this.$store.dispatch('addPlayerToList', playerObj)
            this.player.name = ""
            this.player.id = ""
          }
        }
      }
    },
  }
</script>

<style scoped>

</style>
