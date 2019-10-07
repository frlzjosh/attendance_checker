<template>
  <div class="container">
    <div class="dashboard__banner mt-1 row">
      <img class="dashboard__img" src="https://cdn.metalab.csun.edu/media/faculty/steven.fitzgerald/avatar.jpg" alt="">
      <div class="dashboard__topBar mt-5">
        <a class="dashboard__items">
        <strong>{{ professorName}}</strong></a>
        <a class="dashboard__items">{{currentCourse}}</a>
        <a class="dashboard__items">{{role}}</a>
        <a class="dashboard__items dashboard__items--cursor" @click="logout()">Logout</a>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'DashboardBanner',
  data(){
    return{
      professorName: 'Steve Fitzgerald',
      currentCourse: 'Computer Science',
      role: 'Professor'
    }
  },
  methods: {
    ...mapActions(
      [
        'clearUserState'
      ]
    ),
    logout () {
      this.clearUserState()
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
  .dashboard__items{
    margin: 7.5px;
    &--cursor{
      cursor: pointer;
    }
  }
</style>
