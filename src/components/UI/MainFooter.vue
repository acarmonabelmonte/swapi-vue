<template>
  <footer class="text-primary-100 body-font bg-black">
    <div
      class="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col"
    >
      <p class="text-sm sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
        © 2020 —
        <a
          href="https://github.com/acarmonabelmonte"
          class="ml-1"
          rel="noopener noreferrer"
          target="_blank"
          >Web app designed and coded by Adrián Carmona using Vue.js + Tailwind.
        </a>
      </p>
      <span
        class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
      >
        <button
          class="rounded-full h-6 w-6 flex items-center justify-center bg-primary-100 text-black"
          @click="upToTop()"
          id="myBtn"
          type="button"
        >
          ^
        </button>
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MainFooter",
  props: ["scrollTopPixels"],
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      var mybutton = document.getElementById("myBtn");
      if (
        document.body.scrollTop > this.scrollTopPixels ||
        document.documentElement.scrollTop > this.scrollTopPixels
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    },
    upToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>
