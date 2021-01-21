<template>
  <div>
    <PageBanner :title="starshipDetails.name" />
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4 text-center">
        <div
          class="p-4 sm:w-1/2 w-full"
          v-for="(key, index) in Object.keys(starshipDetails)"
          :key="index"
        >
          <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
            {{ starshipDetails[key] }}
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
      starshipId: this.$route.params.id,
    };
  },
  components: { GoBackLink, PageBanner },
  mounted() {
    this.$store.dispatch("fetchStarshipDetails", this.starshipId);
  },
  computed: mapState({
    starshipDetails: (state) => state.starships.starshipDetails,
  }),
};
</script>