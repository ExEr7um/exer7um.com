import { tags } from "~/tests/constants/tags"

export const workplaces = [
  {
    description: "Описание места работы",
    id: 1,
    logo: "/test-logo.webp",
    startDate: "2024-01-01T00:00:00.000Z",
    tags,
    title: "Заголовок места работы",
  },
  {
    description: "Описание места работы 2",
    endDate: "2024-01-01T00:00:00.000Z",
    id: 2,
    logo: "/test-logo.webp",
    startDate: "2023-01-01T00:00:00.000Z",
    tags,
    title: "Заголовок места работы 2",
  },
] as const
