<template>
    <div class="content-container">

        <character-panel   v-for="character in selectedCharacters" :key=character.objectID :name=character.name />
        <location-panel v-for="location in selectedLocations" :key=location.objectID :name=location.name />
        <item-panel v-for="item in selectedItems" :key=item.objectID :name=item.name />
    
    </div>
</template>

<script>
import CharacterPanel from './characterPanel.vue'
import LocationPanel from './locationPanel.vue'
import ItemPanel from './itemPanel.vue'

export default {
    name: "contentWindow",
    computed: {
        characters() {
            return this.$store.state.adventureObject[2].character
        },
        selectedCharacters() {
            const selectedStoryItem = this.$store.state.selectedStoryItem
            return this.characters.filter(character => selectedStoryItem.content.includes(character.objectID))
        },
        locations() {
            return this.$store.state.adventureObject[2].location
        },
        selectedLocations() {
            const selectedStoryItem = this.$store.state.selectedStoryItem
            return this.locations.filter(location => selectedStoryItem.content.includes(location.objectID))
        },
        items() {
            return this.$store.state.adventureObject[2].item
        },
        selectedItems() {
            const selectedStoryItem = this.$store.state.selectedStoryItem
            return this.items.filter(item => selectedStoryItem.content.includes(item.objectID))
        }
    },
    components: {
        CharacterPanel,
        LocationPanel,
        ItemPanel
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