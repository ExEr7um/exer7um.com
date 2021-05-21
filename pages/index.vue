<template>
  <div class="container">
    <div class="my-16 flex flex-col items-center">
      <h1 class="mb-4">ExEr7um</h1>
      <p class="mb-8 max-w-sm text-center">
        {{ $t('home.description') }}
      </p>
      <Button :text="$t('buttons.contactMe')" />
    </div>
    <ProjectsList :projects="projects.slice(-4)" />
    <div class="flex justify-center mt-8">
      <Button
        :text="$t('buttons.showAll')"
        button-type="secondary"
        href="/projects"
      />
    </div>
    <AboutMe class="mt-8" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          en_title: 'Title',
          ru_title: 'Название',
          ru_description:
            'Описание описание описание описание описание описание',
          en_description:
            'Desc desc desc desc desc desc desc desc desc desc desc',
          color: 'purple',
          link: 'https://oonyxx.com/',
          year: '2018',
        },
        {
          en_title: 'Title',
          ru_title: 'Название',
          ru_description:
            'Описание описание описание описание описание описание',
          en_description:
            'Desc desc desc desc desc desc desc desc desc desc desc',
          color: 'green',
          link: 'https://oonyxx.com/',
          year: '2018',
        },
        {
          en_title: 'Title',
          ru_title: 'Название',
          ru_description:
            'Описание описание описание описание описание описание',
          en_description:
            'Desc desc desc desc desc desc desc desc desc desc desc',
          color: 'blue',
          link: 'https://oonyxx.com/',
          year: '2018',
        },
        {
          en_title: 'Title',
          ru_title: 'Название',
          ru_description:
            'Описание описание описание описание описание описание',
          en_description:
            'Desc desc desc desc desc desc desc desc desc desc desc',
          color: 'yellow',
          link: 'https://oonyxx.com/',
          year: '2018',
        },
      ],
    }
  },
  head() {
    return {
      title: `${this.$t('pages.home')} | exer7um.github.io`,
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
  @apply text-2xl font-medium dark:text-white;
}

h3 {
  @apply text-xl font-medium dark:text-white;
}

h4 {
  @apply text-lg font-medium dark:text-white;
}

p {
  @apply text-gray-500 leading-loose dark:text-gray-400;
}
</style>
