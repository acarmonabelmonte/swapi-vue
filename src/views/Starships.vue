<template>
  <div class="starships">
    {{ starships }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Starships",
  mounted() {
    this.$store.dispatch("fetchStarships");
  },
  computed: {
    ...mapState(["starships"]),
  },
};
</script>