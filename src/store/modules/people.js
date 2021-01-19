// People module
import axios from 'axios';

const uri = `${process.env.VUE_APP_API_URL}people/`;


const state = {
    people: []
};

const getters = {
    allPeople: state => state.people
};

const actions = {
    async fetchPeople({ commit }) {
        const response = await axios.get(uri);    
        commit('setPeople', response.data);
        console.log(response.data.results)
    },
};

const mutations = {
    setPeople: (state, people) => state.people = people,
};

export default {
    state, getters, actions, mutations
}
