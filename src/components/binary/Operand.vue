<template>
  <div :style="cssStyle" class="binary_operand">
    <button class="binary_input" @click="shift(0)">&lt;&lt;</button>
    <input class="binary_input" 
           id="binary_input_field"
           v-model="currentValue" 
           type="text" 
           :onkeydown="changed" 
           :oninput="inputHandler"
           required maxlength="64">
    <button class="binary_input" @click="shift(1)">&gt;&gt;</button>
  </div>
</template>

<script>
const AllowedKeys = [
  'Escape',
  'Backspace',
  '0',
  '1',
  ' '
];

export default {
  name: 'Operand',
  props: [ 'position', 'operand' ],
  data() {
    return {
      currentValue: ''
    };
  },
  methods: {
    shift(direction) {
      this.$store.commit(`${this.operand}/shift`, direction);
      this.currentValue = this.value;
    },
    changed(e) {
      const allowedKeyEntered = AllowedKeys.find((k)=>e.key === k);
      if(!allowedKeyEntered) {
        e.preventDefault();
        return;
      }

      if(allowedKeyEntered === AllowedKeys[0]) {
        this.$store.commit(`${this.operand}/reset`);
        this.currentValue = '';
        return;
      }

      if(allowedKeyEntered === AllowedKeys.at(-1)) {
        this.$store.commit(`${this.operand}/invert`);
        this.currentValue = this.value;
        e.preventDefault();
        return;
      }
    },
    inputHandler() {
      this.$store.commit(`${this.operand}/set`, this.currentValue);
    }
  },
  computed: {
    value() {
      return this.$store.getters[`${this.operand}/value`];
    },
    cssStyle() {
      return {
        'grid-column': this.position.col,
        'grid-row': this.position.row
      }
    }
  }
}
</script>

<style scoped>
.binary_operand {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.binary_input {
  text-align: center;
  font-size: x-large;
  background-color: indigo;
  border: 2px solid darkgoldenrod;
  color: white;
}
input#binary_input_field {
  width: 60vw;
}
</style>
