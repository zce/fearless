<template>
  <n-config-provider :theme="theme">
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { NConfigProvider, NMessageProvider, useOsTheme, darkTheme } from 'naive-ui'

const osTheme = useOsTheme()

const theme = computed(() => osTheme.value === 'dark' ? darkTheme : null)
</script>
