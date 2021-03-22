<template>
  <div class="container">
    <q-select 
    outlined 
    :options="currencies" 
    v-model="selectedCurrency"
    label="Select Currency"
    class="my-15">
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
