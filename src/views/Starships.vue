<template>
  <div class="starships">
    <PageBanner
      :title="'STARSHIPS'"
      image="https://images.unsplash.com/photo-1587279484796-61a264afc18b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    />

    <section class="text-gray-600 body-font">
      <div class="container px-5 py-20 mx-auto">
        <div
          class="mb-6 w-full lg:w-3/12 h-10 pl-3 pr-2 bg-white border rounded-full flex justify-between items-center relative"
        >
          <input
            @keyup.enter="searchByName(search)"
            type="search"
            name="search"
            id="search"
            v-model="search"
            placeholder="Search by name..."
            class="appearance-none w-full outline-none focus:outline-none active:outline-none"
          />
          <button
            @click="searchByName(search)"
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
        <ItemsList
          :items-list="data.starships.results"
          :category="'starships'"
        />
        <NoFoundData v-if="data.starships.count === 0" />
        <div class="max-w-lg mx-auto my-12">
          <Pagination
            v-if="data.starships.count > 0"
            :total-pages="totalPages"
            :per-page="10"
            :current-page="currentPage"
            @pagechanged="onPageChange"
            :has-more-pages="hasNextPage"
          />
        </div>
        <GoBackLink />
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ItemsList from "@/components/Common/ItemsList.vue";
import GoBackLink from "@/components/UI/GoBackLink.vue";
import PageBanner from "@/components/UI/PageBanner.vue";
import Pagination from "@/components/UI/Pagination.vue";
import NoFoundData from "@/components/Common/NoFoundData.vue";
export default {
  name: "Starships",
  data() {
    return {
      search: "",
      currentPage: 1,
    };
  },
  components: {
    ItemsList,
    GoBackLink,
    PageBanner,
    Pagination,
    NoFoundData,
  },
  mounted() {
    this.$store.dispatch("starships/fetchStarships");
  },
  computed: {
    ...mapState({
      starships: (state) => state.starships,
      data: "starships",
    }),
    totalPages() {
      return Math.ceil(this.data.starships.count / 10);
    },
    hasNextPage() {
      return this.data.starships.next != null ? true : false;
    },
  },
  methods: {
    searchByName(name, page = 1) {
      let payload = {
        search: name,
        page,
      };
      this.$store.dispatch("starships/searchStarship", payload);
      this.currentPage = page;
    },
    onPageChange(page) {
      this.currentPage = page;
      this.search === ""
        ? this.$store.dispatch("starships/fetchStarships", this.currentPage)
        : this.searchByName(this.search, this.currentPage);
    },
  },
};
</script>