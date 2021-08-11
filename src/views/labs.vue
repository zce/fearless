<!-- Labs -->

<template>
  <n-h1>Labs</n-h1>
  <n-space>
    <n-button @click="handleStatus(401)()">401</n-button>
    <n-button @click="handleStatus(403)()">403</n-button>
    <n-button @click="handleStatus(404)()">404</n-button>
    <n-button @click="handleStatus(408)()">408</n-button>
    <n-button @click="handleStatus(413)()">413</n-button>
    <n-button @click="handleStatus(500)()">500</n-button>
  </n-space>
  <n-p v-for="i in 100" :key="i">List item {{ i }}</n-p>
</template>

<script lang="ts" setup>
// import { ref } from 'vue'
// import { user } from '../services'
import { api } from '../utils'

// const currentUser = ref<user.User | null>(null)

// const handleClick = async (): Promise<void> => {
//   currentUser.value = await user.getCurrentUser()
// }

const handleStatus = (status: number) => async () => {
  await api.get('labs/status/' + status.toString()).json()
}
</script>
