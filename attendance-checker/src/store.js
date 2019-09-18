import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    generateQRCode(){
      let payload = { 
          "frame_name": "no-frame",
          "qr_code_text": "https://www.qr-code-generator.com/",
          "image_format": "SVG",
          "qr_code_logo": "scan-me-square"
      }
      axios.post('https://api.qr-code-generator.com/v1/create/' + payload)
      .then(resp =>{
          console.log(resp)
      })
  }
  }
})
