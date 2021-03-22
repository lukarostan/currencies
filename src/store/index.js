import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rates: [],
    selectedCountry: '',
    selectedCurrency: '',
    ratesDate: '2015-02-02'

  },
  getters: {

  },
  mutations: {
    updateCountry (state, country){
      state.selectedCountry = country;
    }
  },
  actions: {
    getRates(ratesDate) {
      axios
      .get(`https://api.hnb.hr/tecajn/v1?datum=${ratesDate}`)
      .then(response => (this.state.rates = response) )
    },
  },
  modules: {
  }
})
