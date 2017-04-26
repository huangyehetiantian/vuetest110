<template>
  <div class="product-box" style="padding:20px;">
    <div  class="mr5">
      <router-link :to="{ name: 'niantu'}">导航1</router-link>
      <router-link :to="{ name: 'bookstore'}">导航2</router-link>
    </div>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  export default {
  }
</script>
<style>
  .product-box{
    width:100%;
    min-height:600px;
    background:#1F2C46 url("../assets/images/product.png")  center center no-repeat;
    background-size:contain;
  }
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
