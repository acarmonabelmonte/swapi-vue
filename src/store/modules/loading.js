// Loading module

const state = {
    loadingStatus: false
};

const mutations = {
    loadingStatus: (state, loadingStatus) => state.loadingStatus = loadingStatus,
};

export default {
    state,
    mutations,
    namespaced: true,
}