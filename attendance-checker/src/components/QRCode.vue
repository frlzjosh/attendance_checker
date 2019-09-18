<template>
    <div>
        <h3>QR CODE</h3>
        <button @click="qrCode()">Test QR</button>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import { mapActions } from 'vuex'
Vue.use(axios)
export default {
    name: 'qrCode',
    methods: {
        ...mapActions(
            [
                'generateQRCode'
            ]
        ),
        qrCode(){
            this.generateQRCode()
        }
    }
    
}
</script>