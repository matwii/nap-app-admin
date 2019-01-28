import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';
import users from './modules/users';
import cars from './modules/cars';
import rides from './modules/rides';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        users,
        cars,
        rides
    }
});
