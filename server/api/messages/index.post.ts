import type { InferInput } from "valibot"

import { email, minLength, object, parse, pipe, string } from "valibot"

/** Сообщение пользователя */
const messageSchema = object({
  email: pipe(string(), email()),
  message: pipe(string(), minLength(2)),
  name: pipe(string(), minLength(2)),
})

/** Сообщение пользователя */
export type Message = InferInput<typeof messageSchema>

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig(event)

  const { email, message, name } = await readValidatedBody(event, (body) =>
    parse(messageSchema, body)
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
