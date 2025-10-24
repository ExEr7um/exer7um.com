<script setup lang="ts">
const { availableLocales, locale, t } = useI18n({ useScope: "local" })
const switchLocalePath = useSwitchLocalePath()

/** Код следующей локализации в списке */
const nextLocaleCode = computed(() => {
  /** Порядковый номер текущего языка локализации */
  const currentLocaleIndex = useArrayFindIndex(
    availableLocales,
    (localeCode) => localeCode === locale.value,
  )

  // Если локализация последняя в списке, то возвращается код первой из списка
  // Иначе возвращается код следующей локализации
  return availableLocales.at(
    (currentLocaleIndex.value + 1) % availableLocales.length,
  )
})
</script>

<template>
  <UTooltip :text="t('changeLocale')">
    <UButton
      :aria-label="t('changeLocale')"
      class="uppercase"
      color="neutral"
      :label="locale"
      :to="switchLocalePath(nextLocaleCode ?? 'ru')"
      variant="soft"
    />
  </UTooltip>
</template>

<i18n lang="yaml">
en:
  changeLocale: Change language
ru:
  changeLocale: Изменить язык
</i18n>
