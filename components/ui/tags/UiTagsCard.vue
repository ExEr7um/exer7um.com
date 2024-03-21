<script setup lang="ts">
import type { Tag } from "~/server/database/schema/tag"

defineProps<{
  /** Являются ли теги уменьшенными */
  small?: boolean
  /** Тег */
  tag: Tag
}>()
</script>

<template>
  <div
    class="tag size-max rounded-md py-2"
    :class="[small ? 'px-2 text-sm' : 'px-3']"
  >
    {{ tag.title }}
  </div>
</template>
