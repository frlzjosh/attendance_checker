<template>
    <div class="mt-3 mb-3 row subnav">
        <div class="col-4 text-center">
            <p><strong>{{currentClass}}</strong></p>
        </div>
        <div v-if="$route.path !== '/dashboard'" class="col-4 text-center">
            <font-awesome-icon @click="goToDashboard()" icon="arrow-alt-circle-left" size="lg"/>
            <p class="subnav__scroll--bold subnav__scroll">{{itemsArray[currentItemIndex]}}</p>
        </div>
        <div class="col-4 text-center">
            <font-awesome-icon @click="goBack()" icon="arrow-alt-circle-left" size="lg"/>
            <span  v-for="(element, index) in itemsArray" :key="index" >
                <p v-if="index !== currentItemIndex" class="subnav__scroll">{{element}}</p>
                <p class="subnav__scroll subnav__scroll--bold" v-show="index === currentItemIndex"> {{element}}</p>
            </span>
            <font-awesome-icon @click="goForward()" icon="arrow-alt-circle-right" size="lg"/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SubNavbar',
  data () {
    return {
      currentClass: 'COMP 490 #1930',
      itemsArray: [
        'MAP',
        'QR',
        'ROSTER'
      ],
      itemsRoutes: [
        'map',
        'qr',
        'roster'
      ],
      currentItemIndex: 0
    }
  },
  methods: {
    goToDashboard(){
      this.$router.push('/dashboard')
    },
    goBack () {
      if (this.currentItemIndex > 0) {
        this.currentItemIndex -= 1
        this.$router.push('/'+this.itemsRoutes[this.currentItemIndex])
      }
    },
    goForward () {
      if (this.currentItemIndex < this.itemsArray.length - 1) {
        this.currentItemIndex += 1
        this.$router.push('/'+this.itemsRoutes[this.currentItemIndex])
      }
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
            cursor: pointer;
            &--bold{
                font-weight: 800;
                font-size: 1.25rem;
            }
        }
    }
</style>
