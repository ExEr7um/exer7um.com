<template>
  <div class="container">
    <h2>Сообщения</h2>
    <MessagesTable :messages="messages" class="mt-6" />
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      messages: [
        {
          name: 'Александр',
          email: 'exer7um@gmail.com',
          message: 'Чертила Саня',
          status: 'Не просмотрено',
        },
        {
          name: 'Александр',
          email: 'exer7um@gmail.com',
          message: 'Чертила Саня',
          status: 'Просмотрено',
        },
        {
          name: 'Александр',
          email: 'exer7um@gmail.com',
          message: 'Чертила Саня',
          status: 'Отвечено',
        },
        {
          name: 'Александр',
          email: 'exer7um@gmail.com',
          message: 'Чертила Саня',
          status: 'Спам',
        },
      ],
    }
  },
}
</script>
