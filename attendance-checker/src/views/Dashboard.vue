<template>
  <div class="dashboard container">
      Welcome: {{ getUser}}
    <class-list></class-list>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
import dashboardBanner from './../components/Dashboard/DashboardBanner'
import dashboardClasses from './../components/Dashboard/DashboardClasses'
import subNavbar from './../components/Dashboard/SubNavbar'
import ClassList from './../components/Dashboard/ClassList'
export default {
  name: 'dashboard',
  components: {
    dashboardBanner,
    dashboardClasses,
    subNavbar,
    ClassList,
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
  computed: {
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
      height: 200px;
      width: 200px;
      border-radius: 50%;
    }
    &__banner{
      background-color: #FEFEFA;
      border-radius: 8px;
      padding: 10px;
    }
    &__topBar{
      color: #D22030;
    }
    &__mainHeading{
      background-color: #D22030;
      font-size: 30px;
      color: white;
      font-style: italic;
      padding-top: 5px;
      width:100vw;
    }
  }

  .mainHeading{
    background-color: #D22030;
    font-size: 30px;
    color: white;
    font-style: italic;
    text-align: center;
    padding-top: 5px;
    }
</style>
