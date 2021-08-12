<template>
  <n-layout-sider
    :width="220"
    :native-scrollbar="false"
    :collapsed="collapsed"
    collapse-mode="width"
    show-trigger
    bordered
    @update:collapsed="toggle"
  >
    <router-link to="/" #="{ navigate, href }" custom>
      <n-a class="logo" :href="href" @click="navigate">
        <svg viewBox="0 0 472 450">
          <defs>
            <mask id="mask" fill="#fff">
              <path d="M472 114.26L203.029 335.74H407.1L472 449.48H64.9L0 335.74l268.971-221.48H64.9L0 .52h407.1z" />
            </mask>
            <filter id="shadow" x="-12.7%" y="-13.4%" width="125.4%" height="126.7%" filterUnits="objectBoundingBox">
              <feOffset in="SourceAlpha" result="offset-outer" />
              <feGaussianBlur stdDeviation="20" in="offset-outer" result="blue-outer" />
              <feComposite in="blue-outer" in2="SourceAlpha" operator="out" result="blue-outer" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" in="blue-outer" />
            </filter>
          </defs>
          <g mask="url(#mask)">
            <path fill="currentColor" d="M0 0h472v449H0z" />
            <path d="M0 335.74l64.9 113.74L472 114.26 407.1.52z" filter="url(#shadow)" />
          </g>
        </svg>
        <span>{{ store.state.name }}</span>
      </n-a>
    </router-link>
    <n-menu :options="menuOptions" :root-indent="18" />
  </n-layout-sider>
</template>

<script lang="ts" setup>
import { h, computed } from 'vue'
import { useStore } from 'vuex'
import { RouterLink } from 'vue-router'
import { NIcon } from 'naive-ui'
import { useMenus, Menu } from '../composables'
import { icons } from '../utils'
import type { MenuOption } from 'naive-ui'

const store = useStore()

const collapsed = computed(() => store.state.sidebarCollapsed)

const toggle = async (): Promise<void> => await store.dispatch('toggleSidebarCollapse')

// TODO: loading state
const { data: menus } = useMenus()

const mapping = (items: Menu[]): MenuOption[] => items.map(item => ({
  ...item,
  key: item.id,
  label: item.name != null ? () => h(RouterLink, { to: item }, { default: () => item.label }) : item.label,
  icon: item.icon == null
    ? undefined
    : () => h(NIcon, null, { default: () => h(icons[item.icon as keyof typeof icons] ?? icons.fallback) }),
  children: item.children && mapping(item.children)
}))

const menuOptions = computed(() => (menus.value ? mapping(menus.value) : []))

// TODO: keep menu expanded state
</script>

<style scoped>
.logo {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 12px 20px;
  /* border-bottom: 1px solid var(--border-color); */
  background: var(--color);
  font-size: 1.8em;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  transition: padding 0.3s var(--bezier), font-size 0.3s var(--bezier);
}

.n-layout-sider--collapsed .logo {
  padding: 8px;
  font-size: 0;
}

.logo svg {
  flex: 0 0 32px;
  height: 32px;
  margin-right: 12px;
  transition: margin 0.3s var(--bezier);
}

.n-layout-sider--collapsed .logo svg {
  margin-right: 0;
}
</style>
