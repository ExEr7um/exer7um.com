export interface Message {
  /** Почта пользователя */
  email: string
  /** Сообщение пользователя */
  message: string
  /** Имя пользователя */
  name: string
}

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig(event)

  // Получаем поля из сообщения
  const { email, message, name } = await readBody<Message>(event)

  // Если не передано хотя бы одно из полей
  if (!email || !message || !name)
    // Выводим ошибку
    throw createError({
      message: "Проверьте правильность заполненности полей",
      status: 400,
    })

  // Отправляем запрос к боту Telegram
  await $fetch("/sendMessage", {
    baseURL: runtimeConfig.telegramUrl,
    body: {
      chat_id: runtimeConfig.telegramChatId,
      parse_mode: "HTML",
      text: `<b>Имя:</b> ${name}\r\n<b>Почта:</b> ${email}\r\n<b>Сообщение:</b> ${message}`,
    },
    method: "POST",
  }).catch((error) => {
    // Выводим ошибку
    throw createError({
      message: error,
      status: 500,
    })
  })

  return "OK"
})
