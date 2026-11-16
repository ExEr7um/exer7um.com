export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig(event)

  const { email, message, name } = await readValidatedBody(event, (body) =>
    messageSchema.parse(body),
  )

  try {
    // Отправляем запрос к боту Telegram
    await $fetch("/sendMessage", {
      baseURL: runtimeConfig.telegramUrl,
      body: {
        chat_id: runtimeConfig.telegramChatId,
        parse_mode: "HTML",
        text: `<b>Имя:</b> ${name}\r\n<b>Почта:</b> ${email}\r\n<b>Сообщение:</b> ${message}`,
      },
      method: "POST",
    })
  } catch (error) {
    // Выводим ошибку
    throw createError({ message: String(error), status: 500 })
  }

  return "OK"
})
