<script setup lang="ts">
/** Статус поп-апа */
type Status = "error" | "success"

/** Стили иконки статуса */
interface StatusStyle {
  /** Фон иконки */
  background: string
  /** Цвет иконки */
  color: string
  /** Иконка */
  icon: string
}

defineProps<{
  /** Описание поп-апа */
  description?: string
  /**
   * Статус поп-апа.
   *
   * От этого параметра зависит появление галочки/крестика в верхней части поп-апа.
   */
  status?: Status
  /** Заголовок поп-апа */
  title: string
}>()

const emit = defineEmits<{ close: [] }>()

/** Стили иконок */
const statusStyles = {
  error: {
    background: "bg-red-50 dark:bg-red-900",
    color: "text-red-700 dark:text-red-200",
    icon: "heroicons:x-mark",
  },
  success: {
    background: "bg-green-50 dark:bg-green-900",
    color: "text-green-700 dark:text-green-200",
    icon: "heroicons:check",
  },
} as const satisfies Record<Status, StatusStyle>
</script>

<template>
  <HeadlessDialog
    class="container fixed inset-0 z-40 flex items-center justify-center"
    data-test-id="ui-popup"
    open
    @close="emit('close')"
  >
    <div class="fixed inset-0 bg-black/15 backdrop-blur" />
    <HeadlessDialogPanel
      class="z-50 flex max-w-full flex-col gap-y-6 rounded-2xl bg-white p-6 sm:p-8 dark:bg-neutral-900"
    >
      <div
        v-if="status"
        class="mb-2 flex size-20 items-center justify-center rounded-full"
        :class="statusStyles[status].background"
        data-test-id="status"
      >
        <LazyIcon
          :class="statusStyles[status].color"
          :name="statusStyles[status].icon"
          size="32"
        />
      </div>
      <HeadlessDialogTitle as="h3">{{ title }}</HeadlessDialogTitle>
      <HeadlessDialogDescription class="max-w-lg">
        {{ description }}
      </HeadlessDialogDescription>
      <slot />
    </HeadlessDialogPanel>
  </HeadlessDialog>
</template>
