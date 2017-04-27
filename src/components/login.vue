<template>
  <div id="login">
    <div class="header">
      <headerlastbox slot="header-last-box" v-show="true" class="header-content errorClass" ></headerlastbox>
    </div>
  </div>
</template>
<script>
  import headerlastbox from '@/components/header-last-box.vue'
  export default {
    name: 'login',
    data () {
      return {
        Height: 500,
        isActive: false,
        activeClass: 'activeClass',
        errorClass: 'errorClass'
      }
    },
    components: {headerlastbox}
  }
</script>
<style>
  @import "../assets/less/header/header.less";
</style>
