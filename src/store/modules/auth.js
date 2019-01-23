import api from '../../api/rest-api';
const state = {
    form: {
        email: null,
        password: null,
    },
    token: window.localStorage.getItem('webtoken'), //Looks to see if token is stored in LocalStorage,
    loading: false,
    dismissSecs: 10,
    dismissCountDown: 0,
    loggedInUser: JSON.parse(localStorage.getItem('user'))
};

const getters = {
    isLoggedIn: (state) => !!state.token,
    getEmail: (state) => state.form.email,
    getPassword: (state) => state.form.password,
    isLoading: (state) => !!state.loading,
    getDismissCountdown: (state) => state.dismissCountDown,
    getUser: (state) => state.loggedInUser
};

const actions = {
    async onSubmit({ state, commit }) {
        commit('updateLoading', true);
        let response = await api.login(state.form.email, state.form.password);
        if (response.data) {
            const { token, name, email } = response.data;
            commit('updateToken', token);
            commit('updateUser', {name, email});
            window.localStorage.setItem('webtoken', token); //Stores the token in localstorage
            window.localStorage.setItem('user', JSON.stringify({name, email}));
        } else {
            commit('showAlert');
        }
        commit('updateLoading', false);
    },
    logout({ commit }) { //Commit used to call mutations
        commit('updateToken', null);
        commit('updateUser', null);
        window.localStorage.removeItem('webtoken');
        window.localStorage.removeItem('user');
    },
};

const mutations = {
    updateEmail (state, email) {
        state.form.email = email
    },
    updatePassword (state, password) {
        state.form.password = password
    },
    updateLoading (state, status) {
        state.loading = status
    },
    updateToken (state, token) {
        state.token = token
    },
    showAlert (state) {
        state.dismissCountDown = state.dismissSecs
    },
    dismissAlert (state) {
        state.dismissCountDown = 0
    },
    updateUser (state, user) {
        state.loggedInUser = user;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
