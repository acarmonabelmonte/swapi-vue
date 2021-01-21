<template>
  <div>
    <PageBanner :title="planetDetails.name" />
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4 text-center">
        <div
          class="p-4 sm:w-1/2 w-full"
          v-for="(key, index) in Object.keys(planetDetails)"
          :key="index"
        >
          <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
            {{ planetDetails[key] }}
          </h2>
          <p class="leading-relaxed uppercase">{{ key.replace("_", " ") }}</p>
        </div>
      </div>
      <GoBackLink />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import GoBackLink from "@/components/UI/GoBackLink.vue";
import PageBanner from "@/components/UI/PageBanner.vue";
export default {
  data() {
    return {
      planetId: this.$route.params.id,
    };
  },
  components: { GoBackLink, PageBanner },
  mounted() {
    this.$store.dispatch("planets/fetchPlanetDetails", this.planetId);
  },
  computed: mapState({
    planetDetails: (state) => state.planets.planetDetails,
  }),
};
</script>