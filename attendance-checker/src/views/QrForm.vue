<template>
    <div class="container">
        <dashboard-banner></dashboard-banner>
        <div class = "container">
            <div class="formText">
                <p class="textLabels">Class Start Time: </p>
                <p class="textLabels">Class End Time: </p>
                <p class="textLabels">Tardy Grace Period: </p>
                <p class="textLabels">Linking Radius: </p>
            </div>

        </div>
    </div>
    
</template>

<script>
import DashboardBanner from './../components/Dashboard/DashboardBanner'
export default {
    name: 'QrForm',
    components: {
        DashboardBanner
    }
    
}
</script>

<style lang="scss">
    .textLabels{
        font-size: 36px;
        text-align: left;
    }

    .formText{
        padding-top: 10vh;
        margin-left: 15vw;
        margin-right: 15vw
    }

</style>