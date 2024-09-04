import type { RouteRecordName } from "vue-router"

/** Тип для извлечения префикса из строки */
type ExtractPrefix<T> = T extends `${infer Prefix}___${string}` ? Prefix : never

/** Названия страниц */
type RouteName = ExtractPrefix<RouteRecordName>
