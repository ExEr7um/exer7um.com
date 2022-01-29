<template>
  <div>
    <h2>{{ $t('headings.aboutMe') }}</h2>
    <h3 class="mt-6">{{ $t('about.name') }}</h3>
    <p class="mt-4 max-w-xl">
      {{ $t('about.firstWord') }}
      {{
        new Date(Date.now() - new Date('2002-01-15')).getUTCFullYear() - 1970
      }}
      {{ $t('about.paragraph_1_1') }}
      <span class="font-medium text-green-500 dark:text-green-400">Nuxt</span>
      {{ $t('about.and') }}
      <span class="font-medium text-blue-500 dark:text-blue-400">Tailwind</span
      >.
      {{ $t('about.paragraph_1_2') }}
      <span class="font-medium text-yellow-500 dark:text-yellow-400"
        >Sketch</span
      >.
    </p>
    <p class="mt-4 max-w-xl">
      {{ $t('about.paragraph_2') }}
      <span class="font-medium text-blue-500 dark:text-blue-400">React</span>.
    </p>
    <p class="mt-4 max-w-xl">
      {{ $t('about.paragraph_3') }}
    </p>
    <div class="mt-8 flex space-x-4">
      <a
        href="https://github.com/ExEr7um/exer7um.github.io"
        target="_blank"
        class="flex items-center justify-center rounded-md border py-2 px-4 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
      >
        <div
          class="mr-3 fill-current text-black dark:text-white"
          v-html="require('~/assets/social/github.svg?include')"
        ></div>
        GitHub
      </a>
      <Button :text="$t('buttons.contactMe')" href="/message" />
    </div>
  </div>
</template>

<script>
export default {}
</script>
