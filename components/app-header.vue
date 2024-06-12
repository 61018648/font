<template>
  <header class="header">
    <div class="container mx-auto px-4 flex clear-both md:justify-between">
      <div class="site-logo ">
        <a href="/" class="logo" title="LOGO">
          <h3>LOGO</h3>
        </a>
      </div>
      <div class="nav_mobile_menu" :class="isShow ? 'close' : 'open'" @click="isShow = !isShow">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="mobile_mask" @click="isShow = !isShow"></div>
      <ul class="site_nav list-none flex-1">
        <li class="nav_link transition duration-300 hover:bg-slate-100">
          <nuxt-link to="/" class=" py-2 px-2">首页</nuxt-link>
        </li>
        <li class="nav_link transition duration-300 hover:bg-slate-100">
          <nuxt-link to="/zh_font" class=" py-2 px-2">所有字体</nuxt-link>
        </li>
        <li class="nav_link transition duration-300 hover:bg-slate-100">
          <a href="#" class=" py-2 px-2">版权相关</a>
        </li>
        <li class="nav_link transition duration-300 hover:bg-slate-100">
          <a href="#" class=" py-2 px-2">设计思路</a>
        </li>
        <li class="nav_link transition duration-300 hover:bg-slate-100">
          <nuxt-link to="/about" class=" py-2 px-2">关于我们</nuxt-link>
        </li>
        <li>
          <iconpark-icon name="search" class="search-btn"></iconpark-icon>
        </li>
      </ul>
      <div class="menu_nav">

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
  margin-right: 2rem;
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
}

.mobile_mask {
  display: none;
}

.menu_nav {
  line-height: 80px;
  min-width: 150px;
}

.menu_nav iconpark-icon {
  font-size: 30px;
}

.site_nav .search-btn {
  font-size: 28px;
  margin: 0 2rem;
  padding: 5px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .nav_mobile_menu.close~.mobile_mask {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #0000005c;
    z-index: 0;
  }

  .nav_mobile_menu~.site_nav {
    position: fixed;
    height: 100vh;
    left: -100vw;
    top: 0;
    background-color: #fff;
    z-index: 10;
    padding: 2rem 0;
    transition: left .3s linear;
  }

  .nav_mobile_menu.close~.site_nav {
    left: 0;
  }

  .site_nav li {
    float: none;
    line-height: normal;
    text-align: center;
  }

  .site_nav li a {
    display: block;
    width: 100%;
    padding: 1rem 3rem;
  }

  .nav_mobile_menu {
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

  .nav_mobile_menu .line {
    width: 100%;
    height: 2px;
    background-color: #000000;
    transition: transform 0.3s, opacity 0.3s;
  }

  .nav_mobile_menu.close .line:first-child {
    transform: rotate(45deg) translate(9.4px, 9.4px);
  }

  .nav_mobile_menu.close .line:nth-child(2) {
    opacity: 0;
  }

  .nav_mobile_menu.close .line:last-child {
    transform: rotate(-45deg) translate(9.4px, -9.4px);
  }

}</style>

<script setup>
// import { ref } from 'vue';
const isShow = ref(false)
</script>