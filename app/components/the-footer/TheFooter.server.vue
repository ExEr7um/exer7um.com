<template>
  <footer class="mt-auto bg-neutral-100 py-6 dark:bg-neutral-900">
    <div class="container flex flex-wrap items-center justify-between gap-y-6">
      <!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
      <small data-test-id="copyright">
        © 2021-{{ new Date().getFullYear() }} exer7um.com
      </small>
      <Social class="order-first w-full md:order-none md:w-auto" />
      <!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
      <small>
        Made with ❤️ by
        <span class="text-neutral-600 dark:text-neutral-400">exer7um</span>
      </small>
    </div>
  </footer>
</template>
