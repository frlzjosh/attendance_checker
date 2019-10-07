<template>
    <div>
        <table class="container">
            <tr class="col-12">
                <th>Name</th>
                <th>Times</th>
                <th>Attendances</th>
                <th>Status</th>
                <th>Tardy Today</th>
            </tr>
            <tr v-for="(element, index) in getRoster" :key="index">
                <td>{{element.name}}</td>
                <td>{{element.time}}</td>
                <td>{{element.attendances}}</td>
                <td>{{element.status}}</td>
                <td>{{element.isTardy}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'RosterList',
    computed: {
        ...mapGetters(
            [
                'getRoster'
            ]
        ),
    },
    data(){
        return{
            
        }
    }

}
</script>

<style lang="scss">
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