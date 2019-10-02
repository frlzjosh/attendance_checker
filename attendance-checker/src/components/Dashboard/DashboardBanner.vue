<template>

  <div>
    <div class="dashboard__banner mt-1 row">
      <img class="dashboard__img" src="https://cdn.metalab.csun.edu/media/faculty/steven.fitzgerald/avatar.jpg" alt="">
      <div class="dashboard__topBar mt-5">
        <a class="dashboard__items"><!--<img class="dashboard__img col-4" src="https://cdn.metalab.csun.edu/media/faculty/steven.fitzgerald/avatar.jpg" alt="">-->
        <strong>Steve Fitzgerald</strong></a>
        <a class="dashboard__items">Computer Science</a>
        <a class="dashboard__items">Professor</a>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DashboardBanner'
}
</script>


<style lang="scss">
  .dashboard__items{
    margin: 7.5px;
  }
</style>
