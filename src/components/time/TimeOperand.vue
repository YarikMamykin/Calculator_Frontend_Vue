<template>
	<div id="time_operand">
		<TimeUnit hint="years" v-bind:allowedValues="[0,1,2,3,4]"/>
		<TimeUnit hint="weeks" v-bind:allowedValues="[0,1,2,3,4]"/>
		<TimeUnit hint="days" v-bind:allowedValues="[0,1,2,3,4]"/>
		<TimeUnit hint="hours" v-bind:allowedValues="[0,1,2,3,4]"/>
		<TimeUnit hint="minutes" v-bind:allowedValues="[0,1,2,3,4]"/>
		<TimeUnit hint="seconds" v-bind:allowedValues="[0,1,2,3,4]"/>
	</div>
</template>

<script>
import TimeUnit from '@/components/time/TimeUnit.vue';

export default {
  name: 'TimeOperand',
  components: {
		TimeUnit
  },
}
</script>

<style scoped>
#time_operand {
	display: grid;
	background-color: black;
	grid-template-columns: repeat(6, auto);
	grid-gap: 1vw;
	width: 100%;
	justify-content: center;
	margin-bottom: 10vh;
}
</style>


