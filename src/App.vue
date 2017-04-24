<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="app"  >
    <headerbox slot="header" v-show="true"></headerbox>
    <div class="content">
      <router-view  :style="{ height: Height + 'px' }" ></router-view>
    </div>
    <footerbox  v-bind:class="[{ activeClass: isActive }, errorClass]"></footerbox>
  </div>
</template>
<script>
  import Hello from '@/components/Hello.vue'
  import Contents from '@/components/Content.vue'
  import footerbox from '@/components/footer/Footer.vue'
  import headerbox from '@/components/headerbox.vue'
  import $ from 'jquery'
  export default {
    data () {
      return {
        msg: '',
        on: false,
        red: 'red',
        message: '',
        datas: ['fdsafdsa'],
        prompt: '暂无数据',
        apiurl: 'http://localhost:8080/#/',
        gridData: [],
        Height: 500,
        isActive: true,
        activeClass: 'activeClass',
        errorClass: 'errorClass'
      }
    },
    components: {Hello, Contents, footerbox, headerbox},
    methods: {
      handle () {
        if (this.datas.length > 0) {
          this.on = 'true'
          $('#app').css('background', 'yellow')
        } else {
          this.prompt = '暂无数据'
        }
      },
      computeHeight: function () {
        if (this.Height < 700) {
          this.isActive = true
        } else {
          this.isActive = false
        }
      }
    },
    updated () {
      this.computeHeight()
    },
    watch: {
      Height: function () {
      }
    }
  }
</script>
<style>
  .red{color:red}
  @import "assets/less/public.less";
  @import "assets/less/header/header.less";
</style>
