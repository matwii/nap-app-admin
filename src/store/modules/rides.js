const state = {
    rides: []
};

const getters = {
    getRides: (state) => state.rides
};

const actions = {
    fetchRides({ commit, rootState }) {
        rootState.users.socket.on('initial rides', function (rides) { //Using the websocket connection from users module
            commit('setRides', rides)
        })
    }
};

const mutations = {
    setRides(state, rides) {
        state.rides = rides;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
