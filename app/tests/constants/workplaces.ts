import tags from "~/tests/constants/tags"

import { getTagsForItem, transformSeedObject } from "./utils"

export default seedData.workplaces.map((workplace, index) => ({
  ...transformSeedObject(workplace, index),
  endDate: workplace.endDate.toISOString(),
  startDate: workplace.startDate.toISOString(),
  tags: getTagsForItem(index + 1, seedData.tagsToWorkplaces, tags),
}))
