const state = {
    form: {
        email: null,
        password: null,
    },
    token: null
};

const getters = {
    isLoggedIn: (state) => !!state.token,
    getEmail: (state) => state.form.email,
    getPassword: (state) => state.form.password
};

const actions = {
    onSubmit({ commit }) {
        commit('showForm')
    }
};

const mutations = {
    updateEmail (state, email) {
        state.form.email = email
    },
    updatePassword (state, password) {
        state.form.password = password
    },
    showForm (state){
        alert(JSON.stringify(state.form));
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
