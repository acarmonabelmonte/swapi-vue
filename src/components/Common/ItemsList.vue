<template>
  <div class="flex flex-wrap -m-4 mb-4">
    <div
      class="p-4 w-full lg:w-1/3"
      v-for="(item, index) in itemsList"
      :key="index"
    >
      <router-link
        :to="{
          name: detailedPage,
          params: { id: formatId(item.url) },
        }"
      >
        <div
          class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
        >
          <h1
            class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3"
          >
            {{ item.name }}
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
</template>

<script>
export default {
  props: {
    itemsList: {
      type: Array,
    },
    category: {
      type: String,
    },
  },
  methods: {
    formatId(url) {
      return url
        .substring(url.lastIndexOf(this.category))
        .replace(`${this.category}/`, "")
        .replace("/", "");
    },
  },
  computed: {
    detailedPage() {
      if (this.category === "people") {
        return "PeopleDetails";
      } else if (this.category === "planets") {
        return "PlanetsDetails";
      } else {
        return "StarshipsDetails";
      }
    },
  },
};
</script>