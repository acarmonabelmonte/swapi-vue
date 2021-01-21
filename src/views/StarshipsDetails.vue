<template>
  <div>
    <PageBanner :title="starshipDetails.name" />
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4 mb-4">
          <div
            class="p-4 w-full lg:w-1/3"
            v-for="(key, index) in Object.keys(starshipDetails).slice(0, 13)"
            :key="index"
          >
            <div
              class="h-full flex justify-center bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
            >
              <Vue-Spinner
                :loading="isLoading"
                :color="color"
                :size="size"
              ></Vue-Spinner>
              <div v-if="!isLoading">
                <h1
                  class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3"
                >
                  {{ starshipDetails[key] }}
                </h1>
                <p class="leading-relaxed">
                  {{ key.replace("_", " ") }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <GoBackLink />
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import GoBackLink from "@/components/UI/GoBackLink.vue";
import PageBanner from "@/components/UI/PageBanner.vue";
import VueSpinner from "@/components/UI/VueSpinner.vue";
export default {
  data() {
    return {
      starshipId: this.$route.params.id,
      color: "#4E4FE7",
      size: "40px",
    };
  },
  components: { GoBackLink, PageBanner, VueSpinner },
  mounted() {
    this.$store.dispatch("starships/fetchStarshipDetails", this.starshipId);
  },
  computed: mapState({
    starshipDetails: (state) => state.starships.starshipDetails,
    isLoading() {
      return this.$store.getters.loadingStatus;
    },
  }),
};
</script>