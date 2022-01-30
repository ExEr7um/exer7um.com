<template>
  <div class="container flex flex-col items-center">
    <div class="w-full md:w-max">
      <h2>{{ $t('buttons.contactMe') }}</h2>
      <form
        id="message"
        class="mt-8 grid w-full grid-cols-1 gap-4 md:grid-cols-2"
        @submit.prevent="send"
      >
        <div>
          <label for="name">
            <h4 class="mb-1">{{ $t('message.name') }}</h4>
          </label>
          <input
            id="name"
            v-model="message.name"
            type="text"
            :placeholder="$t('message.name')"
            class="w-full rounded-md border-transparent bg-gray-100 focus:border-indigo-600 focus:ring-indigo-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label for="email">
            <h4 class="mb-1">{{ $t('message.email') }}</h4>
          </label>
          <input
            id="email"
            v-model="message.email"
            type="email"
            placeholder="you@example.com"
            class="w-full rounded-md border-transparent bg-gray-100 focus:border-indigo-600 focus:ring-indigo-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
            required
          />
        </div>
        <div class="col-span-1 md:col-span-2">
          <label for="message">
            <h4 class="mb-1">{{ $t('message.message') }}</h4>
          </label>
          <textarea
            id="message"
            v-model="message.message"
            rows="5"
            :placeholder="$t('message.messagePlaceholder')"
            class="w-full resize-none rounded-md border-transparent bg-gray-100 focus:border-indigo-600 focus:ring-indigo-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          form="message"
          class="mt-4 flex w-max items-center justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 font-normal text-white hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600"
        >
          {{ $t('message.send') }}
        </button>
      </form>
    </div>
    <Popup
      v-if="isPopupOpened"
      :popup="{
        title: $t('message.popup.title'),
        message: $t('message.popup.message'),
        button: $t('buttons.return'),
      }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: {
        name: '',
        email: '',
        message: '',
      },
      isPopupOpened: false,
    }
  },
  head() {
    return {
      title: `${this.$t('pages.message')} | exer7um.github.io`,
    }
  },
  methods: {
    async send() {
      const res = await this.$axios.$post(
        `${this.$axios.defaults.baseURL}/messages`,
        this.message
      )
      if (res) {
        this.isPopupOpened = true
      }
    },
  },
}
</script>
