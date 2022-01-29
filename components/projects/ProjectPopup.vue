<template>
  <div
    class="fixed top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-gray-500 bg-opacity-30 backdrop-blur dark:bg-gray-900"
  >
    <div class="rounded-xl bg-white p-12 dark:bg-gray-700">
      <div class="mb-5 flex items-center justify-between">
        <h2>{{ popup.title }}</h2>
        <Button
          :icon="require('@/assets/icons/xmark.svg?include')"
          button-type="secondary"
          :on-click="closePopup"
        />
      </div>
      <form id="popup" @submit.prevent="save">
        <div class="grid grid-cols-2 gap-6">
          <div>
            <label for="ru_title"><h4 class="mb-1">Название RU</h4></label>
            <input
              id="ru_title"
              v-model="popupData.ru_title"
              type="text"
              placeholder="Русское название"
              class="w-full rounded-md border-transparent bg-gray-100 focus:border-indigo-600 focus:ring-indigo-600 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label for="en_title"><h4 class="mb-1">Название EN</h4></label>
            <input
              id="en_title"
              v-model="popupData.en_title"
              type="text"
              placeholder="Английское название"
              class="w-full rounded-md border-transparent bg-gray-100 focus:border-indigo-600 focus:ring-indigo-600 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label for="ru_description"
              ><h4 class="mb-1">Описание RU</h4></label
            >
            <textarea
              id="ru_description"
              v-model="popupData.ru_description"
              rows="3"
              placeholder="Русское описание"
              class="w-full resize-none rounded-md border-transparent bg-gray-100 focus:border-indigo-600 focus:ring-indigo-600 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label for="en_description"
              ><h4 class="mb-1">Описание EN</h4></label
            >
            <textarea
              id="en_description"
              v-model="popupData.en_description"
              rows="3"
              placeholder="Английское описание"
              class="w-full resize-none rounded-md border-transparent bg-gray-100 focus:border-indigo-600 focus:ring-indigo-600 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label for="link"><h4 class="mb-1">Ссылка</h4></label>
            <input
              id="link"
              v-model="popupData.link"
              type="text"
              placeholder="Ссылка на сайт"
              class="w-full rounded-md border-transparent bg-gray-100 focus:border-indigo-600 focus:ring-indigo-600 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label for="color"><h4 class="mb-1">Цвет</h4></label>
            <div class="flex space-x-4">
              <input
                id="color"
                v-model="popupData.color"
                type="text"
                placeholder="Класс Tailwind"
                class="w-full rounded-md border-transparent bg-gray-100 focus:border-indigo-600 focus:ring-indigo-600 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
                required
              />
              <div :class="popupData.color" class="w-16 rounded-md"></div>
            </div>
          </div>
          <div>
            <label for="logo"><h4 class="mb-1">Логотип</h4></label>
            <input
              id="logo"
              v-model="popupData.logo"
              type="text"
              placeholder="Ссылка на логотип"
              class="w-full rounded-md border-transparent bg-gray-100 focus:border-indigo-600 focus:ring-indigo-600 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label for="year"><h4 class="mb-1">Год</h4></label>
            <input
              id="year"
              v-model="popupData.year"
              type="text"
              placeholder="Год"
              class="w-16 rounded-md border-transparent bg-gray-100 focus:border-indigo-600 focus:ring-indigo-600 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          form="popup"
          class="mt-8 flex w-max items-center justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-white hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600"
        >
          Сохранить
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    popup: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      popupData: Object.assign({}, this.popup.info),
    }
  },
  methods: {
    closePopup() {
      this.$emit('close-popup')
    },
    save() {
      this.$store.dispatch(this.popup.vuexCommand, {
        id: this.popupData._id,
        body: this.popupData,
      })
      this.closePopup()
    },
  },
}
</script>
