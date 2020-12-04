<template>
  <div class="max-w-sm mx-auto">
    <h2>Players</h2>
    <ul class="flex justify-center flex-col mx-auto ">
      <li class="text-white text-2xl m-3 flex justify-between content-center border-b  pb-3 px-3"
          v-for="player in this.$store.state.players"
          :key="player.id">
        <p>
          {{player.name}}
        </p>
        <button class="p-2 border rounded border-red-500 text-sm"
                @click="deletePlayer(player.id)">
          <fa icon="trash" class="text-red-500"/>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "PlayerList",
    methods: {
      deletePlayer(playerId) {
        this.$store.dispatch('deletePlayerFromList', playerId)
      }
    }
  }
</script>

<style scoped>

</style>
