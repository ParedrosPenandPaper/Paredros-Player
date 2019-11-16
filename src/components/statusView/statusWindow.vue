<template>
    <div class="status-container">
        <p>Ich bin der Status</p>
        <button @click="toggleStatus()">klick</button>
    </div>
</template>

<script>
    export default {
        name: "statusWindow",
        methods: {
            toggleStatus() {
                this.$store.commit("toggleStatus")
            }
        }
    }
</script>

<style scoped>
    .status-container {
        border: 2px solid blue;
    }
</style>