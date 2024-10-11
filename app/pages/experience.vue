<script setup lang="ts">
const { description, title } = usePageSeo("experience")
</script>

<template>
  <main>
    <UiHero :description :title />
    <Workplaces hide-title />
  </main>
</template>
