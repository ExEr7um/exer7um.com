<script setup lang="ts">
import type { PersonalProject } from "~~/server/database/schema/personalProject"
import type { Tag } from "~~/server/database/schema/tag"

defineProps<{
  /** Личный проект */
  personalProject: {
    description: string
    tags: Tag[]
    title: string
  } & Pick<PersonalProject, "github" | "icon" | "id">
}>()

const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <div class="card row-span-4 grid grid-rows-subgrid gap-y-5 p-5">
    <!-- Шапка карточки -->
    <div class="flex justify-between">
      <!-- Иконка проекта -->
      <div
        class="tag flex size-16 items-center justify-center rounded-lg font-[system-ui] text-[2rem]"
        data-test-id="icon"
      >
        {{ personalProject.icon }}
      </div>
      <!-- Ссылка на GitHub -->
      <LazyNuxtLink
        v-if="personalProject.github"
        :aria-label="t('open', { title: personalProject.title })"
        data-test-id="github-link"
        external
        target="_blank"
        :to="personalProject.github"
      >
        <LazyIcon
          class="text-neutral-400 transition-colors hover:text-neutral-500 dark:text-neutral-500 hover:dark:text-neutral-400"
          name="simple-icons:github"
        />
      </LazyNuxtLink>
    </div>
    <!-- Контент карточки -->
    <UiCardContent
      :description="personalProject.description"
      :tags="personalProject.tags"
      :title="personalProject.title"
    />
  </div>
</template>

<i18n lang="yaml">
en:
  open: Open {title} project on GitHub
ru:
  open: Открыть проект {title} на GitHub
</i18n>
