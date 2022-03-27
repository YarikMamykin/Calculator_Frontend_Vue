<template>
    <select @change="operationSelected">
      <option 
        v-for="option in options" 
        v-bind:key="option.value" 
        v-bind:selected="option.value == selectedOperation">{{ option.uservalue }}</option>
    </select>
</template>

<script>
export default {
  name: 'TimeOperation',
  props: [ 'storage' ],
  methods: {
    operationSelected(e) {
      const operation = this.options[e.target.options.selectedIndex].value;
      this.$store.commit(`${this.storage}/set`, operation);
    }
  },
  computed: {
    selectedOperation() {
      return this.$store.getters[`${this.storage}/value`];
    },
    options() {
      return [ 
        { value: '+', uservalue: 'AFTER' },
        { value: '-', uservalue: 'BEFORE' },
      ];
    }, 
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
  font-size: x-large;
}

option {
  background-color: white;
  color: black;
  font-weight: bold;
}
</style>
