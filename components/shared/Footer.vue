<template>
  <footer class="mt-16 bg-indigo-600 dark:bg-zinc-800">
    <div class="container flex flex-col items-center gap-y-8 py-10">
      <Navigation
        :items="[
          { title: $t('pages.home'), href: '/' },
          { title: $t('pages.projects'), href: '/projects' },
          { title: $t('pages.about'), href: '/about' },
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
        class="flex flex-col items-center gap-y-4 md:flex-row md:gap-x-8 md:gap-y-0"
      >
        <span class="text-sm text-indigo-300 dark:text-zinc-400"
          >© 2021-{{
            new Date(Date.now()).getUTCFullYear()
          }}
          exer7um.github.io</span
        >
        <span class="text-sm text-indigo-300 dark:text-zinc-400">
          Made with ❤️ by
          <a
            href="https://exer7um.github.io"
            class="text-white hover:text-zinc-300"
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
