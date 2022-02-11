<template>
  <div class="pad" id="output_controls"> 
		<button class="iconed_button" v-for="button in buttons" v-bind:key="button.id" :id="button.id" @click="buttonPressed(button.text)"/>
  </div>
</template>

<script>
export default {
  name: 'OutputControlPad',
  data() {
    return {
      buttons: [
				{ id: "del_symbol_button", text: "Backspace" },
				{ id: "clear_button", text: "Delete" }
      ]
    };
  },
  methods:{
    buttonPressed(buttonId) {
			this.$store.commit('simple/inputHandler/handle', buttonId);
    }
  }
}
</script>

<style>
div.pad#output_controls {
	display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(2, auto);
	grid-row: 2;
	grid-column: 3;
	justify-self: center;
	height: fit-content;
	margin-right:	20px;
	background-color: unset;
}

button.iconed_button {
	content: '';
	display: inline-block;
	width: 70px;
	height: 70px;
	border: none;
}

button.iconed_button:active {
	transform: scale(0.75, 0.75);
}

button.iconed_button#del_symbol_button:hover {
	border: solid 3px #0000aa;
	filter: unset;
}

button.iconed_button#del_symbol_button:active {
	border: solid 5px #aaaa00;
	filter: invert(1);
}

button.iconed_button#clear_button:hover {
	border: solid 3px #660000;
	filter: unset;
}

button.iconed_button#clear_button:active {
	transform: scale(0.75, 0.75);
	filter: invert(1);
	border: solid 5px #00ffff;
}

button.iconed_button#del_symbol_button {
	background: url("https://img.icons8.com/ios-glyphs/2x/clear-symbol.png") no-repeat center;
	background-color: #666677;
}

button.iconed_button#clear_button {
	background: url("https://img.icons8.com/material-sharp/2x/filled-trash.png") no-repeat center;
	background-color: #666677;
}

</style>

