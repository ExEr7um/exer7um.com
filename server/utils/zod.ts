import { z } from "zod/v4-mini"

/** Лимит количества результатов */
export const limit = z.optional(z.coerce.number().check(z.int()))

/** Параметры запроса с лимитом */
export const limitQuerySchema = z.object({ limit })
