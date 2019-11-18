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
  margin: 0.2em;

  border: 2px solid #d9d9d9;
  border-radius: 3em;
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