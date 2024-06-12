<template>
    <section class="site_content">
        内容列表
    </section>
</template>

<script setup lang="ts">
const {name} = useAppConfig();
useHead({
titleTemplate(title){
return title ? `${title} - ${name}` : name;
},
title: '内容列表',
meta: [
{ hid: 'keywords', name: 'keywords', content: '字体天下,首页' + name }
]
})

</script>

<style scoped></style>