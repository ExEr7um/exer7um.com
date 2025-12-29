import tags from "~/tests/constants/tags"

import { getTagsForItem, transformSeedObject } from "./utils"

export default seedData.projects.map((project, index) => ({
  ...transformSeedObject(project, index),
  tags: getTagsForItem(index + 1, seedData.tagsToProjects, tags),
}))
