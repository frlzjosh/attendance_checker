<template>
    <div class="container">
        <div class="row mt-2">
            <div class="col-12">
                <router-link to="/dashboard" class="btn btn-primary">Dashboard</router-link>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-12">
                <img class="qr__img" src="./../assets/frame.png" alt="">
            </div>
        </div>
        <div class="row mt-3 mb-4">
            <div class="col-12">
                <p>{{qr_timestamp}}</p>
                <h3>{{welcome_msg}}</h3>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'qrPage',
  data () {
    return {
      qr_timestamp: 'Generated at 10:03 on 9/23/2019',
      welcome_msg: 'Welcome, John Doe You have 25 Attendances in Comp 490 #1165'
    }
  }
}
</script>
<style lang="scss">
    .qr{
        &__img{
            height: 400px;
            width: 400px;
        }
    }
</style>
