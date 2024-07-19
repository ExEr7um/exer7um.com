import { z } from "zod"

/** Сообщение пользователя */
const messageSchema = z.object({
  email: z.string().email(),
  message: z.string().min(2),
  name: z.string().min(2),
})

/** Сообщение пользователя */
export type Message = z.infer<typeof messageSchema>

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig(event)

  const { email, message, name } = await readValidatedBody(event, (body) =>
    messageSchema.parse(body)
  )

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
