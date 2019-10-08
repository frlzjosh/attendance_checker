<template>
<div>
  <table class="container">
      <tr class="col-12">
          <th>Course</th>
          <th>Class Times</th>
          <th>Section</th>
      </tr>
      <tr @click="goToApp()" v-for="(row, index) in classState" :key=index>
          <td>{{row.course}}</td>
          <td>{{row.classTime}}</td>
          <td>{{row.section}}</td>
      </tr>
  </table>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(
      {
        classState: state => state.Classes.courseList
      }
    )
  },
  methods: {
    goToApp () {
      this.$router.push('/roster')
    }
  }
}
</script>

<style scoped>
table{
    border: black solid 3px;
    margin-top: 5%;
    margin-bottom: 5%;
    width: 50vw;

}

th {
    border: solid black 2px;
}

tr {
    border: solid black 2px;
}

td{
    border: solid black 1px;
    text-align:center;
    padding-left: 5vw;
    padding-right: 5vw;
}

</style>
