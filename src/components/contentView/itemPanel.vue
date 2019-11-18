<template>
  <div class="item-panel-container">
    
    <div class="item-thumbnail">🔨</div>
    <div class="item-name">{{name}}</div>

  </div>
</template>
<script>
export default {
  props: {
    name: String
  }
}
</script>
<style scoped>
.item-panel-container{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  padding: 0.5em 0.5em 0.5em 1.2em;
  margin: 0.2em 0.5em;

  border: 2px solid #b9b9b9;
  border-radius: 20em;
  cursor: pointer;
}

.item-panel-container:hover{
    border-color: #6c9dc6;
}

.item-thumbnail{
  font-size: 2em;
}

.item-name{
  margin-left: 1em;
  font-size: 1em;
}
</style>