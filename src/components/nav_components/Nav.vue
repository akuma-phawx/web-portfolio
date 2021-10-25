<template>
  <div class="container flex flex-col text-center">
    <div id="personal_image" class="flex flex-col justify-center pb-10">
      <img
        src="https://i.redd.it/dh5otp8kcf741.png"
        class="w-32 h-32 md:w-64 md:h-64"
        alt="Avatar"
      />
      <h3>Fullstack Developer</h3>
    </div>
    <div id="nav " class="flex justify-center md:flex-col">
      <router-link to="/"> Home </router-link>

      <router-link to="/about"> About </router-link>

      <router-link to="/portfolio"> Portfolio </router-link>

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
