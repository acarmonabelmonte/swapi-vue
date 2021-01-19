// Planets module
import axios from 'axios';

const uri = `${process.env.VUE_APP_API_URL}planets/`;

const state = {
    planets: []
};

const getters = {
    allPlanets: state => state.planets
};

const actions = {
    async fetchPlanets({ commit }) {
        const response = await axios.get(uri);    
        commit('setPlanets', response.data);
        console.log(response.data.results)
    },
};

const mutations = {
    setPlanets: (state, planets) => state.planets = planets,
};

export default {
    state, getters, actions, mutations
}
