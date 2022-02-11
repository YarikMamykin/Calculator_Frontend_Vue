<template>
  <div id="binary_view">

    <Operand operand="binary/first_operand" v-bind:position="{ col: 1, row: 1 }"/>
    <Operation v-bind:position="{ col: 2, row: 2 }"/>
    <Operand operand="binary/second_operand" v-bind:position="{ col: 1, row: 3 }"/>

    <Result v-bind:position="{ col: 1, row: 4 }"/>
  </div>

</template>

<script>
import Operand from '@/components/binary/Operand.vue';
import Operation from '@/components/binary/Operation.vue';
import Result from '@/components/binary/Result.vue';

export default {
  name: 'Binary',
  components: {
    Operand,
    Operation,
    Result
  }
}
</script>

<style scoped>

div#binary_view {
  display: grid;
  justify-content: center;
  gap: 10px;
  grid-template-rows: repeat(4, auto);
  grid-template-columns: repeat(2, auto);
  margin-top: 100px;
}


</style>
