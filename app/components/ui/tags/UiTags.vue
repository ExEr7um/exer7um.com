<script setup lang="ts">
import type { Tag } from "~~/server/database/schema/tag"

defineProps<{
  /** Список тегов */
  tags: Tag[]
}>()
</script>

<template>
  <div class="flex h-max flex-wrap gap-2">
    <UBadge
      v-for="tag in tags"
      :key="tag.id"
      color="neutral"
      :label="tag.title"
      size="lg"
      variant="soft"
    />
  </div>
</template>
