import { saveStorage } from '@/utils/cache.js'
const state = {
  sample: '',
};

const getters = {
};

const mutations = {
  // 例子
  setSample(state, data) {
    state.sample = data;
  },
};

const actions = {
  setSample: ({ commit }, sample) => {
    commit('setSample', sample);
    saveStorage('sample', sample)
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
