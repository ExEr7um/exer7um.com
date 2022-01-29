<template>
  <select
    v-model="selectedStatus"
    class="rounded-md border-none py-1 px-2"
    :class="{
      'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400':
        selectedStatus === 'Не просмотрено',
      'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-400':
        selectedStatus === 'Просмотрено',
      'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-400':
        selectedStatus === 'Отвечено',
      'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300':
        selectedStatus === 'Спам',
    }"
  >
    <option value="Не просмотрено">Не просмотрено</option>
    <option value="Просмотрено">Просмотрено</option>
    <option value="Отвечено">Отвечено</option>
    <option value="Спам">Спам</option>
  </select>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      selectedStatus: this.status,
    }
  },
  watch: {
    selectedStatus(newStatus) {
      this.$emit('change-status', newStatus)
    },
  },
}
</script>
