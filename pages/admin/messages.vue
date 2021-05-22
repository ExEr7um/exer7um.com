<template>
  <div class="container">
    <h2>Сообщения</h2>
    <MessagesTable :messages="$store.state.messages.messages" class="mt-6" />
  </div>
</template>

<script>
export default {
  layout: 'admin',
  head() {
    return {
      title: `${this.$t('pages.controlPanel')} — ${this.$t(
        'pages.admin.messages'
      )} | exer7um.github.io`,
    }
  },
}
</script>
