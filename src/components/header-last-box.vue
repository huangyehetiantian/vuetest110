<template>
  <div class="header-last-box" id="header-last-box">
    <transition mode="out-in">
      <ul class="header-content"  name="header-last-box" style="overflow: hidden">
        <li class="fl">
          <router-link :to="{ name: 'index'}" class="mr5">首页</router-link>
          <router-link :to="{ name: 'ziyuan'}" class="mr5">考A资源库</router-link>
          <router-link :to="{ name: 'cailiao'}" class="mr5">配套材料</router-link>
          <router-link :to="{ name: 'shoucang'}" >我的收藏</router-link>
        </li>
        <li class="fr">
          <router-link :to="{ name: 'niantu'}"  class="mr5 cursor blue"  >注册
            <div class="loginbox" v-show="show">
              <div class="zhezhao"></div>
              <div class="zhuce-content black align-left">
                <p class="title align-center re" >注册账号
                  <a  class="close-btn" @click="close">关闭</a>
                </p>
                <div >
                  <span class="w120">用户名：</span>
                  <input  type="text" placeholder="请输入用户名">
                </div>
                <div >
                  <span  class="w120">验证码：</span>
                  <input  type="text" placeholder="请输入验证码"><span class="blue w120 cursor">发送验证码</span>
                </div>
                <div >
                  <span  class="w120">密码：</span>
                  <input  type="password" placeholder="请输入密码">
                </div>
                <div >
                  <span  class="w120">重复密码：</span>
                  <input  type="password" placeholder="请重复输入密码">
                </div>
                <div class="align-center" >
                  我是学生<input type="radio"  class="checkbox" name="choose">
                  我是老师<input type="radio"  class="checkbox"  name="choose">
                </div>
                <div class="align-center">
                  <input type="checkbox" class="checkbox">同意<a class="blue cursor">用户协议</a>和<a class="blue cursor">版权说明</a>
                </div>
                <div class="align-center">
                  <span class="btn cursor white" @click="zhuce"  >注册</span>
                  <span class="btn cursor white" @click="login"  >登录</span>
                </div>
              </div>
            </div>
          </router-link>
          <span  class="cursor blue" >登录</span>
        </li>
      </ul>
    </transition>
  </div>
</template>
<script>
  import $ from 'jquery'
  export default {
    name: 'header-last-box',
    data () {
      return {
        title: '考A啦',
        show: false
      }
    },
    methods: {
      close () {
        this.show = false
      },
      login () {
        this.show = false
      },
      zhuce () {
        this.show = true
      }
    },
    mounted () {
      $('#header-box').hide()
      $('#header-last-box').show()
    }
  }
</script>
<style>
  @import "../assets/less/header/header.less";
  .header-last-box{background:white;border-bottom:1px solid #eeeeee}
  .header-last-box a{color:#3388FF!important;}
  .zhezhao{width:100%;height:100%;position:fixed;background:black;opacity:0.8;z-index:200}
  .black{color:black}
  .blue{color:#3388FF}
  .re{position:relative}
  .close-btn{
    position:absolute;
    right:0;
    top:2px;
    cursor:pointer;
    font-size:14px;
  }
  .white{color:white!important;}
  .w120{width:120px;display:inline-block;text-align:right}
  .align-center{text-align:center}
  .align-left{text-align:left}
  .line35{line-height:35px;}
  .align-right{text-align:right}
  .btn{
    width:120px;
    line-height:30px;
    color:white;
    height:30px;
    display:inline-block;
    text-align:center;
    border-radius:10px;
    background:#3388FF;
    cursor:pointer;
  }
  .cursor{cursor:pointer}
  .checkbox{
    width:20px;
    height:20px;
    display:inline-block;
    vertical-align:middle;
    margin:0 5px;
    cursor:pointer;
  }
  .zhuce-content{
    min-width:50px;
    min-height:50px;
    position:fixed;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    -webkit-transform:translate(-50%,-50%);
    background:white;
    z-index:201;
    border-radius:10px;
    padding:20px 30px;
  }
  .mr10{margin-right:10px;}
  input{
    width:200px;
    height:30px;
    display:inline-block;
    padding:5px;
  }
  .title{
    color:black;
    font-size:24px;
    line-height:30px;
  }
</style>
