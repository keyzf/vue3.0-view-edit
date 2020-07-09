import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
  active_tab: 'home'
};
const mutations = {
  changeTab: function (state, active_tab) {
    state.active_tab = active_tab;
  }
};
const actions = {};
const modules = {};

function createStore() {
  const store = new Vuex.Store({
    modules,
    state,
    mutations,
    actions,
  })

  return store;
}

export default createStore;