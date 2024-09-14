import type { RouteRecordName } from "vue-router"

/**
 * Тип для извлечения префикса из строки.
 *
 * @template TString - тип строки.
 */
type ExtractPrefix<TString> = TString extends `${infer Prefix}___${string}`
  ? Prefix
  : never

/** Названия страниц */
type RouteName = ExtractPrefix<RouteRecordName>
