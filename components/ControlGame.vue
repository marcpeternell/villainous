<template>
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
</template>

<script>
    export default {
        name: "ControlGame",
        methods:{
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

</style>