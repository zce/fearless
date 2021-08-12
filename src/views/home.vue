<!-- Home -->

<template>
  <n-result
    status="success"
    title="Dashboard"
    description="A dashboard scaffolding based on Vue.js 3.x created by Vite."
    size="huge"
  >
    <template #footer>
      <!-- <n-p v-if="currentUser1">Hey1, {{ currentUser1.name }}</n-p>
      <n-p v-if="currentUser2">Hey2, {{ currentUser2.name }}</n-p>
      <n-p v-if="currentUser3">Hey3, {{ currentUser3.name }}</n-p> -->
      <n-button @click="handleClick">Just So So</n-button>
    </template>
  </n-result>
</template>

<script lang="ts" setup>
// import { ref } from 'vue'
// import { useCurrentUser, User } from '../composables'
import { useMessage } from 'naive-ui'

// const currentUser1 = ref<User | null>(null)
// const currentUser2 = ref<User | null>(null)
// const currentUser3 = ref<User | null>(null)
const message = useMessage()

const handleClick = (): void => {
  message.success('Just So So')
  // const {  } = useCurrentUser()
  // const {  } = useCurrentUser()
  // const {  } = useCurrentUser()
}
</script>

<style scoped>
.n-result {
  margin: 10vh 0;
}
</style>
