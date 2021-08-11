<template>
  <n-layout-header bordered>
    <n-breadcrumb>
      <n-breadcrumb-item>Dashboard</n-breadcrumb-item>
      <n-breadcrumb-item>Home</n-breadcrumb-item>
    </n-breadcrumb>
    <n-space :size="20" align="center" style="line-height: 1">
      <n-tooltip>
        <template #trigger>
          <router-link :to="{ name: 'about' }">
            <n-icon size="22" :depth="2">
              <component :is="icons.help" />
            </n-icon>
          </router-link>
        </template>
        Dashboard help
      </n-tooltip>
      <n-tooltip>
        <template #trigger>
          <n-a href="https://github.com/zce/fearless" target="_blank">
            <n-icon size="22" :depth="2">
              <component :is="icons.github" />
            </n-icon>
          </n-a>
        </template>
        View on GitHub
      </n-tooltip>
      <n-popover trigger="click" placement="bottom-end" :width="300">
        <template #trigger>
          <n-badge dot processing>
            <n-icon size="22" :depth="2">
              <component :is="icons.notifications" />
            </n-icon>
          </n-badge>
        </template>
        <n-tabs type="line" justify-content="space-evenly" style="--pane-padding: 0">
          <n-tab-pane name="notifications" tab="Notifications (5)">
            <n-list style="margin: 0">
              <n-list-item v-for="i in 5" :key="i">
                Notification {{ i }}
              </n-list-item>
            </n-list>
          </n-tab-pane>
          <n-tab-pane name="messages" tab="Messages (6)">
            <n-list style="margin: 0">
              <n-list-item v-for="i in 6" :key="i">
                Message {{ i }}
              </n-list-item>
            </n-list>
          </n-tab-pane>
        </n-tabs>
      </n-popover>
      <n-dropdown placement="bottom-end" show-arrow :options="options" @select="handleOptionsSelect">
        <n-avatar size="small" round src="https://s.zceme.cn/avatar/zce.jpg" />
      </n-dropdown>
    </n-space>
  </n-layout-header>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { useMessage } from 'naive-ui'
import { useRouter, RouterLink } from 'vue-router'
import { icons } from '../utils'
import { auth } from '../services'

const router = useRouter()
const message = useMessage()

const options = [
  {
    label: () => h(RouterLink, { to: '/profile' }, 'Your Profiles'),
    key: 'profile'
  },
  {
    label: () => h(RouterLink, { to: '/profile/settings' }, 'Settings'),
    key: 'settings'
  },
  {
    type: 'divider',
    key: 'divider'
  },
  {
    label: 'Sign out',
    key: 'logout'
  }
]

const handleOptionsSelect = async (key: unknown): Promise<void> => {
  const action = key as string
  if (action === 'logout') {
    await auth.logout()
    await router.push({ name: 'login' })
    return
  }
  message.info(`Selected action: ${action}`)
}
</script>

<style scoped>
.n-layout-header {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 9px 18px;
}

.n-space {
  margin-left: auto;
}
</style>
