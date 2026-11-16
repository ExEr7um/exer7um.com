/**
 * `useFetch`, который передает текущую локаль в хедере `Accept-Language`.
 */
export const useLocalizedFetch = createUseFetch(() => {
  const { locale } = useI18n()

  return { headers: { "Accept-Language": locale } }
})
