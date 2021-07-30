<template>
  <n-layout
    position="absolute"
    has-sider
  >
    <sidebar />
    <n-layout :native-scrollbar="false">
      <Header />
      <n-layout-content>
        <router-view />
      </n-layout-content>
      <n-layout-footer>成府路</n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
import { NLayout, NLayoutContent, NLayoutFooter } from 'naive-ui'
import Sidebar from './sidebar.vue'
import Header from './header.vue'
</script>
