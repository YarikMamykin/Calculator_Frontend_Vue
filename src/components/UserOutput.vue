<template>
  <div id="user_io">
    <label id="output">{{ expression }}</label>
  </div>
</template>

<script>
export default {
  name: 'UserOutput',
  computed: {
    expression() {
      return this.$store.getters['output/value'];
    }
  }
}
</script>

<style scoped>
div#user_io {
  background-color: #282828;
  grid-row: 1;
  grid-column: 1/4;
  height: 20vh;
}

div#user_io label#output {
  color: rgb(230,230,230);
  font-size: 5vh;
  text-align: center;
  position: absolute;
  box-sizing: border-box;
  margin-top: 4vh;
  margin-left: 1vw;
  max-width: 96vw;
  max-height: 14vh;
  overflow: scroll;
  overflow-wrap: break-word;
}
</style>

