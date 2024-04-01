<script setup lang="ts">
import type { Project } from "~/server/database/schema/project"
import type { Tag } from "~/server/database/schema/tag"

defineProps<{
  /** Проект */
  project: {
    description: string
    tags: Tag[]
    title: string
  } & Omit<
    Project,
    "createdAt" | "descriptionEN" | "descriptionRU" | "titleEN" | "titleRU"
  >
}>()

const { t } = useI18n({
  useScope: "local",
})
</script>

<template>
  <div class="card row-span-5 grid grid-rows-subgrid gap-y-5 overflow-hidden">
    <!-- Логотип проекта -->
    <div
      class="flex aspect-video size-full items-center justify-center rounded-2xl border-b px-6 py-8"
      data-test-id="logo"
      :style="{ backgroundColor: project.backgroundColor }"
    >
      <NuxtImg
        class="size-full"
        format="svg"
        provider="cloudinary"
        :src="project.logo"
      />
    </div>
    <!-- Контент карточки -->
    <div class="row-span-4 -mt-5 grid grid-rows-subgrid p-6">
      <UiCardContent
        :description="project.description"
        :tags="project.tags"
        :title="project.title"
      />
      <div class="flex items-end justify-between">
        <!-- Год проекта -->
        <small>{{ project.year }}</small>
        <!-- Ссылка на проект -->
        <NuxtLink
          class="text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
          data-test-id="project-link"
          external
          target="_blank"
          :to="project.url"
        >
          {{ t("view") }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<i18n lang="json">
{
  "ru": {
    "view": "Перейти"
  },
  "en": {
    "view": "View"
  }
}
</i18n>
