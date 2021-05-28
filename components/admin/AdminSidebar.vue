<template>
  <header
    class="
      fixed
      w-64
      border-r
      h-full
      p-4
      flex flex-col
      justify-between
      dark:border-gray-600
    "
  >
    <div class="flex flex-col">
      <h2>Панель управления</h2>
      <AdminNavigation
        :items="[
          { title: $t('pages.admin.dashboard'), href: '/admin' },
          { title: $t('pages.admin.projects'), href: '/admin/projects' },
          { title: $t('pages.admin.messages'), href: '/admin/messages' },
        ]"
      />
    </div>
    <div>
      <h3 class="mb-6">{{ $t('mobileMenu.navigation') }}</h3>
      <Navigation
        :items="[
          { title: $t('pages.home'), href: '/' },
          { title: $t('pages.projects'), href: '/projects' },
          { title: $t('pages.about'), href: '/about' },
        ]"
        :is-vertical="true"
      />
      <h3 class="mt-8">{{ $t('mobileMenu.changeLanguage') }}</h3>
      <LocaleSelect :locales="['ru', 'en']" class="mt-4 -ml-2" />
      <Button
        button-type="secondary"
        :text="$t('buttons.logout')"
        class="mt-8"
        :on-click="logout"
      />
    </div>
  </header>
</template>

<script>
import nuxtStorage from 'nuxt-storage'

export default {
  methods: {
    logout() {
      nuxtStorage.localStorage.setData('user', null)
      this.$router.push(this.localePath('/admin/login'))
    },
  },
}
</script>
