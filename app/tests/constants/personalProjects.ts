import tags from "./tags"
import { getTagsForItem, transformSeedObject } from "./utils"

export default seedData.personalProjects.map((project, index) => ({
  ...transformSeedObject(project, index),
  tags: getTagsForItem(index + 1, seedData.tagsToPersonalProjects, tags),
}))
