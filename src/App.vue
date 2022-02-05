<template>
  <div id="view_navigation">
    <router-link to="/">
      <input type="checkbox" id="view_selector_button" checked>
      <label id="simple_view_selector">Simple</label>
    </router-link>
  </div>
  <router-view/>
</template>

<style>
body {
  display: block;
	background-color: black;
}

div#view_navigation {
  display: inline-block;
  margin-bottom: 20px;
  margin-top: 10px;
}

input[type=checkbox] {
  width: 100px;
  height: 100px;
}

</style>
