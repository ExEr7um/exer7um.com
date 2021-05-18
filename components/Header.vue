<template>
  <header class="container flex items-center justify-between h-24">
    <Navigation
      :items="[
        { title: $t('pages.home'), href: '/' },
        { title: $t('pages.projects'), href: '/projects' },
        { title: $t('pages.about'), href: '/about' },
      ]"
    />
    <div class="flex items-center">
      <LocaleSelect :locales="['ru', 'en']" />
      <Button :text="$t('buttons.contactMe')" />
    </div>
  </header>
</template>

<script>
export default {}
</script>
