<template>
  <div  id="student">
    <div class="catalog-box">
      <div class="font24">目录</div>
      <ul>
        <li  v-for="(items,index) in catalogs" class="mt5 title cursor">
          <div class="bggreen mt5" v-on:click="goshow($event)">{{index}} - {{items.singlename}}</div>
          <ul  class="itembox" v-show="showflags" >
            <li v-for="item in items.singlecontent" class="mt5">
              {{item.contents}}
            </li>
          </ul>
        </li>
      </ul>
      <div v-if="loginflag">
        <div class="login-box"></div>
        <div class="login-content">
          <h2 class="mt20">登录</h2>
          <button></button>
        </div>
      </div>
      <div v-else>
        对不起登录失败
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'student',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        showflags: false,
        catalogs: [
          {
            singlename: '第一单元 从宇宙看地球',
            singlecontent: [
              {
                contents: '第一节 地球的宇宙环境'
              },
              {
                contents: '第二节 地球的宇宙环境'
              },
              {
                contents: '第三节 地球的宇宙环境'
              }
            ]
          },
          {
            singlename: '第二单元 从宇宙看地球',
            singlecontent: [
              {
                contents: '第一节 地球的宇宙环境'
              },
              {
                contents: '第二节 地球的宇宙环境'
              },
              {
                contents: '第三节 地球的宇宙环境'
              }
            ]
          },
          {
            singlename: '第三单元 从宇宙看地球',
            singlecontent: [
              {
                contents: '第一节 地球的宇宙环境'
              },
              {
                contents: '第二节 地球的宇宙环境'
              },
              {
                contents: '第三节 地球的宇宙环境'
              }
            ]
          }
        ],
        index: '',
        loginflag: false
      }
    },
    methods: {
      goshow (event) {
        if (this.showflags) {
          this.showflags = false
        } else {
          this.showflags = true
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  .cursor{
    cursor:pointer;
  }
  .catalog-box{
    width:300px;
  }
  .itembox{
    overflow: hidden;
    font-size:14px;
    padding-top:5px;
  }
  .catalog-box li{
    overflow:hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
    -webkit-text-overflow:ellipsis;
    width:300px;
  }
  .login-box{
    width:100%;
    height:100%;
    position:fixed;
    left:0;
    top:0;
    background:#333333;;
    opacity:0.9;
    z-index:100
  }
  .login-content{
    position:fixed;
    width:600px;
    height:400px;
    left:50%;
    top:50%;
    margin-left:-300px;
    margin-top:-200px;
    background:white;
    z-index:101;
    border-radius:10px;
  }
</style>
