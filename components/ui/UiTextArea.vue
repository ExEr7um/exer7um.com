<!-- eslint-disable vue/require-default-prop -->
<script setup lang="ts">
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
    /** Количество строк в поле */
    rows?: number | string
  }>(),
  {
    required: true,
    rows: 4,
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
    <textarea :id :name="id" :placeholder :required :rows type="text" />
  </div>
</template>
