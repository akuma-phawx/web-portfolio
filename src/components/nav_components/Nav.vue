<template>
  <div class="container flex">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <span> | </span>
      <router-link to="/about">About</router-link>
      <span> | </span>
      <router-link to="/portfolio">Portfolio</router-link>
      <span> | </span>
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#nav {
  height: 100vh;
  border-right: 2px solid black;
}
h1 {
  text-align: center;
}
</style>
