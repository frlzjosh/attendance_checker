<template>
  <div id="app">
    <div class="container mt-2">
      <div v-if="getUser" class="row">
        <div class="col-12 text-right">
          <router-link to="/"><button @click="logout()" class="btn btn-danger"> Logout</button></router-link>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapGetters(
      [
        'getUser'
      ]
    )
  },
  methods: {
    ...mapActions(
      [
        'clearUserState'
      ]
    ),
    logout(){
      this.clearUserState()
    }
  }
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
