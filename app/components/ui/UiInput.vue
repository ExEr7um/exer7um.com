<!-- eslint-disable vue/require-default-prop -->
<script setup lang="ts">
import type { InputTypeHTMLAttribute } from "vue"

withDefaults(
  defineProps<{
    /** `ID` инпута */
    id: string
    /** Подпись для инпута */
    label?: string
    /** Максимальное количество символов */
    maxlength?: number | string
    /** Минимальное количество символов */
    minlength?: number | string
    /** `placeholder` инпута */
    placeholder?: string
    /**
     * Обязательно ли заполнение поля.
     *
     * @default true
     */
    required?: boolean
    /**
     * Тип инпута.
     *
     * @default text
     */
    type?: InputTypeHTMLAttribute
  }>(),
  { required: true, type: "text" },
)
</script>

<template>
  <div class="flex flex-col gap-y-1">
    <label v-if="label" :for="id">
      {{ label }}
    </label>
    <input :id :maxlength :minlength :name="id" :placeholder :required :type />
  </div>
</template>
