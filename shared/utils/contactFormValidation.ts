import * as z from "zod/mini"

/** Сообщение пользователя */
export const messageSchema = z.object({
  email: z.email(),
  message: z.string().check(z.minLength(2)),
  name: z.string().check(z.minLength(2)),
})

/** Сообщение пользователя */
export type MessageSchema = z.infer<typeof messageSchema>
