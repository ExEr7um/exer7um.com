<!-- eslint-disable vue/require-default-prop -->
<script setup lang="ts">
import type { InputTypeHTMLAttribute } from "vue"

withDefaults(
  defineProps<{
    /** `ID` инпута */
    id: string
    /** Подпись для инпута */
    label?: string
    /** `placeholder` инпута */
    placeholder?: string
    /** Обязательно ли заполнение поля */
    required?: boolean
    /** Тип инпута */
    type?: InputTypeHTMLAttribute
  }>(),
  {
    required: true,
    type: "text",
  }
)
</script>

<template>
  <div class="flex flex-col gap-y-1">
    <label
      v-if="label"
      class="text-lg text-black lg:text-xl dark:text-white"
      :for="id"
    >
      {{ label }}
    </label>
    <input :id :name="id" :placeholder :required :type />
  </div>
</template>
