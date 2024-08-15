import {
  integer,
  number,
  object,
  partial,
  pipe,
  string,
  transform,
} from "valibot"

/** Лимит количества результатов */
export const limit = pipe(
  string(),
  transform((value) => Number.parseInt(value)),
  number(),
  integer()
)

/** Параметры запроса с лимитом */
export const limitQuerySchema = partial(
  object({
    limit,
  })
)
