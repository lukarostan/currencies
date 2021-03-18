<template>
  <div class="container">
    <h4>Select Country</h4>
    <q-select 
    outlined 
    :options="countries" 
    v-model="selectedCountry">
    </q-select>
    <div
    v-for="rate in rates.data"
    :key="rate"
    >{{rate}}</div>
  </div>
</template>
<script>
export default {
  computed:{
    rates(){
      return this.$store.state.rates
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
