import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rates: []
  },
  mutations: {
  },
  actions: {
    getRates() {
      axios
      .get("https://api.hnb.hr/tecajn/v1")
      .then(response => (this.state.rates = response) )
      /* .then((response) => response.json())
      .then((data) => commit("saveRates", data))
      .catch((error) => {
        console.log(error);
      }); */
    },
  },
  modules: {
  }
})
