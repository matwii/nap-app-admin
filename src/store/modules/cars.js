import axios from 'axios'

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
    },

    /**
     * Adds car to database
     * @param commit
     * @param car object
     */
    async addCar({commit}, car) {
        if (car){
            try {
                const response = await axios.post('http://localhost:3000/car', {car});
                console.log(response);
            } catch (e) {
                console.error(e)
            }
        }
    },

    /**
     * Delete car from database
     * @param commit
     * @param carId
     */
    async deleteCar({commit}, carId) {
        try{
            const response = await axios.delete(`http://localhost:3000/car/${carId}`);
            console.log(response);
        } catch (e) {
            console.error(e);
        }
    },
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
