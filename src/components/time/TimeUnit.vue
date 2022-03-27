<template>
  <div id="time_unit">
    <select :disabled="readonly" @change="valueSelected">
      <option 
        v-for="value in allowedValues" 
        v-bind:key="value" 
        v-bind:selected="value == selectedValue">{{ value }}
      </option>
    </select>
    <label>{{ hint }}</label>
  </div>
</template>

<script>
export default {
  name: 'TimeUnit',
  props: [ 'readonly', 'storage', 'hint', 'allowedValues' ],
  methods: {
    valueSelected: function(e) {
      const value = this.allowedValues[e.target.options.selectedIndex];
      this.$store.commit(`${this.storage}/set_${this.hint}`, value);
    }
  },
  computed: {
    selectedValue() {
      return this.$store.getters[`${this.storage}/${this.hint}`];
    },
  }
}
</script>

<style scoped>
select {
  appearance: none;
  -webkit-appearance: none;
  background-color: deepskyblue;
  border: 4px dashed lightgoldenrodyellow;
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

label {
  width: auto;
  background-color: antiquewhite;
  display: block;
  text-align: center;
}

div#time_unit {
  display: flex;
  flex-direction: column;
  max-width: 10vw;
  width: 10vw;
}
</style>

