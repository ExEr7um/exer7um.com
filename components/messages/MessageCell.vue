<template>
  <div
    class="grid border rounded-md dark:border-gray-600"
    :class="actions ? 'grid-cols-9' : 'grid-cols-8'"
  >
    <div class="flex flex-col col-span-2 p-4">
      <div class="flex items-center text-gray-900 dark:text-gray-100">
        {{ message.name }}
      </div>
      <div class="flex items-center text-gray-500 dark:text-gray-400">
        {{ message.email }}
      </div>
    </div>
    <div class="col-span-3 p-4 flex items-center">
      <p class="text-gray-900 dark:text-gray-100">{{ message.message }}</p>
    </div>
    <div class="col-span-2 p-4 flex items-center">
      <MessageStatus :status="message.status" @change-status="updateMessage" />
    </div>
    <div class="p-4 flex items-center text-gray-900 dark:text-gray-100">
      {{ new Date(message.createdAt).toLocaleDateString() }}
    </div>
    <div v-if="actions" class="p-4 flex items-center justify-end">
      <Button
        :icon="require('@/assets/icons/trash.svg')"
        button-type="destructive"
        :on-click="deleteMessage"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      default: null,
    },
    actions: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    updateMessage(status) {
      this.$store.dispatch('messages/updateMessage', {
        id: this.message._id,
        body: { status },
      })
    },
    deleteMessage() {
      this.$store.dispatch('messages/deleteMessage', this.message._id)
    },
  },
}
</script>
