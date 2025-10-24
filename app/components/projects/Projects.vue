<script setup lang="ts">
const { hideTitle, limit } = defineProps<{
  /** Скрыть ли заголовок блока */
  hideTitle?: boolean
  /** Ограничение количества проектов для вывода */
  limit?: number
}>()

const { locale, t } = useI18n({ useScope: "local" })
const localePath = useLocalePath()

const { data: projects } = await useFetch("/api/projects", {
  headers: { "Accept-Language": locale },
  query: { limit: toRef(() => limit) },
})
</script>

<template>
  <UiBlock id="projects" :hide-title :title="t('projects')">
    <div
      class="grid grid-cols-1 grid-rows-[repeat(5,auto)] gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      <ProjectsCard v-for="project in projects" :key="project.id" :project />
      <UiShowAllButton
        v-if="limit"
        class="row-span-5"
        :to="localePath({ name: 'projects', hash: '#projects' })"
      />
    </div>
  </UiBlock>
</template>

<i18n lang="yaml">
en:
  projects: Projects
  viewAll: View all
ru:
  projects: Проекты
  viewAll: Смотреть все
</i18n>
