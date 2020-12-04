<template>
    <div class="mx-auto">
        <div>
            <h2 class="text-gray-400 flex justify-center text-2xl">Select your games</h2>
        </div>
        <div class="game-image--wrapper mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mb-40">
            <loader v-if="loading"/>
            <div v-else class="mx-5">
                <div v-for="item in this.$store.state.games"
                     :key="item.id">
                    <label :for="item.id">
                        <img :alt="item.title.de"
                             :src="getImageUrl(item.image)"
                             class="game-image mx-auto my-6 sm:my-6 md:my-12 lg:my-24"
                             @click="$event.target.classList.toggle('selected-border'), addCharacterToList(item)">
                    </label>
                    <input type="checkbox" :id="item.id" :value="item.id" class="hidden" v-model="selectedGames">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SelectGames",
        data() {
            return {
                loading: true,
                images: [],
                selectedGames: []
            }
        },
        methods: {
            addCharacterToList(item) {
                this.$store.dispatch('toggleGameList', item.id);
            },
            getImageUrl(name) {
                return '/images/' + name + '.jpg'
            }
        },
        created() {
            this.$store.dispatch('fetchGames')
            this.$store.dispatch('fetchCharacters')
                .then(this.loading = false)

        },
    }
</script>

<style scoped>
    .selected-border {
        border: 1px solid #f56565;
    }
</style>
