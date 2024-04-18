<script setup lang="ts">
usePageSeo("about")
</script>

<template>
  <main>
    <h1>{{ $t("pages.about") }}</h1>
    <AboutMe hide-title />
  </main>
</template>
