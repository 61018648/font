<script setup>
const { params: { id } } = useRoute()
const str = ref(`字集
www.idc1680.com`)
const fontUrl = ref('')

useHead({
  title: '首页 - 字集',
  meta: [
    { hid: 'keywords', name: 'keywords', content: '字体天下,首页' }
  ]
})
function createFontFace(url) {
  const styleSheet = new CSSStyleSheet();
  styleSheet.insertRule(`
    @font-face {
      font-family: 'Test';
      src: url(${url});
    }
  `, styleSheet.cssRules.length);
  document.adoptedStyleSheets = [...document.adoptedStyleSheets, styleSheet];
}

onMounted(() => {
  fontUrl.value = `/api/wp-content/uploads/${id.replaceAll('-', '/')}.ttf`
})
</script>
<template>
  <div class="site_content pt-6">
    <div class="container mx-auto">
      <div class="poster-nav mb-4">
        <p><nuxt-link to="/" class="text-blue-950 hover:text-blue-600/75">主页</nuxt-link> > 云峰飞云体</p>
      </div>
      <div class="poster-content">
        <div class="preview_box">
        <h2 class="poster-title">字体预览效果</h2>
        <input class="font_area focus:border-2 border-slate-200" type="text" v-model="str" placeholder="输入预览字体">
        <textarea class="font_area" v-model="str" style="display: none;"></textarea>
        <h3 :style="{ fontFamily: 'Test', 'fontFace': createFontFace(fontUrl) }" class="font_preview">{{ str }}</h3>
      </div>
        <div class="download_files">
          <h2 class="poster-title">字体下载</h2>
          <nuxt-link to="/" title="高速下载" class="file_url">
            <iconpark-icon name="download-one"></iconpark-icon>蓝奏网盘
        </nuxt-link>

        </div>
      </div>

    </div>
  </div>
</template>