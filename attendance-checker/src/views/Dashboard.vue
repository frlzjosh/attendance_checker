<template>
  <div class="dashboard container">
    <dashboard-banner></dashboard-banner>
    Welcome: {{ getUser}}
    <router-link to="/qr" class="btn btn-primary">QR</router-link>
    <dashboard-classes :classes="classes"></dashboard-classes>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
import dashboardBanner from './../components/Dashboard/DashboardBanner'
import dashboardClasses from './../components/Dashboard/DashboardClasses'
export default {
  name: 'dashboard',
  components: {
    dashboardBanner,
    dashboardClasses
  },
  data () {
    return {
      classes: [
        'COMP 490',
        'COMP 430',
        'COMP 400',
        'COMP 410',
        'COMP 393'
      ]
    }
  },
  computed:{
    ...mapGetters(
      [
        'getUser'
      ]
    )
  },
  methods: {
  }
}
</script>

<style lang="scss">
  .dashboard{
    &__img{
      height: 300px;
      width: auto;
      border-radius: 50%;
    }
    &__banner{
      background-color: #FEFEFA;
      border: 3px solid #D00D20;
      border-radius: 8px;
      padding: 10px;
    }
  }
</style>
