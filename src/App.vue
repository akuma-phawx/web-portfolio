<template>
  <div class="container md:flex">
    <Nav class="bg-blue-700" />
    <router-view class="bg-yellow-600" />
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
