<template>
  <div class="container flex flex-col text-center">
    <div id="personal_image" class="flex flex-col justify-center pb-10">
      <div class="image_container mx-auto pb-4">
        <img
          src="../../assets/img/me.jpg"
          class="w-32 h-32 md:w-64 md:h-64"
          alt="Avatar"
        />
      </div>

      <hr />
      <h3>Fullstack Developer</h3>
    </div>
    <div id="nav " class="flex justify-center md:flex-col">
      <router-link to="/"> Home </router-link>
      <router-link to="/portfolio"> Portfolio </router-link>
      <router-link to="/skills"> Skills </router-link>
      <router-link to="/about"> About </router-link>
      <router-link to="/contact"> Contact </router-link>
    </div>
    <div id="links">
      <span>links goes here</span>
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
