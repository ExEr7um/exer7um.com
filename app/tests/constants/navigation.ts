import type { NavigationMenuItem } from "@nuxt/ui"

export default [
  { icon: "heroicons:home", label: "Home", to: "/" },
  { icon: "heroicons:briefcase", label: "Experience", to: "/experience" },
] as const satisfies NavigationMenuItem[]
