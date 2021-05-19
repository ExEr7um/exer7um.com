<template>
  <footer class="bg-indigo-600 dark:bg-gray-700">
    <div class="container py-10 flex flex-col items-center space-y-8">
      <Navigation
        :items="[
          { title: $t('pages.home'), href: '/' },
          { title: $t('pages.projects'), href: '/projects' },
          { title: $t('pages.about'), href: '/about' },
          { title: $t('pages.controlPanel'), href: '/admin' },
        ]"
        :is-white="true"
      />
      <SocialIcons
        :icons="[
          {
            title: 'Telegram',
            href: 'https://t.me/exer7um',
            icon: `${require('@/assets/social/telegram.svg')}`,
          },
          {
            title: 'Twitter',
            href: 'https://twitter.com/exer7um',
            icon: `${require('@/assets/social/twitter.svg')}`,
          },
          {
            title: 'GitHub',
            href: 'https://github.com/exer7um',
            icon: `${require('@/assets/social/github.svg')}`,
          },
          {
            title: 'VK',
            href: 'https://vk.com/exer7um',
            icon: `${require('@/assets/social/vk.svg')}`,
          },
        ]"
      />
    </div>
  </footer>
</template>

<script>
export default {}
</script>
