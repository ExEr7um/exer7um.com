<template>
  <div class="container">
    <h2>Краткая сводка</h2>
    <div class="border p-6 space-y-4 rounded-xl mt-4 dark:border-gray-600">
      <div class="flex justify-between items-center">
        <h3>Последние сообщения</h3>
        <nuxt-link
          :to="localePath('/admin/messages')"
          class="
            text-indigo-600
            dark:text-indigo-400
            hover:text-indigo-800
            dark:hover:text-indigo-300
          "
          >{{ $t('buttons.showAll') }} →</nuxt-link
        >
      </div>
      <MessageCell
        v-for="message in $store.state.messages.messages"
        :key="message._id"
        :message="message"
      />
    </div>
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
