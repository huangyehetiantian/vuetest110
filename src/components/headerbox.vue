<template>
  <div class="header-box">
    <transition mode="out-in">
      <ul class="header-content"  name="header-box" style="overflow: hidden">
        <li class="fl">
          <router-link :to="{ name: ''}" class="mr5">首页</router-link>
          <router-link :to="{ name: 'product'}" class="mr5">产品中心</router-link>
          <router-link :to="{ name: 'cailiao'}" class="mr5">配套材料</router-link>
        </li>
        <li class="fr">
          <span class="mr5"  >教师端</span>
          <span>学生端</span>
        </li>
      </ul>
    </transition>
  </div>
</template>
<style>
  @import "../assets/less/header/header.less";
  .header-box{background:#3388FF;}
</style>
<script>
  export default {
    name: 'header-box',
    data () {
      return {
        title: '考A啦'
      }
    }
  }
</script>
