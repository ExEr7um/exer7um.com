<template>
  <div
    class="
      fixed
      w-full
      h-full
      bg-opacity-30 bg-gray-900
      z-10
      flex
      items-center
      justify-center
      top-0
      left-0
      backdrop-filter backdrop-blur
    "
  >
    <div class="bg-white p-12 rounded-xl dark:bg-gray-700">
      <div class="mb-5 flex items-center justify-between">
        <h2>{{ popup.title }}</h2>
        <Button
          :icon="require('@/assets/icons/xmark.svg')"
          button-type="secondary"
          :on-click="closePopup"
        />
      </div>
      <form id="popup" @submit.prevent="save">
        <div class="grid grid-cols-2 gap-6">
          <div>
            <h4 class="mb-1">Название RU</h4>
            <input
              v-model="popupData.ru_title"
              type="text"
              placeholder="Русское название"
              class="
                w-full
                bg-gray-100
                border-transparent
                rounded-md
                focus:ring-indigo-600
                focus:border-indigo-600
                dark:bg-gray-600
                dark:placeholder-gray-400
                dark:focus:ring-indigo-500
                dark:focus:border-indigo-500
                dark:text-white
              "
              required
            />
          </div>
          <div>
            <h4 class="mb-1">Название EN</h4>
            <input
              v-model="popupData.en_title"
              type="text"
              placeholder="Английское название"
              class="
                w-full
                bg-gray-100
                border-transparent
                rounded-md
                focus:ring-indigo-600
                focus:border-indigo-600
                dark:bg-gray-600
                dark:placeholder-gray-400
                dark:focus:ring-indigo-500
                dark:focus:border-indigo-500
                dark:text-white
              "
              required
            />
          </div>
          <div>
            <h4 class="mb-1">Описание RU</h4>
            <textarea
              v-model="popupData.ru_description"
              rows="3"
              placeholder="Русское описание"
              class="
                w-full
                bg-gray-100
                border-transparent
                rounded-md
                resize-none
                focus:ring-indigo-600
                focus:border-indigo-600
                dark:bg-gray-600
                dark:placeholder-gray-400
                dark:focus:ring-indigo-500
                dark:focus:border-indigo-500
                dark:text-white
              "
              required
            />
          </div>
          <div>
            <h4 class="mb-1">Описание EN</h4>
            <textarea
              v-model="popupData.en_description"
              rows="3"
              placeholder="Английское описание"
              class="
                w-full
                bg-gray-100
                border-transparent
                rounded-md
                resize-none
                focus:ring-indigo-600
                focus:border-indigo-600
                dark:bg-gray-600
                dark:placeholder-gray-400
                dark:focus:ring-indigo-500
                dark:focus:border-indigo-500
                dark:text-white
              "
              required
            />
          </div>
          <div>
            <h4 class="mb-1">Ссылка</h4>
            <input
              v-model="popupData.link"
              type="text"
              placeholder="Ссылка на сайт"
              class="
                w-full
                bg-gray-100
                border-transparent
                rounded-md
                focus:ring-indigo-600
                focus:border-indigo-600
                dark:bg-gray-600
                dark:placeholder-gray-400
                dark:focus:ring-indigo-500
                dark:focus:border-indigo-500
                dark:text-white
              "
              required
            />
          </div>
          <div>
            <h4 class="mb-1">Цвет</h4>
            <div class="flex space-x-4">
              <input
                v-model="popupData.color"
                type="text"
                placeholder="Класс Tailwind"
                class="
                  w-full
                  bg-gray-100
                  border-transparent
                  rounded-md
                  focus:ring-indigo-600
                  focus:border-indigo-600
                  dark:bg-gray-600
                  dark:placeholder-gray-400
                  dark:focus:ring-indigo-500
                  dark:focus:border-indigo-500
                  dark:text-white
                "
                required
              />
              <div :class="popupData.color" class="w-16 rounded-md"></div>
            </div>
          </div>
          <div>
            <h4 class="mb-1">Логотип</h4>
            <input
              v-model="popupData.logo"
              type="text"
              placeholder="Ссылка на логотип"
              class="
                w-full
                bg-gray-100
                border-transparent
                rounded-md
                focus:ring-indigo-600
                focus:border-indigo-600
                dark:bg-gray-600
                dark:placeholder-gray-400
                dark:focus:ring-indigo-500
                dark:focus:border-indigo-500
                dark:text-white
              "
              required
            />
          </div>
          <div>
            <h4 class="mb-1">Год</h4>
            <input
              v-model="popupData.year"
              type="text"
              placeholder="Год"
              class="
                w-16
                bg-gray-100
                border-transparent
                rounded-md
                focus:ring-indigo-600
                focus:border-indigo-600
                dark:bg-gray-600
                dark:placeholder-gray-400
                dark:focus:ring-indigo-500
                dark:focus:border-indigo-500
                dark:text-white
              "
              required
            />
          </div>
        </div>
        <button
          type="submit"
          form="popup"
          class="
            mt-8
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
    },
  },
}
</script>
