<!-- eslint-disable vue/require-default-prop -->
<script setup lang="ts">
withDefaults(
  defineProps<{
    /** `ID` инпута */
    id: string
    /** Подпись для инпута */
    label?: string
    /** Максимальное количество символов */
    maxlength?: number | string
    /**
     * Минимальное количество символов.
     *
     * @default 2
     */
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
     * Количество строк в поле.
     *
     * @default 4
     */
    rows?: number | string
  }>(),
  { minlength: 2, required: true, rows: 4 },
)
</script>

<template>
  <div class="flex flex-col gap-y-1">
    <label v-if="label" :for="id">
      {{ label }}
    </label>
    <textarea
      :id
      :maxlength
      :minlength
      :name="id"
      :placeholder
      :required
      :rows
    />
  </div>
</template>
