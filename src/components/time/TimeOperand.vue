<template>
	<div id="time_operand">
		<TimeUnit :readonly="readonly" :storage="storage" hint="years" :allowedValues="allowedValues.years"/>
		<TimeUnit :readonly="readonly" :storage="storage" hint="months" :allowedValues="allowedValues.months"/>
		<TimeUnit :readonly="readonly" :storage="storage" hint="weeks" :allowedValues="allowedValues.weeks"/>
		<TimeUnit :readonly="readonly" :storage="storage" hint="days" :allowedValues="allowedValues.days"/>
		<TimeUnit :readonly="readonly" :storage="storage" hint="hours" :allowedValues="allowedValues.hours"/>
		<TimeUnit :readonly="readonly" :storage="storage" hint="minutes" :allowedValues="allowedValues.minutes"/>
		<TimeUnit :readonly="readonly" :storage="storage" hint="seconds" :allowedValues="allowedValues.seconds"/>
		<CalendarSelector v-bind:readonly="readonly"/>
	</div>
</template>

<script>
import TimeUnit from '@/components/time/TimeUnit.vue';
import CalendarSelector from '@/components/time/CalendarSelector.vue';
import allowedValues from '@/store/time/allowedValues.js';

export default {
  name: 'TimeOperand',
	props: [ 'readonly', 'storage' ],
	data() {
		return {
			allowedValues
		}
	},
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
	grid-template-columns: repeat(8, auto);
	grid-gap: 1vw;
	width: 100%;
	justify-content: center;
}
</style>


