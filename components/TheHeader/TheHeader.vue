<script setup lang="ts">
import {
  Bars3BottomLeftIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline/index.js"
const localePath = useLocalePath()
const { t } = useI18n()

/** Открыто ли мобильное меню */
const isMenuOpened = ref(false)

/**
 * Функция для смены состояния мобильного меню.
 *
 * При использовании функции, меняется состояние `isMenuOpened` на противоположное.
 */
function toggleMenu() {
  isMenuOpened.value = !isMenuOpened.value
}
</script>

<template>
  <header class="mb-24">
    <div
      class="fixed top-0 z-40 h-24 w-full bg-white transition dark:bg-neutral-800"
      :class="{ 'bg-opacity-0 dark:bg-opacity-0': isMenuOpened }"
    >
      <div
        class="container relative z-40 flex h-full items-center justify-between bg-white dark:bg-neutral-800 sm:transition-all"
        :class="{ 'sm:rounded-t-xl': isMenuOpened }"
      >
        <button class="button-secondary lg:hidden" @click="toggleMenu">
          <XMarkIcon v-if="isMenuOpened" class="h-6 w-6" />
          <Bars3BottomLeftIcon v-else class="h-6 w-6" />
          <span>{{ t("header.menu") }}</span>
        </button>
        <Navigation class="hidden lg:flex" />
        <div class="flex items-center">
          <LocaleSwitch class="hidden md:flex" />
          <NuxtLink :to="localePath('/message')">
            <button class="button-primary" @click="isMenuOpened = false">
              {{ t("header.contactMe") }}
            </button>
          </NuxtLink>
        </div>
      </div>
      <Transition name="slide-down">
        <TheHeaderMobileMenu v-if="isMenuOpened" class="lg:hidden" />
      </Transition>
    </div>
    <Transition>
      <div
        v-if="isMenuOpened"
        class="fixed inset-0 z-30 bg-neutral-900/10 backdrop-blur lg:hidden"
      />
    </Transition>
  </header>
</template>
