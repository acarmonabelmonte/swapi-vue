// Starships module
import axios from 'axios';

const uri = `${process.env.VUE_APP_API_URL}starships/`;

const state = {
    starships: [],
    starshipDetails: []
};

const getters = {
    allStarships: state => state.starships,
    starshipDetailed: state => state.starshipDetails
};

const actions = {
    async fetchStarships({
        commit
    }, page = 1) {
        const response = await axios.get(`${uri}?page=${page}`);
        commit('setStarships', response.data);
    },
    async searchStarship({
        commit
    }, payload) {
        const response = await axios.get(`${uri}?search=${payload.search}&page=${payload.page}`);
        commit('setStarships', response.data);
    },
    async fetchPeopleDetails({
        commit
    }, id) {
        const response = await axios.get(`${uri}${id}`);
        commit('setStarshipDetails', response.data);
    },
};

const mutations = {
    setStarships: (state, starships) => state.starships = starships,
    setStarshipDetails: (state, starshipDetails) => state.starshipDetails = starshipDetails
};

export default {
    state,
    getters,
    actions,
    mutations
}