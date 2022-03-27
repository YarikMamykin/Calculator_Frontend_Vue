<template>
	<div id="time_view">
		<TimeOperand :readonly="false" :storage="firstOperand"/>
		<TimeOperation :storage="operation"/>
		<TimeOperand :readonly="false" :storage="secondOperand"/>
		<label id="is_label">IS</label>
		<TimeOperand :readonly="true" :storage="result"/>
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
	data() {
		return {
			firstOperand: 'time/first_operand',
			secondOperand: 'time/second_operand',
			operation: 'time/operation',
			result: 'time/result'
		};
	}
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

