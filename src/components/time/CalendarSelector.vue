<template>
		<input type="date" :readonly="readonly" v-model="calendarValue" @change="daySelected"/>
</template>

<script>
export default {
  name: 'CalendarSelector',
	props: [ 'readonly' ],
	data() {
		return {
			calendarValue: new Date().toISOString().slice(0,10)
		}
	},
	methods: {
		daySelected: function(e) {
			console.log(this.calendarValue);
		}
	}
}
</script>
