<template>
  <div id="index">
       <img src="../assets/images/index.png">
  </div>
</template>
<script>
  import $ from 'jquery'
  export default {
    name: 'index',
    props: 'navflag',
    data () {
      return {
        Height: 500,
        isActive: false,
        activeClass: 'activeClass',
        errorClass: 'errorClass'
      }
    },
    mounted () {
      $('#header-box').show()
      $('#header-last-box').hide()
    }
  }
</script>

