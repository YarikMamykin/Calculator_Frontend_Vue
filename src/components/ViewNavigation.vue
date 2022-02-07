<template>
  <nav id="view_navigation">
    <router-link to="/" class="view_selector">SIMPLE</router-link>
    <router-link to="/binary" class="view_selector">BINARY</router-link>
  </nav>
</template>

<script>
export default {
  name: 'ViewNavigation',

}
</script>

<style scoped>
nav#view_navigation {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  margin-top: 20px;
  gap: 20px;
  justify-content: center;
}

.view_selector {
  color: darkolivegreen;
  text-decoration: none;
  font-size: x-large;
  padding: 10px;
}

.router-link-exact-active {
  color: #FEE715; 
  background-color: #2C2D2A;
}
</style>
