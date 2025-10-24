<script setup lang="ts">
import type { PersonalProject } from "~~/server/database/schema/personalProject"
import type { Tag } from "~~/server/database/schema/tag"

defineProps<{
  /** Личный проект */
  personalProject: Pick<PersonalProject, "github" | "icon" | "id"> & {
    description: string
    tags: Tag[]
    title: string
  }
}>()

const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <div class="card row-span-4 grid grid-rows-subgrid gap-y-5 p-5">
    <!-- Шапка карточки -->
    <div class="flex items-start justify-between">
      <!-- Иконка проекта -->
      <UBadge
        color="neutral"
        :label="personalProject.icon"
        :ui="{
          base: 'size-16 justify-center rounded-lg',
          label: 'text-[2rem] font-[system-ui]',
        }"
        variant="subtle"
      />
      <!-- Ссылка на GitHub -->
      <LazyUButton
        v-if="personalProject.github"
        :aria-label="t('open')"
        color="neutral"
        external
        icon="simple-icons:github"
        size="lg"
        square
        target="_blank"
        :to="personalProject.github"
        variant="ghost"
      />
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
  open: Open in GitHub
ru:
  open: Открыть на GitHub
</i18n>
