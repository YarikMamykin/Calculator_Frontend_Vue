<template>
	<div id="simple_view">
		<UserOutput/>
		<UserResults/>
		<InputControls/>
		<OutputControlPad/>
	</div>
</template>

<script>
import UserOutput from '@/components/UserOutput.vue';
import UserResults from '@/components/UserResults.vue';
import InputControls from '@/components/InputControls.vue';
import OutputControlPad from '@/components/OutputControlPad.vue';

export default {
  name: 'Simple',
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
	},
	unmounted() {
		window.onkeydown = null;
	}
}
</script>

<style scoped>
#simple_view {
	display: grid;
	background-color: black;
	grid-template-rows: repeat(2,minmax(10vh,auto));
	grid-gap: 10px;
	width: 100%;
	grid-template-columns: repeat(3, auto);
	margin: 0 0 0 0;
}
</style>
