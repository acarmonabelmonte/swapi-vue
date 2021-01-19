<template>
  <div class="people">
    <PageBanner
      title="PEOPLE"
      image="https://images.unsplash.com/photo-1579566346927-c68383817a25?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    />

    <section class="text-gray-600 body-font">
      <div class="container px-5 py-20 mx-auto">
        <div
          class="mb-6 w-full lg:w-3/12 h-10 pl-3 pr-2 bg-white border rounded-full flex justify-between items-center relative"
        >
          <input
            @keyup.enter="searchByName"
            type="search"
            name="search"
            id="search"
            v-model="search"
            placeholder="Search by name..."
            class="appearance-none w-full outline-none focus:outline-none active:outline-none"
          />
          <button
            @click="searchByName"
            class="ml-1 outline-none focus:outline-none active:outline-none"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-6 h-6"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
        <div class="flex flex-wrap -m-4 mb-4">
          <div
            class="p-4 w-full lg:w-1/3"
            v-for="(character, index) in data.people.results"
            :key="index"
          >
            <router-link
              :to="{
                name: 'PeopleDetails',
                params: { id: formatId(character.url) },
              }"
            >
              <div
                class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
              >
                <h1
                  class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3"
                >
                  {{ character.name }}
                </h1>

                <a class="text-indigo-600 inline-flex items-center"
                  >View Details
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </router-link>
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
export default {
  name: "People",
  data() {
    return {
      search: "",
    };
  },
  components: {
    GoBackLink,
    PageBanner,
  },
  mounted() {
    this.$store.dispatch("fetchPeople");
  },
  computed: mapState({
    people: (state) => state.people,
    data: "people",
  }),
  methods: {
    formatId(url) {
      return url
        .substring(url.lastIndexOf("people"))
        .replace("people/", "")
        .replace("/", "");
    },
    searchByName() {
      this.$store.dispatch("searchPeople", this.search);
    },
  },
};
</script>