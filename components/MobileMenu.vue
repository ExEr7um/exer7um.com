<template>
  <div
    class="
      flex flex-col
      items-start
      absolute
      top-full
      bg-white
      border-b
      w-full
      left-0
      container
      pt-2
      pb-8
      lg:hidden
      dark:bg-gray-800
      dark:border-gray-600
    "
  >
    <h2 class="mb-6">{{ $t('mobileMenu.navigation') }}</h2>
    <Navigation
      :items="[
        { title: $t('pages.home'), href: '/' },
        { title: $t('pages.projects'), href: '/projects' },
        { title: $t('pages.about'), href: '/about' },
      ]"
      :is-vertical="true"
    />
    <div class="md:hidden">
      <h2 class="mt-8">{{ $t('mobileMenu.changeLanguage') }}</h2>
      <LocaleSelect :locales="['ru', 'en']" class="mt-4 -ml-2" />
    </div>
  </div>
</template>

<script>
export default {}
</script>
