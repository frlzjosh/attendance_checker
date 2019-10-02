<template>
    <div class="mt-4">
        <h3>List of Classes</h3>
        <div class="dashboard__classes row mt-2">
            <div v-for="(element, index) in classes" class="col-4 dashboard__class" :key="index">
                <p>{{element}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'dashboardClasses',
  props: [
    'classes'
  ]
}
</script>
<style lang="scss">
    .dashboard{
        &__classes{
            border: 2px solid black;
            border-radius: 5px;
        }
        &__class{
            cursor: pointer;
            border: 2px solid black;
            padding: 10px;
        }
        &__class:hover{
            background-color: black;
            color: white;
        }
    }
</style>
