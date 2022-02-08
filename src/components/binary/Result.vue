<template>
    <input 
        :style="cssStyle" 
        :value="value" 
        id="result_field" 
        type="text" 
        required maxlength="64" readonly>
</template>

<script>
export default {
    name: 'Result',
    props: [ 'position' ],
    computed: {
        value() {
            return this.$store.getters['binary/result/value'];
        },
        cssStyle() {
            return {
                'grid-column': this.position.col,
                'grid-row': this.position.row,
                'font-size': 'x-large',
                'text-align': 'center', 
                'margin-top': '50px'
            }
        }
    }
}
</script>

<style scoped>
input#result_field {
    background-color: #333333;
    border: 2px solid darkgoldenrod;
    color: white;
}
</style>
