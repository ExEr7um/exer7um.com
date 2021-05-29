<template>
  <div
    class="
      flex flex-col
      items-start
      absolute
      top-full
      bg-white
      w-full
      left-0
      container
      pt-2
      pb-8
      z-20
      rounded-xl
      lg:hidden
      dark:bg-gray-800
      dark:border-gray-600
    "
  >
    <h3 class="mb-6">{{ $t('mobileMenu.navigation') }}</h3>
    <Navigation
      :items="[
        { title: $t('pages.home'), href: '/' },
        { title: $t('pages.projects'), href: '/projects' },
        { title: $t('pages.about'), href: '/about' },
      ]"
      :is-vertical="true"
      @close-menu="$emit('close-menu')"
    />
    <div class="md:hidden">
      <h3 class="mt-8">{{ $t('mobileMenu.changeLanguage') }}</h3>
      <LocaleSelect :locales="['ru', 'en']" class="mt-4 -ml-2" />
    </div>
  </div>
</template>

<script>
export default {}
</script>
