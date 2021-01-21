<template>
  <ring-loader :loading="loading" :color="color" :size="size"></ring-loader>
</template>

<script>
import RingLoader from "vue-spinner/src/RingLoader.vue";
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
    RingLoader,
  },
};
</script>