<script setup lang="ts">
const { description, title } = usePageSeo("contactMe")
</script>

<template>
  <main class="max-w-2xl">
    <UiHero :description :title />
    <ContactForm />
  </main>
</template>
