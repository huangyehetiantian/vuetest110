<template>
  <div id="index">
    <img src="../assets/images/index.png">
  </div>
</template>
<script>
  import $ from 'jquery'
  export default {
    name: 'index',
    mounted () {
      $('#header-box').show()
    }
  }
</script>
<style>
  @import "../assets/less/header/header.less";
</style>
