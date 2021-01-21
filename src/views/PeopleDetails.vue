<template>
  <div>
    <PageBanner :title="peopleDetails.name" />
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4 text-center">
        <div
          class="p-4 sm:w-1/2 w-full"
          v-for="(key, index) in Object.keys(peopleDetails)"
          :key="index"
        >
          <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
            {{ peopleDetails[key] }}
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
      peopleId: this.$route.params.id,
    };
  },
  components: { GoBackLink, PageBanner },
  mounted() {
    this.$store.dispatch("people/fetchPeopleDetails", this.peopleId);
  },
  computed: mapState({
    peopleDetails: (state) => state.people.peopleDetails,
  }),
};
</script>