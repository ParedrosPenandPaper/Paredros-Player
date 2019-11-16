<template>
    <div id="app" class="app">
      <div class="load-scree-container" v-if=!loadedAdventure>
        <load-screen class="load-screen"></load-screen>
      </div>
      <div class="main-container" v-if=loadedAdventure v-bind:style="statusSize()">
        <tree-window class="tree-window"></tree-window>
        <text-window class="text-window"></text-window>
        <content-window class="content-window"></content-window>
        <status-window class="status-window"></status-window>
      </div>
    </div>
</template>

<script>
  import contentWindow from "./components/contentView/contentWindow.vue";
  import statusWindow from "./components/statusView/statusWindow.vue";
  import textWindow from "./components/textView/textWindow.vue";
  import treeWindow from "./components/treeView/treeWindow.vue";
  import loadScreen from "./components/loadScreen/loadScreen.vue";

  export default {
    name: 'app',
    components: {
      contentWindow,
      statusWindow,
      textWindow,
      treeWindow,
      loadScreen
    },
    computed: {
      loadedAdventure() {
        return this.$store.state.adventureLoaded
      }
    },
    methods: {
      statusSize() {
        if (this.$store.state.expandStatus) {
          return "grid-template-rows: 60% 40%;"
        }
        return "grid-template-rows: 85% 15%;"
      }
    }
  }
</script>

<style>
  .app {
    width: 100%;
    height: 100%;
  }

  .load-scree-container {
    width: 100%;
    height: 100%;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    background-color: rgba(0.0, 0.0, 0.0, 0.5);
  }

  .main-container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 33% 50% 17%;
    grid-template-rows: 85% 15%;
    grid-template-areas:
            "treewindow textwindow contentwindow"
            "statuswindow statuswindow statuswindow";
    background-image: radial-gradient(#fff,#d8d8d8);

    font-family: var(--font);
  }

  .tree-window {
    grid-area: treewindow;
  }

  .text-window {
    grid-area: textwindow;
  }

  .content-window {
    grid-area: contentwindow;
  }

  .status-window {
    grid-area: statuswindow;
  }
</style>
