<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="app"  >
    <headerbox slot="header" v-show="true" class="header"   v-bind:class="[{ activeClass: isActive }, errorClass]"></headerbox>
    <div class="content">
      <div class="carousel-wrap" id="carousel">
        <transition-group tag="ul" class='slide-ul' name="list" >
          <li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
            <a :href="list.clickUrl" >
              <!--<img src="list.image" :alt="list.desc">-->
              <img :src='list.image'>
            </a>
          </li>
        </transition-group>
        <div class="carousel-items">
          <span v-for="(item,index) in slideList.length" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
        </div>
      </div>
      <router-view></router-view>
    </div>
    <footerbox></footerbox>
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
        slideList: [
          {
            'clickUrl': '#',
            'desc': 'nhwc',
            'image': require('../src/assets/images/1.png')
          },
          {
            'clickUrl': '#',
            'desc': 'nhwc',
            'image': require('../src/assets/images/2.png')
          },
          {
            'clickUrl': '#',
            'desc': 'nhwc',
            'image': require('../src/assets/images/3.png')
          }
        ],
        currentIndex: 0,
        timer: '',
        msg: '',
        on: false,
        red: 'red',
        datas: ['fdsafdsa'],
        prompt: '????',
        apiurl: 'http://localhost:8080/#/',
        gridData: [],
        Height: 500,
        isActive: false,
        activeClass: 'activeClass',
        errorClass: 'errorClass'
      }
    },
    components: {Hello, Contents, footerbox, headerbox},
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
        this.timer = setInterval(function () {
          this.autoPlay()
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
      }
    }
  }
</script>
<style>
  @import "assets/less/public.less";
  @import "assets/less/header/header.less";
  .activeClass{
    position:fixed;
    left:0;
    top:0;
    z-index:99
  }
  .list-enter-active {
    transition: all 1s ease;
    transform: translateX(0)
  }
  .list-leave-active {
    transition: all 1s ease;
    transform: translateX(-100%)
  }
  .list-enter {
    transform: translateX(100%)
  }
  .list-leave {
    transform: translateX(0)
  }
  .carousel-wrap {
    position: relative;
    height: 550px;
    width: 100%;
    overflow: hidden;
    background-color: #fff;
  }
  .slide-ul {
    width: 100%;
    height: 100%;
  }
  .slide-ul li {
    position: absolute;
    width: 100%;
    height: 100%;
    top:-1px;
  }
  .slide-ul li img {
    width: 100%;
    height: 100%;
  }

  .carousel-items {
    position: absolute;
    z-index: 10;
    top: 530px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    font-size: 0;
  }
  .carousel-items span {
    display: inline-block;
    height: 6px;
    width: 30px;
    margin: 0 3px;
    background-color: #b2b2b2;
    cursor: pointer;
  }
  .carousel-items  .active {
    background-color: #1c2d45
  }
</style>
