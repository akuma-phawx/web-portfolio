<template>
  <div class="container flex">
    <Nav />
    <router-view />
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
