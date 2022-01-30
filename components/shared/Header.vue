<template>
  <header class="container relative flex h-24 items-center justify-between">
    <Button
      button-type="secondary"
      :icon="
        isMenuOpened
          ? require('@/assets/icons/xmark.svg?include')
          : require('@/assets/icons/menu.svg?include')
      "
      :text="$t('buttons.menu')"
      class="lg:hidden"
      :on-click="toggleMenu"
    />
    <MobileMenu v-if="isMenuOpened" @close-menu="isMenuOpened = false" />
    <Navigation
      :items="[
        { title: $t('pages.home'), href: '/' },
        { title: $t('pages.projects'), href: '/projects' },
        { title: $t('pages.about'), href: '/about' },
      ]"
      class="hidden lg:block"
    />
    <div class="flex items-center">
      <LocaleSelect :locales="['ru', 'en']" class="hidden md:flex" />
      <div @click="isMenuOpened = false">
        <Button :text="$t('buttons.contactMe')" href="/message" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpened: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpened = !this.isMenuOpened
    },
  },
}
</script>
