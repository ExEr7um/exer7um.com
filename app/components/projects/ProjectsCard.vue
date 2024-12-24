<script setup lang="ts">
import type { Project } from "~~/server/database/schema/project"
import type { Tag } from "~~/server/database/schema/tag"

defineProps<{
  /** Проект */
  project: Omit<
    Project,
    "createdAt" | "descriptionEN" | "descriptionRU" | "titleEN" | "titleRU"
  > & {
    description: string
    tags: Tag[]
    title: string
  }
}>()

const { t } = useI18n({
  useScope: "local",
})
</script>

<template>
  <div class="card row-span-5 grid grid-rows-subgrid gap-y-5 overflow-hidden">
    <!-- Логотип проекта -->
    <div
      class="-mr-0.5 flex aspect-video size-full items-center justify-center rounded-2xl px-6 py-8 ring-1 ring-neutral-200 dark:ring-neutral-800"
      data-test-id="logo"
      :style="{ backgroundColor: project.backgroundColor }"
    >
      <NuxtImg
        :alt="project.title"
        class="size-full object-contain"
        format="svg"
        loading="lazy"
        provider="cloudinary"
        :src="project.logo"
      />
    </div>
    <!-- Контент карточки -->
    <div class="row-span-4 -mt-5 grid grid-rows-subgrid p-5">
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
          class="flex items-center gap-x-1 text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
          data-test-id="project-link"
          external
          target="_blank"
          :to="project.url"
        >
          <span>{{ t("view") }}</span>
          <Icon name="heroicons:arrow-right-16-solid" size="16" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  view: View
ru:
  view: Перейти
</i18n>
