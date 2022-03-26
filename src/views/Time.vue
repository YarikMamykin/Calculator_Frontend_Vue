<template>
	<div id="time_view">
		<TimeOperand v-bind:readonly="false"/>
		<TimeOperation/>
		<TimeOperand v-bind:readonly="false"/>
		<label id="is_label">IS</label>
		<TimeOperand v-bind:readonly="true"/>
	</div>
</template>

<script>
import TimeOperand from '@/components/time/TimeOperand.vue';
import TimeOperation from '@/components/time/TimeOperation.vue';

export default {
  name: 'Time',
  components: {
		TimeOperand,
		TimeOperation
  },
}
</script>

<style scoped>
#time_view {
	display: flex;
	flex-direction: column;
	gap: 30px;
	background-color: black;
	margin-top: 15vh;
	align-items: center;
}

label#is_label {
	background-color: inherit;
	color: lightyellow;
	font-weight: bold;
	text-align: center;
	font-size: x-large;
	margin-top: 20px;
	margin-bottom: 20px;
}
</style>

