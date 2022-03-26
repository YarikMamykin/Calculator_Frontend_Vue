<template>
	<div id="time_operand">
		<TimeUnit v-bind:readonly="readonly" hint="years" v-bind:allowedValues="[0,1,2,3,4]"/>
		<TimeUnit v-bind:readonly="readonly" hint="weeks" v-bind:allowedValues="[0,1,2,3,4]"/>
		<TimeUnit v-bind:readonly="readonly" hint="days" v-bind:allowedValues="[0,1,2,3,4]"/>
		<TimeUnit v-bind:readonly="readonly" hint="hours" v-bind:allowedValues="[0,1,2,3,4]"/>
		<TimeUnit v-bind:readonly="readonly" hint="minutes" v-bind:allowedValues="[0,1,2,3,4]"/>
		<TimeUnit v-bind:readonly="readonly" hint="seconds" v-bind:allowedValues="[0,1,2,3,4]"/>
		<CalendarSelector v-bind:readonly="readonly"/>
	</div>
</template>

<script>
import TimeUnit from '@/components/time/TimeUnit.vue';
import CalendarSelector from '@/components/time/CalendarSelector.vue';

export default {
  name: 'TimeOperand',
	props: [ 'readonly' ],
  components: {
		TimeUnit,
		CalendarSelector
  },
}
</script>

<style scoped>
#time_operand {
	display: grid;
	background-color: black;
	grid-template-columns: repeat(7, auto);
	grid-gap: 1vw;
	width: 100%;
	justify-content: center;
}
</style>


