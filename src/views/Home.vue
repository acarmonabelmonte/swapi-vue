<template>
  <div class="home">
    <div class="w-full h-screen relative text-primary-100">
      <img
        src="../assets/images/spac-bg.png"
        class="absolute top-0 left-0 w-full h-full object-cover"
      />

      <NavBar />

      <div
        class="absolute top-0 left-0 w-full h-full flex justify-center items-center text-center px-12"
      >
        <div>
          <h1 class="text-3xl md:text-6xl leading-tight mb-16">
            Welcome to SWAPI VUE,
            <br class="hidden md:block" />a Vue App that shows
            <br class="hidden md:block" />
            data from a Star Wars API.
          </h1>
          <a
            href="#sections"
            class="border border-primary-100 py-4 px-8 hover:bg-primary-100 hover:text-black"
            >Get started</a
          >
        </div>
      </div>
    </div>
    <Sections id="sections" />
  </div>
</template>

<script>
import NavBar from "@/components/UI/NavBar.vue";
import Sections from "@/components/Home/Sections.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Sections,
  },
};
</script>
