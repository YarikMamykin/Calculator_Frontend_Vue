<template>
  <button id="bsubmit" @click="buttonPressed">=</button>
</template>

<script>
export default {
  name: 'SubmitButton',
  methods:{
    buttonPressed() {
			this.$store.commit('simple/inputHandler/handle', 'Enter');
    }
  }
}
</script>

<style>
button#bsubmit {
  grid-column: 3;
  grid-row: 1;
  height: auto;
  width: 3vw;
  background-color: #222222;
  color: #aaaaaa;
  font-size: 5vh;
  border: solid #202020 3px;
}

button:hover#bsubmit {
  background-image: linear-gradient(to right, #00f000, #00acfc);
  border-image-source: linear-gradient(to right, #00f000, #00acfc);
  -webkit-background-clip: text;
  border-image-slice: 1;
  -webkit-text-fill-color: transparent;
}
</style>

