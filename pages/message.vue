<template>
  <div class="container flex items-center flex-col">
    <div class="w-full md:w-max">
      <h2>{{ $t('buttons.contactMe') }}</h2>
      <form
        id="message"
        class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 w-full"
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
            class="
              w-full
              bg-gray-100
              border-transparent
              rounded-md
              focus:ring-indigo-600
              focus:border-indigo-600
              dark:bg-gray-700
              dark:placeholder-gray-400
              dark:focus:ring-indigo-500
              dark:focus:border-indigo-500
              dark:text-white
            "
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
            class="
              w-full
              bg-gray-100
              border-transparent
              rounded-md
              focus:ring-indigo-600
              focus:border-indigo-600
              dark:bg-gray-700
              dark:placeholder-gray-400
              dark:focus:ring-indigo-500
              dark:focus:border-indigo-500
              dark:text-white
            "
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
            class="
              w-full
              bg-gray-100
              border-transparent
              rounded-md
              resize-none
              focus:ring-indigo-600
              focus:border-indigo-600
              dark:bg-gray-700
              dark:placeholder-gray-400
              dark:focus:ring-indigo-500
              dark:focus:border-indigo-500
              dark:text-white
            "
            required
          />
        </div>
        <button
          type="submit"
          form="message"
          class="
            mt-4
            flex
            items-center
            justify-center
            border
            rounded-md
            py-2
            px-4
            w-max
            border-transparent
            text-white
            bg-indigo-600
            hover:bg-indigo-700
            dark:bg-indigo-700
            dark:hover:bg-indigo-600
          "
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
