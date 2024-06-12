<script setup lang="ts">
const {name} = useAppConfig();

useHead({
  titleTemplate(title){
    return title ? `${title} - ${name}` : name;
  },
  title: '中文字体',
  meta: [
    { hid: 'keywords', name: 'keywords', content: '字体天下,首页' + name }
  ]
})
</script>

<template>
        <section class="site_content">
            中文字体
        </section>
</template>

<style scoped></style>