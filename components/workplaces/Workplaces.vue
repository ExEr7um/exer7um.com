<script setup lang="ts">
defineProps<{
  /** Скрыть ли заголовок блока */
  hideTitle?: boolean
}>()

const { locale, t } = useI18n()

const { data: workplaces } = await useFetch("/api/workplaces", {
  headers: {
    "Accept-Language": locale,
  },
})
</script>

<template>
  <UiBlock :title="hideTitle ? undefined : t('pages.experience')">
    <div class="grid grid-cols-[auto_1fr] gap-x-8 lg:grid-cols-[auto_1fr_auto]">
      <template v-for="workplace in workplaces" :key="workplace.id">
        <!-- @vue-expect-error - неправильно определяется тип -->
        <WorkplacesCard :workplace />
        <hr
          class="ml-8 h-8 w-px justify-self-center border-none bg-neutral-200 last:hidden dark:bg-neutral-800"
        />
      </template>
    </div>
  </UiBlock>
</template>
