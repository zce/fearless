<template>
  <n-icon><icon /></n-icon>
</template>

<script lang="ts" setup>
import { icons } from '../utils'

type IconTypes = keyof typeof icons

// eslint-disable-next-line no-undef
const props = defineProps({
  type: {
    type: String,
    default: 'fallback'
  }
})

const icon = icons[props.type as IconTypes]
</script>
