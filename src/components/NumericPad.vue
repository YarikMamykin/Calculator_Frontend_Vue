<template>
  <div class="pad" id="number_buttons"> 
    <button v-for="button in buttons" v-bind:key="button" @click="buttonPressed(button)">{{ button }}</button>
  </div>
</template>

<script>
export default {
  name: 'NumericPad',
  data() {
    return {
      buttons: [
        '9','8','7',
        '6','5','4',
        '3','2','1',
        '0','00','000'
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
div.pad#number_buttons {
  display: grid;
  grid-column: 1;
  grid-template-columns: repeat(3, 10vw);
  grid-gap: 10px;
  justify-self: right;
}

div.pad#number_buttons > button {
	height: 10vh;
	width: 10vw;
	background-color: #222222;
	color: #aaaaaa;
	font-size: 5vh;
	border-color: gray;
}

div.pad#number_buttons > button:hover {
	color: #0debc3;
	border: dashed 5px #0debc3;
}

div.pad#number_buttons > button:active {
	color: black;
	background-color: white;
	transform: scale(0.75,0.75);
}
</style>

