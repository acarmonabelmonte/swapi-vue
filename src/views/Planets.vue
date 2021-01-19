<template>
  <div class="planets">
    {{ planets }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Planets",
  mounted() {
    this.$store.dispatch("fetchPlanets");
  },
  computed: {
    ...mapState(["planets"]),
  },
};
</script>