<template>
      <header class="header">
    <div class="container mx-auto px-4 flex clear-both">
      <div class="site-logo flex-1">
        <nuxt-link to="/" class="logo" title="字体天下">
          <h1>字集网</h1>
        </nuxt-link>
      </div>
      <div class="nav_mobile_menu" :class="isShow ? 'close' : 'open'" @click="isShow = !isShow">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      <div class="mobile_mask"></div>
      <ul class="site_nav grow list-none">
        <li class="nav_link transition duration-300 hover:bg-slate-100">
          <nuxt-link to="/" class="md:px-4 py-2 px-2">首页</nuxt-link>
        </li>
        <li class="nav_link transition duration-300 hover:bg-slate-100">
          <nuxt-link to="/zh_font" class="md:px-4 py-2 px-2">中文字体</nuxt-link>
        </li>
        <li class="nav_link transition duration-300 hover:bg-slate-100">
          <a href="#" class="md:px-4 py-2 px-2">英文字体</a>
        </li>
        <li class="nav_link transition duration-300 hover:bg-slate-100">
          <a href="#" class="md:px-4 py-2 px-2">安装教程</a>
        </li>
        <li class="nav_link transition duration-300 hover:bg-slate-100">
          <a href="#" class="md:px-4 py-2 px-2">设计相关</a>
        </li>
        <li class="nav_link transition duration-300 hover:bg-slate-100">
          <a href="#" class="md:px-4 py-2 px-2">关于我们</a>
        </li>
      </ul>
      <div class="menu_nav flex-1">
        <iconpark-icon name="search" class="mr-4"></iconpark-icon>
        <nuxt-link to="/login" class="btn login-btn text-white" title="字体天下">登录</nuxt-link>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    z-index: 9;
    background-color: #fff;
    backdrop-filter: blur(24px);
    box-shadow: 0px 5px 40px 0px rgba(17, 58, 93, .1);
}

.site-logo {
    line-height: 80px;
}

.site-logo .logo {
    background-color: transparent;
}

.site_nav {}

.site_nav li {
    float: left;
    line-height: 80px;
}

.router-link-active {
    font-weight: 700;
    border-radius: 13px;
}
.mobile_mask{
  display: none;
}
.menu_nav {
    line-height: 80px;
    min-width: 150px;
}

.menu_nav iconpark-icon {
    font-size: 30px;
}

@media (max-width: 768px) {
  .nav_mobile_menu.close ~ .mobile_mask{
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #0000005c;
    z-index: 0;
  }
  .nav_mobile_menu ~ .site_nav{
    position: fixed;
    height: 100vh;
    left: -100vw;
    top: 0;
    background-color: #fff;
    z-index: 10;
    padding: 2rem 0;
    transition: left .3s linear;
  }
  .nav_mobile_menu.close ~ .site_nav{
    left: 0;
  }
  .site_nav li{
    float: none;
    line-height: normal;
  }
  .site_nav li a{
    display: block;
    width: 100%;
    padding: 1rem 3rem;
  }
  .nav_mobile_menu{
    position: absolute;
    top: 20px;
    right: 10px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    z-index: 1;
  }
  .nav_mobile_menu .line{
    width: 100%;
    height: 2px;
    background-color: #000000;
    transition: transform 0.3s, opacity 0.3s;
  }
  .nav_mobile_menu.close .line:first-child{
    transform: rotate(45deg) translate(9.4px, 9.4px); 
  }
  .nav_mobile_menu.close .line:nth-child(2){
    opacity: 0;
  }
  .nav_mobile_menu.close .line:last-child{
    transform: rotate(-45deg) translate(9.4px, -9.4px);
  }

}
</style>

<script setup>
// import { ref } from 'vue';
const isShow = ref(false)
console.log(isShow.value);
</script>