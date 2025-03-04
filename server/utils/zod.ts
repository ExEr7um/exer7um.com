import { z } from "zod"

/** Лимит количества результатов */
export const limit = z.number({ coerce: true }).int().optional()

/** Параметры запроса с лимитом */
export const limitQuerySchema = z.object({ limit })
