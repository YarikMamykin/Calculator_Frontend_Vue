<template>
  <UserOutput/>
  <UserResults/>
	<InputControls/>
	<OutputControlPad/>
</template>

<script>
import UserOutput from './components/UserOutput.vue';
import UserResults from './components/UserResults.vue';
import InputControls from './components/InputControls.vue';
import OutputControlPad from './components/OutputControlPad.vue';

export default {
  name: 'App',
  components: {
    UserOutput,
		UserResults,
		InputControls,
		OutputControlPad
  },
	mounted() {
		window.onkeydown = (event) => {
			this.$store.commit('inputHandler/handle', event.key);
			event.stopPropagation();
		};
	}
}
</script>

<style>
body {
  display: block;
	background-color: black;
}

#app {
	display: grid;
	background-color: black;
	grid-template-rows: repeat(2,minmax(10vh,auto));
	grid-gap: 10px;
	width: 100%;
	grid-template-columns: repeat(3, auto);
	margin: 0 0 0 0;
}
</style>
