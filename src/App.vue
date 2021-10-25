<template>
  <div class="flex flex-col md:flex-row">
    <Nav class="bg-gray-300 md:w-1/4" />
    <router-view class="bg-yellow-400" />
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
