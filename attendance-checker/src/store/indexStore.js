import Vue from 'vue'
import Vuex from 'vuex'
import Classes from './modules/classes'
import Instructor from './modules/instructor'
import User from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    Classes,
    Instructor,
    User
  }
})

export default store
