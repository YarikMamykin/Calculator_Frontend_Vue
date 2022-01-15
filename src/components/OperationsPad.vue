<template>
  <div class="pad" id="operations_buttons" > 
    <button v-for="button in buttons" v-bind:key="button" @click="buttonPressed(button)">{{ button }}</button>
  </div>
</template>

<script>
export default {
  name: 'OperationsPad',
  data() {
    return {
      buttons: [
        "+",
        "-",
        "/",
        "*",
        "."
      ]
    };
  },
  methods:{
    buttonPressed(buttonId) {
			this.$store.commit('inputHandler/handle', buttonId);
    }
  }
}
</script>

<style>
div.pad#operations_buttons {
  display: grid;
  grid-column: 2;
  justify-self: center;
  grid-template-columns: auto;
  grid-template-rows: repeat(5, auto);
  grid-row-gap: 10px;
}

div.pad#operations_buttons > button {
	width: 4vw;
	height: auto;
  background-color: #222222;
	color: #aaaaaa;
	font-size: 5vh;
	border: solid #020202;
}

div.pad#operations_buttons > button:hover {
  border-image-source: linear-gradient(to right, #700000, #a000fc);
  border-image-slice: 1;
  transform: scale(1.25, 1.25);
}

</style>

