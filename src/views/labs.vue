<!-- Labs -->

<template>
  <n-h1>Labs</n-h1>
  <n-button @click="handleClick">button</n-button>
  <n-h1>{{ currentUser?.username }}</n-h1>
  <n-h1 v-for="i in 100" :key="i">List item {{ i }}</n-h1>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { user } from '../services'

const currentUser = ref<user.User | null>(null)

const handleClick = async (): Promise<void> => {
  currentUser.value = await user.getCurrentUser()
}
</script>
