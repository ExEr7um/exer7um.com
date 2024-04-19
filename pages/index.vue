<script setup lang="ts">
usePageSeo("index")
</script>

<template>
  <main>
    <TheHero />
    <Workplaces />
    <Projects :limit="3" />
    <PersonalProjects :limit="3" />
    <AboutMe />
  </main>
</template>
