import Vuex from 'vuex';
import Vue from 'vue';
import people from './modules/people';
import starships from './modules/starships';
import planets from './modules/planets';
import loading from './modules/loading';
import getters from './getters'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    people,
    starships,
    planets,
    loading
  },
  getters,
});