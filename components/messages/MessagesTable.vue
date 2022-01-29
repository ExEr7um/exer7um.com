<template>
  <div class="flex w-full flex-col">
    <div class="space-y-4">
      <MessageCell
        v-for="message in messages"
        :key="message._id"
        :message="message"
        :actions="true"
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
