<script setup lang="ts">
const { availableLocales, locale, t } = useI18n({ useScope: "local" })

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
  <SwitchLocalePathLink
    :aria-label="t('changeLocale')"
    class="button tertiary squared uppercase"
    :locale="nextLocaleCode ?? 'ru'"
  >
    {{ locale }}
  </SwitchLocalePathLink>
</template>

<i18n lang="yaml">
en:
  changeLocale: Change selected localization
ru:
  changeLocale: Изменить выбранную локализацию
</i18n>
