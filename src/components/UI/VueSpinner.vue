<template>
  <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
export default {
  props: {
    loading: {
      type: Boolean,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  components: {
    PulseLoader,
  },
};
</script>