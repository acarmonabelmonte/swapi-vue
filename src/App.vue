<template>
  <div id="app">
    <router-view />
    <MainFooter scrollTopPixels="200" />
  </div>
</template>

<script>
import MainFooter from "@/components/UI/MainFooter.vue";
export default {
  components: {
    MainFooter,
  },
};
</script>

