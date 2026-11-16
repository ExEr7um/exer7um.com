import type { NavigationMenuItem } from "@nuxt/ui"

export default [
  { icon: "lucide:house", label: "Home", to: "/" },
  { icon: "lucide:briefcase", label: "Experience", to: "/experience" },
] as const satisfies NavigationMenuItem[]
