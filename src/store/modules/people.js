// People module
import axios from 'axios';

const uri = `${process.env.VUE_APP_API_URL}people/`;


const state = {
    people: [],
    peopleDetails: []
};

const getters = {
    allPeople: state => state.people,
    peopleDetailed: state => state.peopleDetails
};

const actions = {
    async fetchPeople({ commit }, page = 1) {
        const response = await axios.get(`${uri}?page=${page}`);    
        commit('setPeople', response.data);
        console.log(response.data)
    },
    async searchPeople({ commit }, search) {
        const response = await axios.get(`${uri}?search=${search}`);    
        commit('setPeople', response.data);
        console.log(response.data)
    },
    async fetchPeopleDetails({ commit }, id) {
        const response = await axios.get(`${uri}${id}`);    
        commit('setPeopleDetails', response.data);
        console.log(response.data)
    },
};

const mutations = {
    setPeople: (state, people) => state.people = people,
    setPeopleDetails: (state, peopleDetails) => state.peopleDetails = peopleDetails
};

export default {
    state, getters, actions, mutations
}
