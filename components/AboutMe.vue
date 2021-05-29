<template>
  <div>
    <h2>{{ $t('headings.aboutMe') }}</h2>
    <h3 class="mt-6">{{ $t('about.name') }}</h3>
    <p class="max-w-xl mt-4">
      {{ $t('about.firstWord') }}
      {{
        new Date(Date.now() - new Date('2002-01-15')).getUTCFullYear() - 1970
      }}
      {{ $t('about.paragraph_1_1') }}
      <span class="text-green-500 font-medium dark:text-green-400">Nuxt</span>
      {{ $t('about.and') }}
      <span class="text-blue-500 font-medium dark:text-blue-400">Tailwind</span
      >.
      {{ $t('about.paragraph_1_2') }}
      <span class="text-yellow-500 font-medium dark:text-yellow-400"
        >Sketch</span
      >.
    </p>
    <p class="max-w-xl mt-4">
      {{ $t('about.paragraph_2') }}
      <span class="text-blue-500 font-medium dark:text-blue-400">React</span>.
    </p>
    <p class="max-w-xl mt-4">
      {{ $t('about.paragraph_3') }}
    </p>
    <div class="flex mt-8 space-x-4">
      <a
        href="https://github.com/ExEr7um/exer7um.github.io"
        target="_blank"
        class="
          flex
          items-center
          justify-center
          border
          rounded-md
          py-2
          px-4
          text-gray-700
          hover:bg-gray-50
          dark:text-gray-300
          dark:border-gray-600
          dark:hover:bg-gray-700
        "
      >
        <img
          src="@/assets/social/github.svg"
          alt=""
          class="mr-3 filter dark:invert"
        />
        GitHub
      </a>
      <Button :text="$t('buttons.contactMe')" />
    </div>
  </div>
</template>

<script>
export default {}
</script>
