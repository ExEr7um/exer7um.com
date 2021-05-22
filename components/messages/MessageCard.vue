<template>
  <div class="grid grid-cols-10 border rounded-md">
    <div class="p-4">{{ message.name }}</div>
    <div class="col-span-2 p-4">{{ message.email }}</div>
    <div class="col-span-3 p-4">{{ message.message }}</div>
    <div class="col-span-2 p-4">
      <MessageStatus :status="message.status" @change-status="updateMessage" />
    </div>
    <div class="p-4">22.05.21</div>
    <div class="p-4">Действия</div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      default: null,
    },
  },
  methods: {
    updateMessage(status) {
      this.$store.dispatch('messages/updateMessage', {
        id: this.message._id,
        body: { status },
      })
    },
  },
}
</script>
