<template>
  <n-icon v-bind="props"><icon /></n-icon>
</template>

<script lang="ts" setup>
import { NIcon } from 'naive-ui'
import {
  RefreshOutline as refresh,
  SpeedometerOutline as dashboard,
  CreateOutline as posts,
  NewspaperOutline as pages,
  ImagesOutline as media,
  PeopleOutline as users,
  ChatbubbleEllipsesOutline as comments,
  ColorPaletteOutline as themes,
  HardwareChipOutline as plugins,
  BuildOutline as tools,
  SettingsOutline as settings,
  FlaskOutline as flask,
  AddOutline as add,
  HelpCircleOutline as help,
  NotificationsOutline as notifications,
  LogoGithub as github,
  AlertCircleOutline as fallback
} from '@vicons/ionicons5'

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
