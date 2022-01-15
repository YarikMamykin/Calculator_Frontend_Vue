<template>
		<div class="controls"> 
			<NumericPad/>
      <OperationsPad/>
      <SubmitButton/>
    </div>
</template>

<script>
import OperationsPad from './OperationsPad.vue';
import NumericPad from './NumericPad.vue';
import SubmitButton from './SubmitButton.vue';

export default {
  name: 'InputControls',
  components: {
    NumericPad,
    OperationsPad,
		SubmitButton
  }
}
</script>

<style>
div.controls {
	background-color: #000;
	display: grid;
	grid-template-columns: repeat(3, auto);
	grid-row-gap: 10px;
}

div.pad {
	background-color: black;
	height: auto;
}

</style>

