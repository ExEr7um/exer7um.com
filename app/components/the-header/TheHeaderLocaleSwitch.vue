<script setup lang="ts">
const { locale, localeCodes, t } = useI18n({ useScope: "local" })

/** Код следующей локализации в списке */
const nextLocaleCode = computed(() => {
  /** Порядковый номер текущего языка локализации */
  const currentLocaleIndex = useArrayFindIndex(
    localeCodes,
    (localeCode) => localeCode === locale.value
  )

  if (currentLocaleIndex.value === localeCodes.value.length - 1) {
    // Если локализация последняя в списке, то возвращается код первой из списка
    return localeCodes.value[0]
  } else {
    // Иначе возвращается код следующей локализации
    return localeCodes.value[currentLocaleIndex.value + 1]
  }
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
