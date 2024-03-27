<script setup lang="ts">
import type { Tag } from "~/server/database/schema/tag"

defineProps<{
  /** Являются ли теги уменьшенными */
  small?: boolean
  /** Список тегов */
  tags: Tag[]
}>()
</script>

<template>
  <div class="flex h-max flex-wrap gap-2">
    <UiTagsCard v-for="tag in tags" :key="tag.id" :small :tag />
  </div>
</template>
