<template>
    <div class="mt-3 mb-3 row subnav">
        <div class="col-4">
            <p>COMP 490</p>
        </div>
        <div class="col-4">
            <p>QR Code</p>
        </div>
        <div class="col-4">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
            <font-awesome-icon icon="arrow-alt-circle-left" size="lg"/>
            <p class="subnav__scroll">Map</p>
            <p class="subnav__scroll">QR</p>
            <p class="subnav__scroll">Roster</p>
            <font-awesome-icon icon="arrow-alt-circle-right" size="lg"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SubNavbar',
    data(){
        return{

        }
    }
}
</script>

<style lang="scss">
    .subnav{
        border-radius: 5px;
        padding-top:10px;
        color: white;
        background-color:red;
        &__scroll{
            margin-left: 5px;
            margin-right: 5px;
            display: inline-block;
        }
    }
</style>