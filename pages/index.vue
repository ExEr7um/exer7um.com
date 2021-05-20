<template>
  <div class="container">
    <div class="mt-8 lg:mt-16 flex flex-col items-center">
      <h1 class="mb-4">ExEr7um</h1>
      <p class="mb-8 max-w-sm text-center">
        Я фронтенд-разработчик из Москвы, пишу сайты на Nuxt, делаю дизайн в
        Sketch.
      </p>
      <Button :text="$t('buttons.contactMe')" />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Главная | exer7um.github.io',
    }
  },
}
</script>

<style lang="css">
body {
  @apply dark:bg-gray-800;
}

h1 {
  @apply text-4xl font-medium dark:text-white;
}

h2 {
  @apply text-xl font-medium dark:text-white;
}

p {
  @apply text-gray-500 leading-8 dark:text-gray-400;
}
</style>
