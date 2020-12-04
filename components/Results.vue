<template class="p-6">
  <div>
    <div class="mb-6">
      <h2 class="text-gray-400 flex justify-center text-2xl">Your characters</h2>
    </div>
    <carousel :per-page="1"
              :touchDrag="true"
              :mouseDrag="true"
              :navigationEnabled="true"
              :paginationEnabled="false"
              :loop="true"
              :centerMode="true"
              navigationPrevLabel="&#60;"
              navigationNextLabel="&#62;">
      <slide v-for="item in this.$store.state.characterAssignedToPlayer"
             :key="item.playerId">
        <img class="image--character mx-auto text-white"
             :src="getImageUrl(item)"
             :alt="'Image of ' + getCharacterName(item) ">
        <div>
          <p class="text-gray-400 flex justify-center mt-3 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            {{ getPlayerName(item.playerId)}}</p>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>

  export default {
    name: "Results",
    data() {
      return {}
    },
    methods: {
      getPlayerName(element) {
        let player = this.$store.state.players.find(player => player.id === element)
        return player.name;
      },
      getImageUrl(item) {
        return '/images/chars/' + item.character.image + '.png';
      },
      getCharacterName(item){
        return item.character.name.en;
      }
    }
  }
</script>

<style lang="scss">
  .image--character {
      width: 70vw;
  }

  .VueCarousel-navigation {
    .VueCarousel-navigation-prev {
      left: 10px !important;
    }
    .VueCarousel-navigation-next {
      right: 10px !important;
    }
    .VueCarousel-navigation-button {
      transform: none;
      color: #bfbfbf;
    }
  }
</style>
