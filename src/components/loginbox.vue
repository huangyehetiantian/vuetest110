<template>
  <div class="loginbox">
    <div class="zhezhao"  v-show="show"></div>
    <div class="zhuce-content black align-left"  v-show="show">
      <p class="title align-center re" >注册账号
        <span  class="close-btn" @click="close">关闭</span>
      </p>
      <div class="mb10 mt10">
        <span class="w120">用户名：</span>
        <input  type="text" placeholder="请输入用户名">
      </div>
      <div class="mb10">
        <span  class="w120">验证码：</span>
        <input  type="text" placeholder="请输入验证码"><span class="blue w120 cursor">发送验证码</span>
      </div>
      <div class="mb10">
        <span  class="w120">密码：</span>
        <input  type="password" placeholder="请输入密码">
      </div>
      <div class="mb10">
        <span  class="w120">重复密码：</span>
        <input  type="password" placeholder="请重复输入密码">
      </div>
      <div class="align-center mb10" >
        我是学生<input type="radio"  class="checkbox" name="choose">
        我是老师<input type="radio"  class="checkbox"  name="choose">
      </div>
      <div class="align-center mb10">
        <input type="checkbox" class="checkbox">同意<a class="red cursor">用户协议</a>和<a class="red cursor">版权说明</a>
      </div>
      <div class="align-center mb10">
        <span class="btn" >注册</span>
        <span class="btn" >登录</span>
      </div>
    </div>
  </div>
</template>
<style>
  @import "../assets/less/header/header.less";
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
  .mb10{margin-bottom:10px;}
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
  .zhezhao{
    width:100%;
    height:100%;
    position:fixed;
    background:black;
    z-index:400;
    left:0;
    top:0
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
    z-index:500;
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
  .mt10{margin-top:10px;}
  .red{color:red!important;}
</style>
<script>
  export default{
    name: 'loginbox',
    data () {
      return {
        show: true
      }
    },
    methods: {
      close () {
        this.show = !this.show
      }
    }
  }
</script>
