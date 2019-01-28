const state = {
    cars: []
};

const getters = {
    getCars: (state) => state.cars
};

const actions = {
    fetchCars({ commit, rootState }) {
        rootState.users.socket.on('initial cars', function (cars) { //Using the websocket connection from users module
            commit('setCars', cars)
        })
    }
};

const mutations = {
    setCars(state, cars) {
        state.cars = cars;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
