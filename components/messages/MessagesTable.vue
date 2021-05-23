<template>
  <div class="flex flex-col w-full">
    <div class="grid grid-cols-9">
      <div class="p-4 font-medium col-span-2">Имя</div>
      <div class="col-span-3 p-4 font-medium">Сообщение</div>
      <div class="col-span-2 p-4 font-medium">Статус</div>
      <div class="p-4 font-medium">Дата</div>
      <div class="p-4 font-medium">Действия</div>
    </div>
    <div class="space-y-4">
      <MessageCard
        v-for="message in messages"
        :key="message._id"
        :message="message"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      default: null,
    },
  },
}
</script>
