<template>
  <n-layout-header bordered>
    <n-breadcrumb>
      <n-breadcrumb-item>Posts</n-breadcrumb-item>
      <n-breadcrumb-item>New post</n-breadcrumb-item>
    </n-breadcrumb>
    <!-- <n-menu mode="horizontal" :options="menuOptions" /> -->
    <n-space :size="20" align="center" style="line-height: 1">
      <n-tooltip>
        <template #trigger>
          <n-a href="https://github.com/zce/dashboard#readme" target="_blank">
            <n-icon size="22" :depth="2">
              <component :is="icons.help" />
            </n-icon>
          </n-a>
        </template>
        Dashboard help
      </n-tooltip>
      <n-tooltip>
        <template #trigger>
          <n-a href="https://github.com/zce/dashboard" target="_blank">
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
import { RouterLink } from 'vue-router'
import { icons } from '../utils'

// import { useMenuOptions } from '../composables'
// const menuOptions = useMenuOptions('shortcut')

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
    label: () => h(RouterLink, { to: '/signout' }, 'Sign out'),
    key: 'signout'
  }
]

const handleOptionsSelect = (key: unknown): void => {
  message.info(`Selected option: ${key as string}`)
}
</script>

<style scoped>
.n-layout-header {
  display: flex;
  align-items: center;
  padding: 9px 18px;
}

.n-space {
  margin-left: auto;
}
</style>
