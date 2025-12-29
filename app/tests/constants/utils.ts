import type { Tag, TagInsert } from "~~/server/db/schema/tag"

/**
 * Получает теги для конкретного элемента на основе связей
 *
 * @param itemId - ID элемента
 * @param relations - связи между элементами и тегами
 * @param allTags - все теги
 * @returns список тегов для элемента
 */
export function getTagsForItem(
  itemId: number,
  relations: { [key: string]: number; tagId: number }[],
  allTags: Tag[],
): Tag[] {
  const tagIds = new Set(
    relations
      .filter((rel) => Object.values(rel).includes(itemId))
      .map((rel) => rel.tagId),
  )

  return allTags.filter((tag) => tagIds.has(tag.id))
}

/**
 * Преобразует теги из seed данных в тестовый формат с ID
 *
 * @param tags - список тегов
 * @returns список тегов с ID
 */
export function tagsWithIds(tags: TagInsert[]): Tag[] {
  return tags.map((tag, index) => ({ ...tag, id: index + 1 }))
}

/**
 * Преобразует объект из seed данных в тестовый формат с ID и локализованными полями.
 *
 * @template T - тип объекта из seed данных
 * @param seedObject - объект из seed данных
 * @param index - индекс объекта
 * @returns объект в тестовом формате
 */
export function transformSeedObject<
  T extends { descriptionRU: string; titleRU: string },
>(seedObject: T, index: number) {
  return {
    ...seedObject,
    description: seedObject.descriptionRU,
    id: index + 1,
    title: seedObject.titleRU,
  }
}

export const TEST_BLOCK = "<div id='test-block'>Тест</div>"
