<template>
		<div id="user_results">
			<ol id="results_list">
				<li v-for="result in results" v-bind:key="result">{{ result }}</li>
			</ol>

		</div>
</template>

<script>
export default {
  name: 'UserResults',
	computed: {
		results() {
			return this.$store.getters['results/value'];
		}
	}
}
</script>

<style scoped> 
div#user_results {
	grid-row: 2;
	grid-column: 1;
	background: #282828;
	width: 30vw;
	max-height: 55vh;
}
#results_list {
	list-style-type: disclosure-closed;
	color: aliceblue;
	overflow: scroll;
	max-height: 100%;
	margin-top: 0;
	font-size: x-large;
}
</style>
