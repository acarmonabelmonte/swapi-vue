<template>
  <div class="starships"></div>
</template>

<script>
export default {
  name: "Starships",
  mounted() {
    this.$store.dispatch("fetchStarships");
  },
};
</script>