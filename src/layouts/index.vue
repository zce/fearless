<template>
  <n-layout position="absolute" has-sider>
    <sidebar />
    <n-layout>
      <Header />
      <Content />
      <Footer />
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
import Sidebar from './sidebar.vue'
import Header from './header.vue'
import Content from './content.vue'
import Footer from './footer.vue'
// workbench
</script>
