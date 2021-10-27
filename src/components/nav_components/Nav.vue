<template>
  <div class="container flex justify-end mr-5 mt-4 mb-4">
    <!-- Router Links -->
    <div id="nav">
      <router-link class="text-2xl mr-1" to="/"> Home </router-link>
      <router-link class="text-2xl mr-1" to="/about"> About </router-link>
      <router-link class="text-2xl mr-1" to="/portfolio">
        Portfolio
      </router-link>
      <router-link class="text-2xl mr-1" to="/skills"> Skills </router-link>

      <router-link class="text-2xl mr-5" to="/contact"> Contact </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  /* width: 100px;
  height: 100px; */
  border-radius: 50%;
}
</style>
