import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    afiliados: [],
  },
  mutations: {
    setAfiliados(state, payload) {
      state.afiliados = payload;
    },
  },
  actions: {
    //Obtener Afiliados
    async getAfiliados({ commit }) {
      //const peticion = await fetch('https://futuramaapi.herokuapp.com/api/v2/characters');
      const peticion = await fetch("http://localhost:3000/users");
      const data = await peticion.json();
      console.log(data);
      commit("setAfiliados", data);
    },
    //Agregar Afiliados
    async setAfiliados({ commit }, afiliados) {
      const peticion = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(afiliados),
      });
    },
    //Eliminar Afiliados
    async deleteAfiliados({ commit }, afiliados) {
      const peticion = await fetch("http://localhost:3000/users", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(afiliados),
      });
    },
    //Actualizar Afiliados
    async updateAfiliados({ commit }, afiliados) {
      const peticion = await fetch("http://localhost:3000/users", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(afiliados),
      });
    },
  },
  modules: {},
});
