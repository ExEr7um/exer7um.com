import type { NavigationMenuItem } from "@nuxt/ui"

export const navigation = [
  { icon: "heroicons:home", label: "Home", to: "/" },
  { icon: "heroicons:briefcase", label: "Experience", to: "/experience" },
] as const satisfies NavigationMenuItem[]
