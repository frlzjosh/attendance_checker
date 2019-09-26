<template>
<table>
    <tr>
        <th>Course</th>
        <th>Section</th>
        <th>Class Times</th>
    </tr>
    <tr v-for="row in courseList">
        <td>{{row.course}}</td>
        <td>{{row.section}}</td>
        <td>{{row.classTimes}}</td>
    </tr>
</table>    
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState
    }
}
</script>

<style scoped>

</style>