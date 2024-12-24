<script setup lang="ts">
import { formatDuration, intervalToDuration } from "date-fns"

defineProps<{
  /** Скрыть ли заголовок блока */
  hideTitle?: boolean
}>()

const { locale } = useI18n()

const { data: workplaces } = await useFetch("/api/workplaces", {
  headers: {
    "Accept-Language": locale,
  },
})

/** Длительность полного опыта */
const fullExperience = formatDuration(
  intervalToDuration({
    end: new Date(),
    start: workplaces.value?.at(-1)?.startDate ?? "",
  }),
  {
    format: ["years", "months"],
    locale: locales[locale.value],
  },
)
</script>

<template>
  <UiBlock
    :hide-title
    :sub-title="fullExperience"
    :title="$t('pages.experience')"
  >
    <div class="grid grid-cols-[auto_1fr] gap-x-8 lg:grid-cols-[auto_1fr_auto]">
      <template v-for="workplace in workplaces" :key="workplace.id">
        <!-- @vue-expect-error - неправильно определяется тип -->
        <WorkplacesCard :workplace />
        <hr
          class="ml-5 h-8 w-px justify-self-center border-none bg-neutral-200 last:hidden sm:ml-8 dark:bg-neutral-800"
        />
      </template>
    </div>
  </UiBlock>
</template>
