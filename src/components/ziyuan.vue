<template>
  <div id="ziyuan">
    <div class="header">
      <headerlastbox slot="header-last-box" v-show="true" class="header-content errorClass" ></headerlastbox>
    </div>
    <img src="../assets/images/ziyuan.png">
  </div>
</template>
<script>
  import headerlastbox from '@/components/header-last-box.vue'
  import $ from 'jquery'
  export default {
    name: 'ziyuan',
    data () {
      return {
        Height: 500,
        isActive: false,
        activeClass: 'activeClass',
        errorClass: 'errorClass'
      }
    },
    components: {headerlastbox},
    mounted () {
      $('#header-box').hide()
    }
  }
</script>
<style>
  @import "../assets/less/header/header.less";
</style>
