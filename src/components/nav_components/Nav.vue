<template>
  <div class="container">
    <div id="nav" class="flex justify-center md:flex-col">
      <router-link to="/" class="text-center">Home</router-link>

      <router-link to="/about" class="text-center">About</router-link>

      <router-link to="/portfolio" class="text-center">Portfolio</router-link>

      <router-link to="/contact" class="text-center">Contact</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* #nav {
  height: 100vh;
  border-right: 1px solid black;
} */
</style>
