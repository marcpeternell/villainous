<template>
  <div id="app mt-0 page-container">
    <div id="content-wrap" class="mb-24">
      <div class="header--image w-full">
        <img class="" src="images/header_img.jpg" alt="Main Disneys Villainous Characters">
      </div>
      <select-games v-if="this.$store.state.stepCounter === 1"></select-games>
      <players v-if="this.$store.state.stepCounter === 2"></players>
      <results v-if="this.$store.state.stepCounter === 3"></results>
    </div>
    <control />
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style lang="scss" scoped>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
