<template>
  <footer class="bg-elevated dark:bg-default mt-auto py-6">
    <div class="container flex flex-wrap items-center justify-between gap-y-6">
      <!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
      <small data-testid="copyright">
        © 2021-{{ new Date().getFullYear() }} exer7um.com
      </small>
      <Social class="order-first w-full md:order-0 md:w-auto" />
      <!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
      <small>
        Made with ❤️ by
        <span class="text-toned">exer7um</span>
      </small>
    </div>
  </footer>
</template>
