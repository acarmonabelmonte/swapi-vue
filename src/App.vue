<template>
  <div id="app">
    <h1></h1>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/people">People</router-link> |
      <router-link to="/planets">Planets</router-link> |
      <router-link to="/starships">Starships</router-link> |
    </div> -->
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

