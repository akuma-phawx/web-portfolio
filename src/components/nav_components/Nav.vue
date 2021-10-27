<template>
  <div class="container flex flex-col text-center">
    <!-- Photo -->
    <div id="personal_image" class="flex flex-col justify-center pb-10">
      <div class="image_container mx-auto pb-4 border-solid-2">
        <img
          src="../../assets/img/me.jpg"
          class="w-40 h-40 md:w-52 md:h-52"
          alt="Avatar"
        />
      </div>

      <hr />
      <!-- Title -->
      <div id="title">
        <p id="fullName" class="text-2xl">Christopher Vradis</p>
        <p id="jobTitle" class="text-md">Fullstack Developer</p>
      </div>
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
    <!-- Social Links -->
    <div id="links" class="flex justify mx-auto mt-4 mb-2">
      <a href="mailto:chrisvradis00@gmail.com">
        <img src="../../assets/svgs/email.svg" alt="Email SVG" class="mr-4" />
      </a>
      <a href="https://github.com/akuma-phawx">
        <img
          src="../../assets/svgs/github_circular.svg"
          alt="Github SVG"
          class="mr-4"
        />
      </a>
      <a href="https://www.linkedin.com/in/christopher-vradis-3b9a68151/">
        <img
          src="../../assets/svgs/linkedin_circular.svg"
          alt="LinkedIn SVG"
          class="mr-4"
        />
      </a>
      <a href="https://www.instagram.com/chris.vrd_sw/">
        <img
          src="../../assets/svgs/instagram_circular.svg"
          alt="Instagram SVG"
        />
      </a>
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
