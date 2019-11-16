<template>
    <div class="load-screen">
        <p>Ich bin die Auswahl</p>
        <div class="button-container">
            <button @click="loadAdventure">import</button>
            <button class="load-button" @click="loadAdventure">load</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "loadScreen",
        methods: {
            loadAdventure() {
                this.$store.commit("loadAdventure")
            }
        }
    }
</script>

<style scoped>
    .load-screen {
        padding: 2em;
        background-image: radial-gradient(#fff,#d8d8d8);
    }

    .load-button {
        float: right;
    }
</style>