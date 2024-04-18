<script setup lang="ts">
usePageSeo("index")
</script>

<template>
  <main>
    <TheHero />
    <Projects :limit="3" />
    <PersonalProjects :limit="3" />
    <Workplaces />
    <AboutMe />
  </main>
</template>
