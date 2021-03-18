<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Currencies
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Navigation</q-item-label>
        <q-item clickable tag="a" to="/currency">
          <q-item-section avatar>
            <q-icon name="paid" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Currency</q-item-label>
            <q-item-label caption>Show graph by currency</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/country">
          <q-item-section avatar>
            <q-icon name="location_on" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Country</q-item-label>
            <q-item-label caption>Show graph by country</q-item-label>
          </q-item-section>
        </q-item>
        
        <q-item clickable tag="a" target="_blank" href="https://github.com/lukarostan">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Made by Luka Roštan</q-item-label>
            <q-item-label caption>@lukarostan</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view>

      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'LayoutDefault',

  components: {
    
  },
  created(){
    this.$store.dispatch('getRates')
  },

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style>
</style>
