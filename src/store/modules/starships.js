// Starships module
import axios from 'axios';

const uri = `${process.env.VUE_APP_API_URL}starships/`;

const state = {
    starships: []
};

const getters = {
    allStarships: state => state.starships
};

const actions = {
    async fetchStarships({ commit }) {
        const response = await axios.get(uri);    
        commit('setStarships', response.data);
        console.log(response.data.results)
    },
};

const mutations = {
    setStarships: (state, starships) => state.starships = starships,
};

export default {
    state, getters, actions, mutations
}
