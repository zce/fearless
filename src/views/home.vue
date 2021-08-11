<!-- Home -->

<template>
  <n-result
    status="success"
    title="Dashboard"
    description="A dashboard scaffolding based on Vue.js 3.x created by Vite."
    size="huge"
  >
    <template #footer>
      <n-p v-if="currentUser1">Hey1, {{ currentUser1.name }}</n-p>
      <n-p v-if="currentUser2">Hey2, {{ currentUser2.name }}</n-p>
      <n-p v-if="currentUser3">Hey3, {{ currentUser3.name }}</n-p>
      <n-button @click="handleClick">Just So So</n-button>
    </template>
  </n-result>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { user } from '../services'

const currentUser1 = ref<user.User | null>(null)
const currentUser2 = ref<user.User | null>(null)
const currentUser3 = ref<user.User | null>(null)

const handleClick = (): void => {
  user.getCurrentUser().then(user => { currentUser1.value = user }, () => {})
  user.getCurrentUser().then(user => { currentUser2.value = user }, () => {})
  user.getCurrentUser().then(user => { currentUser3.value = user }, () => {})
}
</script>

<style scoped>
.n-result {
  margin: 10vh 0;
}
</style>
