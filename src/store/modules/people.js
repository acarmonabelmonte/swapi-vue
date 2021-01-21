// People module
import axios from 'axios';

const uri = `${process.env.VUE_APP_API_URL}people/`;


const state = {
    people: [],
    peopleDetails: [],
    loadingStatus: false
};

const getters = {
    allPeople: state => state.people,
    peopleDetailed: state => state.peopleDetails,
    loadingStatus: state => state.loadingStatus
};

const actions = {
    async fetchPeople({
        commit
    }, page = 1) {
        commit('loadingStatus', true);
        await axios.get(`${uri}?page=${page}`).then(response => {
            commit('setPeople', response.data);
            commit('loadingStatus', false);
            })
            .catch(response => {
                console.log('something wrong happened', response.data)
            })
    },
    async searchPeople({
        commit
    }, payload) {
        commit('loadingStatus', true);
        await axios.get(`${uri}?search=${payload.search}&page=${payload.page}`).then(response => {
            commit('setPeople', response.data);
            commit('loadingStatus', false);
            })
            .catch(response => {
                console.log('something wrong happened', response.data)
            })
    },
    async fetchPeopleDetails({
        commit
    }, id) {
        commit('loadingStatus', true);
        await axios.get(`${uri}${id}`).then(response => {
            commit('setPeopleDetails', response.data);
            commit('loadingStatus', false);
            })
            .catch(response => {
                console.log('something wrong happened', response.data)
            })
    },
};

const mutations = {
    setPeople: (state, people) => state.people = people,
    setPeopleDetails: (state, peopleDetails) => state.peopleDetails = peopleDetails,
    loadingStatus:(state, loadingStatus) => state.loadingStatus = loadingStatus,
};

export default {
    state,
    getters,
    actions,
    mutations
}