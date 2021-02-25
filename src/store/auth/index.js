import {
  actions
} from './actions.js';
import {
  getters
} from './getters.js';
import {
  mutations
} from './mutations.js';

const token = JSON.parse(localStorage.getItem('token'));

const store = {
  namespaced: true,
  state: {
    token: token,
    activeUser: null,
  },
  actions,
  mutations,
  getters,
};

export default store;