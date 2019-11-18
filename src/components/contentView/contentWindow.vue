<template>
    <div class="content-container">
        <character-panel v-for="character in characters" :key=character.objectID :name=character.name />
    </div>
</template>

<script>
import CharacterPanel from './characterPanel.vue'

export default {
    name: "contentWindow",
    computed: {
        characters() {
            return this.$store.state.adventureObject[2].character
        },
        locations() {
            return this.$store.state.adventureObject[2].location
        }
    },
    components: {
        CharacterPanel
    }
}
</script>

<style scoped>
.content-container {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: stretch;

    overflow-y: scroll;
    scroll-behavior: smooth;
}
</style>