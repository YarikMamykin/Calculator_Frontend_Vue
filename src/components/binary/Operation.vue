<template>
    <select :style="cssStyle" @change="operationSelected">
      <option 
        v-for="option in options" 
        v-bind:key="option.value" 
        v-bind:selected="option.value == operationSelected">{{ option.uservalue }}</option>
    </select>
</template>

<script>
export default {
  name: 'Operation',
  props: [ 'position' ],
  methods: {
    operationSelected: function(e) {
      const operation = this.options[e.target.options.selectedIndex].value;
			this.$store.commit('binary/operation/set', operation);
    }
  },
  computed: {
    selectedOption() {
      return this.$store.getters['binary/operation/value'];
    },
    options() {
      return [ 
        { value: '&', uservalue: 'AND' },
        { value: '|', uservalue: 'OR' },
        { value: '^', uservalue: 'XOR' }
      ];
    }, 
    cssStyle() {
      return {
        'grid-column': this.position.col,
        'grid-row': this.position.row,
        'font-size': 'x-large'
      }
    }
  }
}
</script>

<style scoped>
select {
  appearance: none;
  -webkit-appearance: none;
  background-color: darkcyan;
  border: 4px dashed cyan;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  color: black;
  font-weight: bold;
  text-align: center;
}

option {
  background-color: white;
  color: black;
  font-weight: bold;
}
</style>
