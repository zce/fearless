<template>
  <n-result
    status="404"
    title="404 Not Found"
    description="You know life is always ridiculous."
    size="huge"
  >
    <template #footer>
      <n-button @click="router.replace('/')">Back to Home →</n-button>
    </template>
  </n-result>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style scoped>
.n-result {
  margin: 20vh auto 0;
}
</style>
