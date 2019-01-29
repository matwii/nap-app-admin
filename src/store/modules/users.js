import io from 'socket.io-client';
import api from '../../api/rest-api';

const state = {
    socket: io('localhost:3000', {
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
    },
    deleteUser({commit}, userId) {
        state.socket.emit('deleteUser', userId);
    },
    addUser({commit}, user) {
        if (user){
            state.socket.emit('addUser', user);
        }
    }
};

const mutations = {
    setUsers(state, users) {
        state.users = users;
    },
    updateSocket(state){
        state.socket.disconnect();
        state.socket = io('localhost:3000', {
            query: {token: window.localStorage.getItem('webtoken')}
        })
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
