import io from 'socket.io-client';
import api from '../../api/rest-api';

const state = {
    socket: io('localhost:3000', {
        query: {token: window.localStorage.getItem('webtoken')}
    }),
    users: []
};

const getters = {
    /**
     * Getter for component, sends all users from state.
     * @param state
     * @returns {Array|*|{state, getters, actions, mutations}}
     */
    getUsers: (state) => state.users
};

const actions = {
    /**
     * Gets all users from database
     * @param state
     * @param commit
     */
    fetchUsers({ state, commit }) {
        state.socket.on('initial users', function (users) {
            commit('setUsers', users)
        })
    },
    /**
     * Delete user from database
     * @param commit
     * @param userId
     */
    deleteUser({commit}, userId) {
        state.socket.emit('deleteUser', userId);
    },
    /**
     * Adds user to database
     * @param commit
     * @param user
     */
    addUser({commit}, user) {
        if (user){
            state.socket.emit('addUser', user);
        }
    }
};

const mutations = {
    /**
     * Adds users to the state
     * @param state
     * @param users
     */
    setUsers(state, users) {
        state.users = users;
    },
    /**
     * Need this to update the socket after authenticating because we don't have the webtoken before we log in
     * @param state
     */
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
