<template>
  <div id="lunbo">
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
  </div>
</template>
<script>
  import $ from 'jquery'
  export default {
    name: 'lunbo',
    data () {
      return {
        slideList: [
          {
            'clickUrl': '#',
            'desc': 'nhwc',
            'image': require('../../assets/images/1.png')
          },
          {
            'clickUrl': '#',
            'desc': 'nhwc',
            'image': require('../../assets/images/2.png')
          },
          {
            'clickUrl': '#',
            'desc': 'nhwc',
            'image': require('../../assets/images/3.png')
          }
        ],
        currentIndex: 0,
        navflag: true,
        timer: '',
        msg: '',
        on: false,
        red: 'red',
        datas: ['fdsafdsa'],
        prompt: '????',
        apiurl: 'http://localhost:8080/#/',
        gridData: []
      }
    },
    methods: {
      created () {
        this.$nextTick(function () {
          this.timer = setInterval(function () {
            this.autoPlay()
          }, 4000)
        })
        alert(333)
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
      }
    },
    mounted () {
      $('#header-box').show()
    }
  }
</script>
<style>
  @import "../../assets/less/public.less";
  @import "../../assets/less/lunbo.less";
</style>
