<template>
  <div
    class="container absolute top-full left-0 z-20 flex w-full flex-col items-start rounded-xl bg-white pt-2 pb-8 dark:bg-zinc-900 lg:hidden"
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
