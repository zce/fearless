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
import Content from './content.vue'
import Footer from './footer.vue'
import Header from './header.vue'
import Sidebar from './sidebar.vue'

// workbench
</script>
