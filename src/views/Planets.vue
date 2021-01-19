<template>
  <div class="planets"></div>
</template>

<script>
export default {
  name: "Planets",
  mounted() {
    this.$store.dispatch("fetchPlanets");
  },
};
</script>