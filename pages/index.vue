<script setup lang="ts">
const {name} = useAppConfig();

useHead({
  titleTemplate(title){
    return title ? `${title} - ${name}` : name;
  },
  title: '首页',
  meta: [
    { hid: 'keywords', name: 'keywords', content: '字体天下,首页' }
  ]
})
</script>

<template>
  <div class="site_content">
    <section class="category-posts container mx-auto ">
      <h3>最新发布</h3>
      <div class="flex flex-wrap">
        <div class="item">
          <nuxt-link to="/details/2024-05-2024060315413659" class="item-pic">
            <img src="../assets/images/2024060614592519.png" alt="">
          </nuxt-link>
          <nuxt-link to="/details/2024-05-2024060315413659" class="item-title">
            <h2>我是一个字体标题</h2>
          </nuxt-link>
          <div class="item-info flex justify-between">
            <div class="item-author">
              <span>
                <iconpark-icon name="tag-one"></iconpark-icon>
                字集
              </span>
            </div>
            <div>
              <span><iconpark-icon name="tag-one"></iconpark-icon>中文字体</span>
              <span><iconpark-icon name="eyes"></iconpark-icon>2856</span>
            </div>
          </div>
        </div>
        <div class="item " v-for="item in 10">
          <nuxt-link to="/details/2024-06-2024060311440455" class="item-pic">
            <img src="../assets/images/2024060614592519.png" alt="">
          </nuxt-link>
          <nuxt-link to="/details/2024-06-2024060311440455" class="item-title">
            <h2>我是一个字体标题</h2>
          </nuxt-link>
          <div class="item-info flex justify-between">
            <div class="item-author">
              <span>
                <iconpark-icon name="tag-one"></iconpark-icon>
                字集
              </span>
            </div>
            <div>
              <span><iconpark-icon name="tag-one"></iconpark-icon>中文字体</span>
              <span><iconpark-icon name="eyes"></iconpark-icon>2856</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>

</script>

<style scoped></style>
