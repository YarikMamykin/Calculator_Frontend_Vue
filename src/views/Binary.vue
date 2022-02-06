<template>
  <div id="binary_view">

    <div id="left_binary" class="binary_operand">
      <button class="binary_input">&lt;&lt;</button>
      <input class="binary_input" type="text" value="101" required maxlength="64">
      <button class="binary_input">&gt;&gt;</button>
    </div>

    <select id="binary_selection">
      <option value="&">AND</option>
      <option value="|">OR</option>
      <option value="^">XOR</option>
    </select>
    
    <input id="binary_result" type="text" value="111" required readonly>

    <div id="right_binary" class="binary_operand">
      <button class="binary_input">&lt;&lt;</button>
      <input class="binary_input" type="text" value="101" required maxlength="64">
      <button class="binary_input">&gt;&gt;</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Binary'
}
</script>

<style scoped>
div#binary_view {
  display: grid;
  justify-content: center;
  gap: 10px;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: repeat(3, auto);
}

div#left_binary {
  grid-column: 1;
  grid-row: 1;
}

select#binary_selection {
  grid-column: 2;
  grid-row: 2;
  font-size: x-large;
}

input#binary_result {
  grid-column: 3;
  grid-row: 2;
  font-size: x-large;
  text-align: center;
}

div#right_binary {
  grid-column: 1;
  grid-row: 3;
}

.binary_operand {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.binary_input {
  text-align: center;
  font-size: x-large;
}
</style>
