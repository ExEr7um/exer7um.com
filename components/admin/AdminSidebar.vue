<template>
  <aside
    class="fixed flex h-full w-64 flex-col justify-between border-r p-4 dark:border-gray-600"
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
  </aside>
</template>

<script>
import nuxtStorage from 'nuxt-storage'

export default {
  methods: {
    logout() {
      nuxtStorage.localStorage.clear()
      this.$router.push(this.localePath('/admin/login'))
    },
  },
}
</script>
