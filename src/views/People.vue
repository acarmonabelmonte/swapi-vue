<template>
  <div class="people"></div>
</template>

<script>
export default {
  name: "People",
  mounted() {
    this.$store.dispatch("fetchPeople");
  },
};
</script>