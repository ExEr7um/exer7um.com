<script setup lang="ts">
usePageSeo("contactMe")
</script>

<template>
  <main class="max-w-2xl">
    <h1>{{ $t("pages.contactMe") }}</h1>
    <ContactForm />
  </main>
</template>
