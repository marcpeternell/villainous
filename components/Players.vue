<template>
  <div>
    <div>
      <h2 class="text-gray-400 flex justify-center text-2xl">Add Players</h2>
    </div>
    <player-input />
    <player-list></player-list>
  </div>
</template>

<script>
  export default {
    name: "Players",
    computed: {
      maxPlayer() {
        return this.$store.getters.incrementMaximalPlayers
      }
    }
  }
</script>
