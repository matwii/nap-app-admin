import io from 'socket.io-client';

const state = {
    socket: io.connect('localhost:3000', {
        query: {token: window.localStorage.getItem('webtoken')}
    }),
    users: []
};

const getters = {
    getUsers: (state) => state.users
};

const actions = {
    fetchUsers({ state, commit }) {
        state.socket.on('initial users', function (users) {
            commit('setUsers', users)
        })
    }
};

const mutations = {
    setUsers(state, users) {
        state.users = users;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
