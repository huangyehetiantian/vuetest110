<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="teachear"   >
    <transition mode="out-in">
      <ul class="header-content"  name="header" style="overflow: hidden">
        <li class="fl">
          <router-link :to="{ name: 'app'}" class="mr5">首页</router-link>
          <router-link :to="{ name: 'product'}" class="mr5">产品中心</router-link>
          <router-link :to="{ name: 'cailiao'}" class="mr5">配套材料</router-link>
          <!--<router-link :to="{ name: 'shoucang'}" >我的收藏</router-link>-->
        </li>
        <li class="fr">
          <router-link :to="{ name: 'teacher'}" class="mr5"  >教师端</router-link>
          <router-link :to="{ name: 'student'}" >学生端</router-link>
        </li>
      </ul>
    </transition>
  </div>
</template>
<style>
  #teachear{
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background:white;
    z-index:999
  }
</style>
