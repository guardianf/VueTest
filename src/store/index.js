import Vue from 'vue';
import Vuex from 'vuex';
import MyStorage from '@/storage/index';

Vue.use(Vuex);
const storage = new MyStorage('smartaudit');

export default new Vuex.Store({
  state: {
    user: {
      name: storage.get('userName'),
    },
  },
  getters: {
    userName(state) {
      return state.user.name;
    },
  },
  mutations: {
    updateUser(state, user) {
      state.user = user;
    },
    storeUser(state, user) {
      storage.set('userName', user.name);
      this.commit('updateUser', user);
    },
  },
  actions: {
  },
  modules: {
  },
});
