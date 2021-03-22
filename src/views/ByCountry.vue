<template>
  <div class="container">
    <q-select 
    outlined 
    :options="countries" 
    v-model="selectedCountry"
    label="Select Country"
    class="my-15"
    @input-value="updateCountry()"
    >
    </q-select>
    <div v-for="rate in rates.data" :key="rate">{{rate}}</div>
    <Chart ></Chart>
  </div>
</template>
<script>
import Chart from '../components/Chart.js'
export default {
  components:{
    Chart
  },
  computed:{
    rates(){
      return this.$store.state.rates
    }
  },
  methods: {
    updateCountry(e){
      console.log("s")
      this.$store.commit('updateCountry',e.target.value)
    }
  },
  data(){
    return{
      countries: ["Australija","Kanada","Češka","SAD","Poljska"],
      selectedCountry: ''
    }
  }
}
</script>
<style src="../styles/view.sass" lang="sass">
</style>
