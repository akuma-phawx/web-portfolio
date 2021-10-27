<template>
  <div class="container flex flex-col max-w-full">
    <Nav class="bg-red-400w-full max-w-full" />
    <router-view class="h-screen w-full max-w-full" />
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
