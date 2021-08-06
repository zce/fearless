<template>
  <n-h1 style="--font-size: 60px; --font-weight: 100">{{ store.getters.name }}</n-h1>
  <n-card size="large" style="--padding-bottom: 30px">
    <n-h2 style="--font-weight: 400">Sign-in</n-h2>
    <n-form size="large" :rules="rules" :model="model">
      <n-form-item-row label="Username" path="username">
        <n-input placeholder="Input your username" v-model:value="model.username" />
      </n-form-item-row>
      <n-form-item-row label="Password" path="password">
        <n-input placeholder="Input your password" v-model:value="model.password" />
      </n-form-item-row>
    </n-form>
    <n-button type="primary" size="large" block :loading="loading" :disabled="disabled" @click="handleLogin">Sign in</n-button>
    <br />
  </n-card>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useMessage } from 'naive-ui'
import { auth } from '../services'

const store = useStore()
const router = useRouter()
const message = useMessage()

const rules = {
  username: {
    required: true,
    message: 'Username is required.',
    trigger: 'blur'
  },
  password: {
    required: true,
    message: 'Password is required.',
    trigger: 'blur'
  }
}

const model = ref({
  username: '',
  password: ''
})

const loading = ref(false)

const disabled = computed<boolean>(() => model.value.username === '' || model.value.password === '')

const handleLogin = async (e: Event) => {
  e.preventDefault()
  loading.value = true
  try {
    const token = await auth.getToken(model.value.username, model.value.password)
    store.dispatch('updateSession', token)
  } catch (e) {
    message.error(e.message)
  }
}
</script>

<style scoped>
.n-h1 {
  margin: 25vh auto 20px;
  text-align: center;
  letter-spacing: 5px;
}

.n-card {
  margin: 0 auto;
  max-width: 380px;
  box-shadow: var(--box-shadow);
}
</style>
