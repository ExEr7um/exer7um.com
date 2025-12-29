<script setup lang="ts">
import type { schema } from "hub:db"

defineProps<{
  /** Описание карточки */
  description: string
  /** Является ли заголовок увеличенным */
  largeTitle?: boolean
  /** Теги карточки */
  tags: schema.Tag[]
  /** Заголовок карточки */
  title: string
}>()
</script>

<template>
  <!-- Заголовок и описание -->
  <component :is="largeTitle ? 'h3' : 'h4'" data-testid="title">
    {{ title }}
  </component>
  <p :class="[largeTitle ? '-mt-4' : '-mt-2']">{{ description }}</p>
  <!-- Список тегов -->
  <LazyUiTags v-if="tags.length" data-testid="tags" :tags />
</template>
