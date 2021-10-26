<template>
  <div class="flex max-w-full flex-col md:flex-row">
    <Nav
      class="
        bg-gray-300
        border-b-2
        md:border-r-2 md:border-b-0
        min-w-full
        md:min-w-0 md:w-1/4
      "
    />
    <router-view class="bg-yellow-400 max-w-full h-screen" />
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
