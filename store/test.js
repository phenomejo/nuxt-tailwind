export default {
  state: () => ({
    test: 'default'
  }),

  mutations: {
    SET_TEST(state, payload) {
      state.test = payload;
    }
  },

  actions: {
    setTest({ commit }, payload) {
      commit('SET_TEST', payload);
    }
  }
}