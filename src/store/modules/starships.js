// Starships module
import axios from 'axios';

const uri = `${process.env.VUE_APP_API_URL}starships/`;

const state = {
    starships: [],
    starshipDetails: [],
};

const actions = {
    async fetchStarships({
        commit
    }, page = 1) {
        commit('loading/loadingStatus', true, {
            root: true
        })
        await axios.get(`${uri}?page=${page}`).then(response => {
                commit('setStarships', response.data);
                commit('loading/loadingStatus', false, {
                    root: true
                })
            })
            .catch(response => {
                console.log('something wrong happened', response.data)
            })
    },
    async searchStarship({
        commit
    }, payload) {
        commit('loading/loadingStatus', true, {
            root: true
        })
        await axios.get(`${uri}?search=${payload.search}&page=${payload.page}`).then(response => {
                commit('setStarships', response.data);
                commit('loading/loadingStatus', false, {
                    root: true
                })
            })
            .catch(response => {
                console.log('something wrong happened', response.data)
            })
    },
    async fetchStarshipDetails({
        commit
    }, id) {
        commit('loading/loadingStatus', true, {
            root: true
        })
        await axios.get(`${uri}${id}`).then(response => {
                commit('setStarshipDetails', response.data);
                commit('loading/loadingStatus', false, {
                    root: true
                })
            })
            .catch(response => {
                console.log('something wrong happened', response.data)
            })
    },
};

const mutations = {
    setStarships: (state, starships) => state.starships = starships,
    setStarshipDetails: (state, starshipDetails) => state.starshipDetails = starshipDetails,
};

export default {
    state,
    actions,
    mutations,
    namespaced: true,
}