<template>
  <div class="container">
    <h2>Краткая сводка</h2>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  head() {
    return {
      title: `${this.$t('pages.controlPanel')} — ${this.$t(
        'pages.admin.dashboard'
      )} | exer7um.github.io`,
    }
  },
}
</script>
