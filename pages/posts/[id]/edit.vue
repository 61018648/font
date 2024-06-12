<template>
    <section class="site_content">
        编辑内容 {{ id }}
    </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

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
const {params:{id}} = useRoute();

definePageMeta({
    middleware:['auth']
})
</script>

<style scoped></style>