<template>
  <div class="home">
    <div class="w-full h-screen relative text-primary-100">
      <img
        src="../assets/images/clone-4773016.jpg"
        class="absolute top-0 left-0 w-full h-full object-cover"
      />

      <NavBar />

      <div
        class="absolute top-0 left-0 w-full h-full flex justify-center items-center text-center px-12"
      >
        <div>
          <h1 class="text-3xl md:text-6xl leading-tight mb-16">
            Duis aute irure dolor, <br class="hidden md:block" />reprehenderit
            in voluptate.
          </h1>
          <a
            href="#"
            class="border border-white py-4 px-8 hover:bg-white hover:text-black"
            >Get started</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/UI/NavBar.vue";

export default {
  name: "Home",
  components: {
    NavBar,
  },
};
</script>
