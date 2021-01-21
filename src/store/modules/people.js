// People module
import axios from 'axios';

const uri = `${process.env.VUE_APP_API_URL}people/`;


const state = {
    people: [],
    peopleDetails: [],
};

const actions = {
    async fetchPeople({
        commit
    }, page = 1) {
        commit('loading/loadingStatus', true, {
            root: true
        })
        await axios.get(`${uri}?page=${page}`).then(response => {
                commit('setPeople', response.data);
                commit('loading/loadingStatus', false, {
                    root: true
                })
            })
            .catch(response => {
                console.log('something wrong happened', response.data)
            })
    },
    async searchPeople({
        commit
    }, payload) {
        commit('loading/loadingStatus', true, {
            root: true
        })
        await axios.get(`${uri}?search=${payload.search}&page=${payload.page}`).then(response => {
                commit('setPeople', response.data);
                commit('loading/loadingStatus', false, {
                    root: true
                })
            })
            .catch(response => {
                console.log('something wrong happened', response.data)
            })
    },
    async fetchPeopleDetails({
        commit
    }, id) {
        commit('loading/loadingStatus', true, {
            root: true
        })
        await axios.get(`${uri}${id}`).then(response => {
                commit('setPeopleDetails', response.data);
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
    setPeople: (state, people) => state.people = people,
    setPeopleDetails: (state, peopleDetails) => state.peopleDetails = peopleDetails,
};

export default {
    state,
    actions,
    mutations,
    namespaced: true,
}