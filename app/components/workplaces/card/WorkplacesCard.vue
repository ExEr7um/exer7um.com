<script setup lang="ts">
import type { Tag } from "~~/server/database/schema/tag"
import type { Workplace } from "~~/server/database/schema/workplace"

defineProps<{
  /** Проект */
  workplace: {
    description: string
    tags: Tag[]
    title: string
  } & Omit<
    Workplace,
    "createdAt" | "descriptionEN" | "descriptionRU" | "titleEN" | "titleRU"
  >
}>()
</script>

<template>
  <div
    class="card col-span-full grid grid-flow-dense grid-cols-subgrid gap-y-6 p-5 sm:p-8"
  >
    <NuxtImg
      :alt="workplace.title"
      class="size-28 rounded-lg sm:size-40"
      loading="lazy"
      provider="cloudinary"
      :src="workplace.logo"
    />
    <div class="col-span-2 flex flex-col gap-y-6 self-center lg:col-span-1">
      <UiCardContent
        :description="workplace.description"
        large-title
        :tags="workplace.tags"
        :title="workplace.title"
      />
    </div>
    <div
      class="flex flex-col-reverse items-end gap-x-3 gap-y-2 self-start justify-self-end sm:flex-row sm:items-center"
    >
      <WorkplacesCardDate
        data-test-id="startDate"
        :date="workplace.startDate"
      />
      <hr
        class="hidden w-6 border-neutral-200 sm:block dark:border-neutral-700"
      />
      <WorkplacesCardDate data-test-id="endDate" :date="workplace.endDate" />
    </div>
  </div>
</template>
