<template>
  <div class="header-last-box">
    <transition mode="out-in">
      <ul class="header-content"  name="header-last-box" style="overflow: hidden">
        <li class="fl">
          <router-link :to="{ name: 'index'}" class="mr5" >首页</router-link>
          <router-link :to="{ name: 'ziyuan'}" class="mr5">考A资源库</router-link>
          <router-link :to="{ name: 'cailiao'}" class="mr5">配套材料</router-link>
          <router-link :to="{ name: 'shoucang'}" >我的收藏</router-link>
        </li>
        <li class="fr">
          <router-link :to="{ name: 'zhuce'}" class="mr5"  >注册</router-link>
          <router-link :to="{ name: 'login'}" >登录</router-link>
        </li>
      </ul>
    </transition>
  </div>
  <!--<div class="header-last-box" >-->
    <!--<transition mode="out-in">-->
      <!--<ul class="header-content"  name="header-last-box" style="overflow: hidden;" >-->
        <!--<li class="fl">-->
          <!--<router-link :to="{ name: 'index'}" class="mr5" >首页</router-link>-->
          <!--<router-link :to="{ name: 'ziyuan'}" class="mr5">考A资源库</router-link>-->
          <!--<router-link :to="{ name: 'cailiao'}" class="mr5">配套材料</router-link>-->
          <!--<router-link :to="{ name: 'shoucang'}" >我的收藏</router-link>-->
        <!--</li>-->
        <!--<li class="fr">-->
          <!--<router-link :to="{ name: 'zhuce'}" class="mr5"  >注册</router-link>-->
          <!--<router-link :to="{ name: 'login'}" >登录</router-link>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</transition>-->
  <!--</div>-->
</template>
<style>
  @import "../assets/less/header/header.less";
  .header-last-box{background:rgba(254,254,254,0.9);}
  .header-last-box a{color:#3388FF!important;}
</style>
<script>
  export default {
    name: 'header-last-box',
    data () {
      return {
        title: '考A啦'
      }
    }
  }
</script>
