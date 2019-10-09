<template>
    <div class='container'>
        <div class='EnrollSubmit'>
            <b-form-select v-model="selected" :options="options" class="mt-3"></b-form-select>
                <div class="mt-3">Student Status: <br /><strong>{{ selected }}</strong></div>
                <br /> <br />
                <router-link to="/dashboard"><b-button variant="success">Submit</b-button></router-link>
            </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:'StudentEnroll',
    data(){
        return{
            selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'Enrolled', text: 'Enrolled' },
          { value: 'Waitlisted', text: 'Waitlisted' },
          { value: 'LookingtoAdd', text: 'Looking to Add' },
          { value: 'LOGIN', text: 'Professor', disabled: true }
        ],
        }
    }
}
</script>

<style lang="scss">

.EnrollSubmit{
    background-color: rgba(214, 19, 19, 0.788);
    border-color: black;
    font-size: 16pt;
    font-weight: 500;
    align-items: center;
    justify-content: center;
    height: 40vh;

}

</style>