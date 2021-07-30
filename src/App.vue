<template>
  <n-config-provider :theme="theme">
    <router-view />
  </n-config-provider>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { NConfigProvider, useOsTheme, darkTheme } from 'naive-ui'

const osTheme = useOsTheme()

const theme = computed(() => osTheme.value === 'dark' ? darkTheme : null)
</script>
