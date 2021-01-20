// Planets module
import axios from 'axios';

const uri = `${process.env.VUE_APP_API_URL}planets/`;

const state = {
    planets: [],
    planetDetails: []
};

const getters = {
    allPlanets: state => state.planets,
    planetDetailed: state => state.planetDetails
};

const actions = {
    async fetchPlanets({ commit }, page = 1) {
        const response = await axios.get(`${uri}?page=${page}`);    
        commit('setPlanets', response.data);
    },
     async searchPlanet({ commit }, payload) {
        const response = await axios.get(`${uri}?search=${payload.search}&page=${payload.page}`);    
        commit('setPlanets', response.data);
    },
    async fetchPlanetDetails({ commit }, id) {
        const response = await axios.get(`${uri}${id}`);    
        commit('setPlanetDetails', response.data);
    },
};

const mutations = {
    setPlanets: (state, planets) => state.planets = planets,
    setPeopleDetails: (state, peopleDetails) => state.peopleDetails = peopleDetails
};

export default {
    state, getters, actions, mutations
}
