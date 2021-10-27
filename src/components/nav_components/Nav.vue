<template>
  <div class="container flex flex-col text-center">
    <div id="personal_image" class="flex flex-col justify-center pb-10">
      <div class="image_container mx-auto pb-4 border-solid-2">
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
      <router-link class="mr-4 md:mr-0" to="/"> Home </router-link>
      <router-link class="mr-4 md:mr-0" to="/portfolio">
        Portfolio
      </router-link>
      <router-link class="mr-4 md:mr-0" to="/skills"> Skills </router-link>
      <router-link class="mr-4 md:mr-0" to="/about"> About </router-link>
      <router-link to="/contact"> Contact </router-link>
    </div>
    <div id="links" class="flex justify mx-auto mt-4 mb-2">
      <img src="../../assets/svgs/email.svg" alt="Email SVG" class="mr-4" />
      <img
        src="../../assets/svgs/github_circular.svg"
        alt="Github SVG"
        class="mr-4"
      />
      <img
        src="../../assets/svgs/linkedin_circular.svg"
        alt="LinkedIn SVG"
        class="mr-4"
      />
      <img src="../../assets/svgs/instagram_circular.svg" alt="Instagram SVG" />
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
