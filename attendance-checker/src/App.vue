<template>
  <div id="app">
    <div class="mt-2">
      <div v-if="$route.path !='/'" class="row">
        <div class="col-12 text-right">
          <dashboard-banner></dashboard-banner>
          <sub-navbar></sub-navbar>
        </div>
      </div>

    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SubNavbar from './components/Dashboard/SubNavbar'
import DashboardBanner from './components/Dashboard/DashboardBanner'
export default {
  computed: {
    ...mapGetters(
      [
        'getUser'
      ]
    )
  },
  components: {
    SubNavbar,
    DashboardBanner
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
