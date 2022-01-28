<template>
  <footer class="bg-indigo-600 dark:bg-gray-700 mt-16">
    <div class="container py-10 flex flex-col items-center space-y-8">
      <Navigation
        :items="[
          { title: $t('pages.home'), href: '/' },
          { title: $t('pages.projects'), href: '/projects' },
          { title: $t('pages.about'), href: '/about' },
          { title: $t('pages.controlPanel'), href: '/admin' },
        ]"
        :is-white="true"
        class="flex-wrap justify-around"
      />
      <SocialIcons
        :icons="[
          {
            title: 'Telegram',
            href: 'https://t.me/exer7um',
            icon: `${require('@/assets/social/telegram.svg?include')}`,
          },
          {
            title: 'Twitter',
            href: 'https://twitter.com/exer7um',
            icon: `${require('@/assets/social/twitter.svg?include')}`,
          },
          {
            title: 'GitHub',
            href: 'https://github.com/exer7um',
            icon: `${require('@/assets/social/github.svg?include')}`,
          },
          {
            title: 'VK',
            href: 'https://vk.com/exer7um',
            icon: `${require('@/assets/social/vk.svg?include')}`,
          },
        ]"
      />
      <a href="https://nuxtjs.org/" target="_blank">
        <img src="@/assets/social/nuxt.svg" alt="Built with Nuxt" class="h-5" />
      </a>
      <div
        class="flex items-center space-y-4 flex-col md:space-y-0 md:flex-row md:space-x-8"
      >
        <span class="text-indigo-300 dark:text-gray-400 text-sm"
          >© 2021-{{
            new Date(Date.now()).getUTCFullYear()
          }}
          exer7um.github.io</span
        >
        <span class="text-indigo-300 dark:text-gray-400 text-sm">
          Made with ❤️ by
          <a
            href="https://exer7um.github.io"
            class="text-white hover:text-gray-300"
            target="_blank"
            >exer7um</a
          >
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>
