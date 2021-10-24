<template>
  <div class="container md:flex">
    <Nav class="bg-blue-700 h-1/6 w-full md:w-1/4 md:h-screen" />
    <router-view class="bg-yellow-600 w-screen h-screen" />
  </div>
</template>

<script>
import Nav from './components/nav_components/Nav.vue';
export default {
  name: 'App',
  components: {
    Nav,
  },
};
</script>

<style></style>
