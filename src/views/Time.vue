<template>
	<div id="time_view">
		<TimeOperand/>
		<TimeOperand/>
	</div>
</template>

<script>
import TimeOperand from '@/components/time/TimeOperand.vue';

export default {
  name: 'Time',
  components: {
		TimeOperand
  },
}
</script>

<style scoped>
#time_view {
	display: block;
	background-color: black;
}
</style>

