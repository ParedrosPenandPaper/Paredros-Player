<template>
  <div class="location-panel-container">
    
    <div class="location-thumbnail">🏰</div>
    <div class="location-name">{{name}}</div>

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
.location-panel-container{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  padding: 0.5em 0.5em 0.5em 1.2em;
  margin: 0.2em 0.5em;

  border: 2px solid #b9b9b9;
  border-radius: 20em;
  cursor: pointer;
}

.location-panel-container:hover{
    border-color: #6c9dc6;
}

.location-thumbnail{
  font-size: 2em;
}

.location-name{
  margin-left: 1em;
  font-size: 1em;
}
</style>