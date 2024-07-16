<script setup>

if (import.meta.hot) {
  // import.meta.hot.on('vite:beforeUpdate', () => {
  //   console.log('vite:beforeUpdate')
  // })
}
</script>

<template>
  <div>
    <a href="https://cn.vitejs.dev/guide/features.html#hot-module-replacement" target="_blank">
      HMR定义
    </a>
    <a href="https://vitejs.cn/vite3-cn/guide/api-hmr.html#hot-data" target="_blank">
      HMR相关API
    </a>
    <div>
      自动刷新
    </div>
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
