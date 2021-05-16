<template>
  <header class="container flex items-center justify-between h-24">
    <Navigation
      :items="[
        { title: 'Главная', href: '/' },
        { title: 'Проекты', href: '/projects' },
        { title: 'Обо мне', href: '/about' },
      ]"
    />
    <Button text="Написать мне!" />
  </header>
</template>

<script>
export default {}
</script>
