<script setup lang="ts">
import type { Tag } from "~/server/database/schema/tag"

defineProps<{
  /** Описание карточки */
  description: string
  /** Теги карточки */
  tags: Tag[]
  /** Заголовок карточки */
  title: string
}>()
</script>

<template>
  <!-- Заголовок и описание -->
  <h4>{{ title }}</h4>
  <p class="-mt-2">{{ description }}</p>
  <!-- Список тегов -->
  <LazyUiTags v-if="tags.length" data-test-id="tags" small :tags />
</template>
