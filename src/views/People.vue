<template>
  <div class="people">
    {{ people }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "People",
  mounted() {
    this.$store.dispatch("fetchPeople");
  },
  computed: {
    ...mapState(["people"]),
  },
};
</script>