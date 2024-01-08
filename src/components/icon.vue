<template>
  <n-icon v-bind="props"><icon /></n-icon>
</template>

<script lang="ts" setup>
import {
  AddOutline as add,
  ChatbubbleEllipsesOutline as comments,
  SpeedometerOutline as dashboard,
  AlertCircleOutline as fallback,
  FlaskOutline as flask,
  LogoGithub as github,
  HelpCircleOutline as help,
  ImagesOutline as media,
  NotificationsOutline as notifications,
  NewspaperOutline as pages,
  HardwareChipOutline as plugins,
  CreateOutline as posts,
  RefreshOutline as refresh,
  SettingsOutline as settings,
  ColorPaletteOutline as themes,
  BuildOutline as tools,
  PeopleOutline as users
} from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'

const icons = { refresh, dashboard, posts, pages, media, users, comments, themes, plugins, tools, settings, flask, add, help, notifications, github, fallback }

type IconTypes = keyof typeof icons

const props = defineProps({
  ...NIcon.props,
  type: {
    type: String,
    default: 'fallback'
  }
})

const icon = icons[props.type as IconTypes]
</script>
