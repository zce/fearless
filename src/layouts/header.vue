<template>
  <n-layout-header bordered>
    <n-breadcrumb>
      <n-breadcrumb-item>Posts</n-breadcrumb-item>
      <n-breadcrumb-item>New post</n-breadcrumb-item>
    </n-breadcrumb>
    <!-- <n-menu mode="horizontal" :options="menuOptions" /> -->
    <n-space :size="20" align="center" style="line-height: 1">
      <n-a href="https://github.com/zce/dashboard" target="_blank">
        <n-icon size="20" :depth="2"><component :is="icons.help" /></n-icon>
      </n-a>
      <n-a href="https://github.com/zce/dashboard#readme" target="_blank">
        <n-icon size="20" :depth="2"><component :is="icons.github" /></n-icon>
      </n-a>
      <n-dropdown placement="bottom-end" show-arrow :options="notifications" @select="handleNotificationsSelect">
        <n-badge :value="5" processing>
          <n-icon size="20" :depth="2"><component :is="icons.notifications" /></n-icon>
        </n-badge>
      </n-dropdown>
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
// import { useMenuOptions } from '../composables'
import { icons } from '../utils'

// const menuOptions = useMenuOptions('shortcut')

const message = useMessage()

const notifications = [
  {
    label: 'Notification 1',
    key: 'notification-1'
  },
  {
    label: 'Notification 2',
    key: 'notification-2'
  },
  {
    label: 'Notification 3',
    key: 'notification-3'
  },
  {
    label: 'Notification 4',
    key: 'notification-4'
  },
  {
    type: 'divider',
    key: 'divider'
  },
  {
    label: 'More Notifications',
    key: 'more'
  }
]

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

const handleNotificationsSelect = key => {
  message.success(`Selected notification: ${key}`)
}

const handleOptionsSelect = key => {
  message.info(`Selected option: ${key}`)
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
