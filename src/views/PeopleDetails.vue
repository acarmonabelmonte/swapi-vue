<template>
  <div>
    <p>{{ peopleDetails }}</p>
    <GoBackLink />
  </div>
</template>

<script>
import { mapState } from "vuex";
import GoBackLink from "@/components/UI/GoBackLink.vue";
export default {
  data() {
    return {
      peopleId: this.$route.params.id,
    };
  },
  components: { GoBackLink },
  mounted() {
    this.$store.dispatch("fetchPeopleDetails", this.peopleId);
  },
  computed: mapState({
    peopleDetails: (state) => state.people.peopleDetails,
  }),
};
</script>