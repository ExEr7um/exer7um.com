<template>
  <div class="container">
    <div class="my-16 flex flex-col items-center">
      <h1 class="mb-4">ExEr7um</h1>
      <p class="mb-8 max-w-sm text-center">
        {{ $t('home.description') }}
      </p>
      <Button :text="$t('buttons.contactMe')" href="/message" />
    </div>
    <ProjectsList :projects="$store.state.projects.projects.slice(0, 4)" />
    <div class="mt-8 flex justify-center">
      <Button
        :text="$t('buttons.showAll')"
        button-type="secondary"
        href="/projects"
      />
    </div>
    <AboutMe class="mt-8" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.$t('pages.home')} | exer7um.github.io`,
    }
  },
}
</script>
