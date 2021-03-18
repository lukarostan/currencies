<template>
  <div class="container">
    <h4>Select Currency</h4>
    <q-select 
    outlined 
    :options="currencies" 
    v-model="selectedCurrency">
    </q-select>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ByCurrency',
  components: {
    
  },
  data(){
    return{
      currencies: ["EUR", "USD", "GBP", "AUD"],
      selectedCurrency: ''
    }
  }
}
</script>
