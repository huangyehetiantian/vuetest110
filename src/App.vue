<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="app"  >
    <div  >
      <headerbox slot="header-box" v-show="true" class="header-content errorClass"  v-if="navflag" id="header-box"></headerbox>
      <headerlastbox slot="header-last-box" v-show="true" class="header-content errorClass"  v-else id="header-last-box" ></headerlastbox>
      <div class="content">
        <lunbo></lunbo>
        <router-view></router-view>
      </div>
      <footerbox></footerbox>
    </div>
  </div>
</template>
<script>
  import Hello from '@/components/Hello.vue'
  import Contents from '@/components/Content.vue'
  import footerbox from '@/components/footer/Footer.vue'
  import headerbox from '@/components/headerbox.vue'
  import headerlastbox from '@/components/header-last-box.vue'
  import lunbo from '@/components/common/lunbo.vue'
  import $ from 'jquery'
  export default {
    data () {
      return {
        navflag: true,
        timer: '',
        msg: '',
        on: false,
        red: 'red',
        Height: 500,
        isActive: false,
        activeClass: 'activeClass',
        errorClass: 'errorClass'
      }
    },
    components: {Hello, Contents, footerbox, headerbox, headerlastbox, lunbo},
    methods: {
      computeHeight: function () {
        if (this.Height > 1800) {
          this.isActive = true
        } else {
          this.isActive = false
        }
      },
      updated () {
        var h = $(document).scrollTop()
        this.Height = h
        this.computeHeight()
      },
      created () {
        this.$nextTick(function () {
          this.timer = setInterval(function () {
            this.autoPlay()
          }, 4000)
        })
      },
      go () {
        var _this = this
        _this.timer = setInterval(function () {
          _this.autoPlay()
        }, 4000)
      },
      stop () {
        clearInterval(this.timer)
        this.timer = null
      },
      change (index) {
        this.currentIndex = index
      },
      autoPlay () {
        this.currentIndex++
        if (this.currentIndex > this.slideList.length - 1) {
          this.currentIndex = 0
        }
      },
      showmsg (data) {
        alert(data)
      }
    },
    mounted () {
      $('#header-box').show()
      $('#header-last-box').hide()
    }
  }
</script>
<style>
  @import "assets/less/public.less";
  @import "assets/less/header/header.less";
  @import "assets/less/lunbo.less";
</style>
