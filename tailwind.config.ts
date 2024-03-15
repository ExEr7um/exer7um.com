import type { Config } from "tailwindcss"

export default {
  content: [
    `assets/css/**/*.css`,
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
  theme: {
    boxShadow: {
      DEFAULT: "0 4px 6px 0 #4B556308",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },
    extend: {
      transitionDuration: {
        DEFAULT: "300ms",
      },
    },
    fontFamily: {
      sans: ["Gill Sans", "sans-serif"],
    },
    fontWeight: {
      bold: "700",
      normal: "400",
    },
  },
} satisfies Config
