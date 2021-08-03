<template>
  <n-layout-header position="static" bordered>
    <n-breadcrumb>
      <n-breadcrumb-item>北京总行</n-breadcrumb-item>
      <n-breadcrumb-item>天津分行</n-breadcrumb-item>
      <n-breadcrumb-item>平山道支行</n-breadcrumb-item>
    </n-breadcrumb>
    <!-- <n-menu mode="horizontal" :options="menuOptions" /> -->
    <n-dropdown trigger="hover" placement="bottom-end" :options="options" @select="handleSelect">
      <n-avatar size="small" round src="https://s.zceme.cn/avatar/zce.jpg" />
    </n-dropdown>
  </n-layout-header>
</template>

<script lang="ts" setup>
import { NLayoutHeader, NBreadcrumb, NBreadcrumbItem, NDropdown, NText, NAvatar, useMessage } from 'naive-ui'
// import { useMenuOptions } from '../composables'

// const menuOptions = useMenuOptions('shortcut')

const message = useMessage()

const options = [
  {
    label: '滨海湾金沙，新加坡',
    key: 'marina bay sands'
  },
  {
    label: '布朗酒店，伦敦',
    key: "brown's hotel, london"
  },
  {
    label: '亚特兰蒂斯巴哈马，拿骚',
    key: 'atlantis nahamas, nassau'
  },
  {
    label: '比佛利山庄酒店，洛杉矶',
    key: 'the beverly hills hotel, los angeles'
  }
]

const handleSelect = key => message.info(key)
</script>

<style scoped>
.n-layout-header {
  display: flex;
  align-items: center;
  /* grid-template-rows: calc(var(--header-height) - 1px);
  align-items: center; */
  padding: 0 18px;
}
</style>
