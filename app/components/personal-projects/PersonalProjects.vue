<script setup lang="ts">
const { limit } = defineProps<{
  /** Ограничение количества проектов для вывода */
  limit?: number
}>()

const { locale, t } = useI18n({ useScope: "local" })
const localePath = useLocalePath()

const { data: personalProjects } = await useFetch("/api/personal-projects", {
  headers: { "Accept-Language": locale },
  query: { limit: toRef(() => limit) },
})
</script>

<template>
  <UiBlock id="personal-projects" :title="t('personalProjects')">
    <div
      class="grid grid-cols-1 grid-rows-[repeat(4,_auto)] gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      <PersonalProjectsCard
        v-for="personalProject in personalProjects"
        :key="personalProject.id"
        :personal-project
      />
      <UiShowAllButton
        v-if="limit"
        :to="localePath({ name: 'projects', hash: '#personal-projects' })"
      />
    </div>
  </UiBlock>
</template>

<i18n lang="yaml">
en:
  personalProjects: Personal Projects
  viewAll: View all
ru:
  personalProjects: Личные проекты
  viewAll: Смотреть все
</i18n>
