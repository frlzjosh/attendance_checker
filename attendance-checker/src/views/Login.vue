<template>
  <div class="container">
    <div class="login">
      <div>
        <img src = "../assets/csunLogo2.png" class = "mainImage">
        <h3 class="titleText mt-4">Login</h3>
      </div>
      <div class="row">
      <div class="col-12 pb-1">
        <input type="text" class = "inputBoxes mt-4" v-model="userName" placeholder="Username">
      </div>
      <div class="col-12">
      <input type="password" class = "inputBoxes mt-4" v-model="passWord" placeholder="Password">
      </div>
      <div class="col-12 mt-4">
        <router-link to="/dashboard"><button @click="fillUserStore()" class="submitBtn">Submit</button></router-link>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      userName: null,
      passWord: null
    }
  },
  methods: {
    ...mapActions(
      [
        'mutateUserState'
      ]
    ),
    fillUserStore () {
      this.mutateUserState(this.userName)
    }
  }
}
</script>

<style lang="scss">
body{
  background-color: #FEFEFA;
}
.login{
  padding: 80px;
  border-radius: 5px;
  background-color: #FFFFFF;
}

.logo {
  position: absolute;
  width: 135px;
  height: 172px;
  left: 118px;
  top: 80px;
}

.titleText{

  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;

  color: #D22030;

  mix-blend-mode: normal;
}

.mainImage{
  width: 135px;
  height: 172px;
  left: 118px;
  top: 80px;
}

.inputBoxes {
  background: #FFFFFF;
  mix-blend-mode: normal;
  border: 3px solid #D22030;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  outline-width: 0;
  text-align: center;
}

.submitBtn{
  background: #D22030;
  mix-blend-mode: normal;
  border: 3px solid #820000;
  box-sizing: border-box;
  box-shadow: -2px 5px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  text-align: center;

  color: #FFFFFF;
}

h5{
  color: #D22030;
  padding-top: 10px;
}

.icons{
  padding-bottom: 10px;
}

</style>
