<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-4">
       <h1>Attendance Checker</h1>
      </div>  
    </div>
    <div class="login">
      <div class="col-12 mb-4">
        <h3>Login</h3>
      </div>
      <div class="col-12 pb-1">
        <input type="text" placeholder="Username">
      </div>
      <div class="col-12">
        <input type="password" placeholder="Password">
      </div>
      <div class="col-12 mt-4">
        <router-link to="/dashboard"><button class="btn btn-danger">Submit</button></router-link>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss">
body{
  background-color: #FEFEFA;
}
.login{
  padding: 80px;
  border: 2px solid #D00D20;
  border-radius: 5px;
  background-color: #FFFFFF;
}
  
</style>