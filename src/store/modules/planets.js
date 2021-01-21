// Planets module
import axios from 'axios';

const uri = `${process.env.VUE_APP_API_URL}planets/`;

const state = {
    planets: [],
    planetDetails: []
};

const actions = {
    async fetchPlanets({
        commit
    }, page = 1) {
        commit('loading/loadingStatus', true, {
            root: true
        })
        await axios.get(`${uri}?page=${page}`).then(response => {
                commit('setPlanets', response.data);
                commit('loading/loadingStatus', false, {
                    root: true
                })
            })
            .catch(response => {
                console.log('something wrong happened', response.data)
            });
    },
    async searchPlanet({
        commit
    }, payload) {
        commit('loading/loadingStatus', true, {
            root: true
        })
        await axios.get(`${uri}?search=${payload.search}&page=${payload.page}`).then(response => {
                commit('setPlanets', response.data);
                commit('loading/loadingStatus', false, {
                    root: true
                })
            })
            .catch(response => {
                console.log('something wrong happened', response.data)
            })
    },
    async fetchPlanetDetails({
        commit
    }, id) {
        commit('loading/loadingStatus', true, {
            root: true
        })
        await axios.get(`${uri}${id}`).then(response => {
                commit('setPlanetDetails', response.data);
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
    setPlanets: (state, planets) => state.planets = planets,
    setPlanetDetails: (state, planetDetails) => state.planetDetails = planetDetails
};

export default {
    state,
    actions,
    mutations,
    namespaced: true,
}