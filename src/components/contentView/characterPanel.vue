<template>
  <div class="character-panel-container">
    
    <div class="character-thumbnail">💂🏻‍♂</div>
    <div class="character-name">{{name}}</div>

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
.character-panel-container{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  padding: 0.5em 0.5em 0.5em 1.2em;
  margin: 0.2em 0.5em;

  border: 2px solid #b9b9b9;
  border-radius: 20em;
  cursor: pointer;
}

.character-panel-container:hover{
    border-color: #6c9dc6;
}

.character-thumbnail{
  font-size: 2em;
}

.character-name{
  margin-left: 1em;
  font-size: 1em;
}
</style>