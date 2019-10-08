<template>
    <div class="container">
        <div class = "container">
            <div class="row">
                <div class = "col-8">
                    <div class="formText">
                        <p class="textLabels">Class Start Time: </p>
                    </div>
                </div>
                <div class="col-4 text-center">
                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle buttons" type="button" data-toggle="dropdown">Select Time
                        <span class="caret"></span></button>
                        <ul class="dropdown-menu">
                            <li><a href="#">8:00AM</a></li>
                            <li><a href="#">9:00AM</a></li>
                            <li><a href="#">10:00AM</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class = "col-8 text-center">
                    <div class="formText">
                        <p class="textLabels">Class End Time: </p>
                    </div>
                </div>
                <div class="col-4">
                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle buttons" type="button" data-toggle="dropdown">Select Time
                        <span class="caret"></span></button>
                        <ul class="dropdown-menu">
                            <li><a href="#">8:00AM</a></li>
                            <li><a href="#">9:00AM</a></li>
                            <li><a href="#">10:00AM</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class = "col-8">
                    <div class="formText">
                        <p class="textLabels">Grace Period: </p>
                    </div>
                </div>
                <div class="col-4">
                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle buttons" type="button" data-toggle="dropdown">Select Period
                        <span class="caret"></span></button>
                        <ul class="dropdown-menu">
                            <li><a href="#">8:00AM</a></li>
                            <li><a href="#">9:00AM</a></li>
                            <li><a href="#">10:00AM</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class = "col-8">
                    <div class="formText">
                        <p class="textLabels">Linking Radius: </p>
                    </div>
                </div>
                <div class="col-4">
                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle buttons" type="button" data-toggle="dropdown">Select Radius
                        <span class="caret"></span></button>
                        <ul class="dropdown-menu">
                            <li><a href="#">8:00AM</a></li>
                            <li><a href="#">9:00AM</a></li>
                            <li><a href="#">10:00AM</a></li>
                        </ul>
                    </div>
                </div>
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
        margin-left: 15vw;
        margin-right: 15vw
    }
    .buttons{
        align-items: left;
    }

</style>
