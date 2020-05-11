import Vue from 'vue';
import Vuex from 'vuex';
import { saveStorage } from '@/utils/cache.js'
import modules from './modules/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num: undefined,
  },
  getters: {

  },
  mutations: {
    SET_NUM(state, data) {
      state.num = data;
    },
  },
  actions: {
    setNum: ({ commit }, num) => {
      commit('SET_NUM', num);
      saveStorage('num', num)
    },
  },
  modules,
});
