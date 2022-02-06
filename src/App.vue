<template>
  <ViewNavigation/>
  <router-view/>
</template>

<script>
import ViewNavigation from '@/components/ViewNavigation';

export default {
  name: 'App',
  components: {
    ViewNavigation
  }
}
</script>

<style>
body {
  display: block;
	background-color: black;
}
</style>
