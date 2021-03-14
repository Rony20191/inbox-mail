import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    show: false,
    logado: localStorage.getItem("logado")
      ? localStorage.getItem("logado")
      : false,
    darkMode: localStorage.getItem("darkMode")
      ? localStorage.getItem("darkMode")
      : false,
  },
  getters: {
    getLoading({ show }) {
      return show;
    },
    getLogado({ logado }) {
      return logado;
    },
    getDarkMode({ darkMode }) {
      return darkMode;
    },
  },
  actions: {
    setLoading({ commit }, payload) {
      commit("setLoading", payload);
    },
    setLogado({ commit }, payload) {
      commit("setLogado", payload);
    },
    setDarkMode({ commit }, payload) {
      commit("setDarkMode", payload);
    },
  },
  mutations: {
    setDarkMode(state, payload) {
      state.darkMode = payload;
      localStorage.setItem("darkMode", payload);
    },
    setLoading(state, payload) {
      state.show = payload;
    },
    setLogado(state, payload) {
      state.logado = payload;
      if (payload) {
        localStorage.setItem("logado", payload);
      } else {
        localStorage.removeItem("logado");
      }
    },
  },
  modules: {},
});

export default store;
