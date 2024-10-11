<script setup lang="ts">
usePageSeo("index")
</script>

<template>
  <main>
    <TheHeroMain />
    <Workplaces />
    <Projects :limit="3" />
    <PersonalProjects :limit="3" />
    <AboutMe />
  </main>
</template>
