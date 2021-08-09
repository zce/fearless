<template>
  <provider>
    <viewer />
  </provider>
</template>

<script lang="ts" setup>
import { Provider, Viewer } from './components'

const app = ''
console.log(app || 123)
</script>
