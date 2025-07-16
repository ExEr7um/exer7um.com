import { z } from "zod/mini"

/** Лимит количества результатов */
export const limit = z.optional(z.coerce.number().check(z.int()))

/** Параметры запроса с лимитом */
export const limitQuerySchema = z.object({ limit })
