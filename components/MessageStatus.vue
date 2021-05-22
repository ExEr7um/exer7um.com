<template>
  <select
    v-model="selectedStatus"
    class="rounded-md py-1 px-2 w-max border-none"
    :class="{
      'bg-gray-100 text-gray-700': selectedStatus === 'Не просмотрено',
      'bg-yellow-100 text-yellow-700': selectedStatus === 'Просмотрено',
      'bg-green-100 text-green-700': selectedStatus === 'Отвечено',
      'bg-red-100 text-red-700': selectedStatus === 'Спам',
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
}
</script>
