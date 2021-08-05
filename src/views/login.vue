<template>
  <n-layout>
    <n-image width="100" src="http://blog.zce.me/icon.png" />
    <n-card>
      <n-tabs default-value="signin" size="large" justify-content="space-evenly">
        <n-tab-pane name="signin" tab="登录">
          <n-form>
            <n-form-item-row label="用户名">
              <n-input />
            </n-form-item-row>
            <n-form-item-row label="密码">
              <n-input />
            </n-form-item-row>
          </n-form>
          <n-button type="primary" block @click="handleLogin">登录</n-button>
        </n-tab-pane>
        <n-tab-pane name="signup" tab="注册">
          <n-form>
            <n-form-item-row label="用户名">
              <n-input />
            </n-form-item-row>
            <n-form-item-row label="密码">
              <n-input />
            </n-form-item-row>
            <n-form-item-row label="重复密码">
              <n-input />
            </n-form-item-row>
          </n-form>
          <n-button type="primary" block>注册</n-button>
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </n-layout>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogin = () => {
  router.push('/')
}
</script>

<style scoped>
.n-layout {
  width: 100%;
  max-width: 20rem;
  margin: 25vw auto 0;
  padding: 1rem;
}
</style>
