<script setup lang="ts">
import { differenceInYears } from "date-fns"

import type { TechnologyIcon } from "./AboutMeIcon.vue"

defineProps<{
  /** Скрыть ли заголовок блока */
  hideTitle?: boolean
}>()

const { t } = useI18n({ useScope: "local" })

/** Текущий возраст */
const age = differenceInYears(new Date(), new Date("2002-01-15"))

const icons = [
  [
    { color: "#00DC82", icon: "logos:nuxt-icon", key: "nuxt", title: "Nuxt 3" },
    {
      color: "#38BDF8",
      icon: "devicon:tailwindcss",
      key: "tailwind",
      title: "Tailwind CSS",
    },
    { color: "#FDAD00", icon: "logos:sketch", key: "sketch", title: "Sketch" },
  ],
  [
    {
      color: "#3178C6",
      icon: "bxl:typescript",
      key: "typescript",
      title: "TypeScript",
    },
    {
      color: "#9ED136",
      icon: "simple-icons:drizzle",
      key: "drizzle",
      title: "Drizzle ORM",
    },
  ],
  [],
] as const satisfies TechnologyIcon[][]
</script>

<template>
  <UiBlock :hide-title :title="t('title')">
    <article class="flex max-w-5xl flex-col gap-y-5">
      <h3>{{ t("name") }}</h3>
      <i18n-t
        v-for="paragraph in 3"
        :key="paragraph"
        class="text-[1.1875rem] leading-loose"
        :keypath="`about[${paragraph - 1}]`"
        tag="p"
      >
        <template #age>
          {{ t("age", age) }}
        </template>
        <template
          v-for="icon in icons[paragraph - 1]"
          :key="icon.key"
          #[icon.key]
        >
          <AboutMeIcon :icon />
        </template>
      </i18n-t>
    </article>
    <div class="flex gap-x-3">
      <UButton
        color="neutral"
        external
        label="GitHub"
        leading-icon="simple-icons:github"
        size="lg"
        target="_blank"
        to="https://github.com/ExEr7um/exer7um.com/"
        variant="subtle"
      />
      <UiContactMeButton />
    </div>
  </UiBlock>
</template>

<i18n lang="yaml">
en:
  about:
    - I'm {age}. I have extensive experience working with various frameworks and technologies in web development. I professionally master {nuxt} and {tailwind}, and bring my design ideas to life using {sketch}.
    - In pursuit of continuously improving my skills, I actively explore and implement the latest technologies. {typescript} caught my attention with its ability to enhance code stability and readability, and for convenient database interaction, I have started using {drizzle}. These tools have become an integral part of my technological arsenal, inspiring me to create more efficient and powerful web applications.
    - I am convinced that the website I build will serve as an excellent example of my development approach, which is why I have opened access to its source code on the GitHub platform.
  age: "{n} years old"
  name: My name is Vasily Kuzin,
  title: About Me
ru:
  about:
    - Мне {age}. Я имею обширный опыт работы с различными фреймворками и технологиями в области веб-разработки. Профессионально владею {nuxt} и {tailwind}, а также воплощаю свои дизайнерские идеи с помощью {sketch}.
    - В поисках постоянного совершенствования своих навыков я активно изучаю и внедряю новейшие технологии. {typescript} привлек мое внимание своей способностью улучшить стабильность и читаемость кода, а для удобного взаимодействия с базами данных я стал использовать {drizzle}. Эти инструменты становятся важной частью моего технологического арсенала, вдохновляя меня на создание более эффективных и мощных веб-приложений.
    - Я убежден, что построенный мной веб-сайт станет отличным образцом моего подхода к разработке, поэтому я открыл доступ к его исходному коду на платформе GitHub.
  age: 0 лет | {n} год | {n} года | {n} лет
  name: Меня зовут Василий Кузин,
  title: Обо мне
</i18n>
