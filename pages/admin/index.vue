<template>
  <div class="container">
    <h2>Краткая сводка</h2>
    <div class="mt-4 space-y-4 rounded-xl border p-6 dark:border-zinc-600">
      <div class="flex items-center justify-between">
        <h3>Последние сообщения</h3>
        <nuxt-link
          :to="localePath('/admin/messages')"
          class="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
          >{{ $t('buttons.showAll') }} →</nuxt-link
        >
      </div>
      <MessageCell
        v-for="message in $store.state.messages.messages.slice(0, 3)"
        :key="message._id"
        :message="message"
      />
    </div>
    <div class="mt-8 space-y-4 rounded-xl border p-6 dark:border-zinc-600">
      <div class="flex items-center justify-between">
        <h3>Последние проекты</h3>
        <nuxt-link
          :to="localePath('/admin/projects')"
          class="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
          >{{ $t('buttons.showAll') }} →</nuxt-link
        >
      </div>
      <ProjectCell
        v-for="project in $store.state.projects.projects.slice(0, 3)"
        :key="project._id"
        :project="project"
        :actions="false"
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
