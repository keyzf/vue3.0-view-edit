import { createStore } from 'vuex'

const state = () => {
  return {
    active_tab: 'home'
  };
}
const mutations = {
  changeTab: (state, active_tab) => {
    state.active_tab = active_tab;
  }
};
const actions = {};
const modules = {};

const store = createStore({
  modules,
  state,
  mutations,
  actions,
})

export default store;