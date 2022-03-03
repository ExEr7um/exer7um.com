<template>
  <div>
    <Header />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('home.description'),
        },
        ...i18nHead.meta,
      ],
      link: [...i18nHead.link],
    }
  },
  created() {
    this.$store.dispatch('projects/load')
  },
}
</script>
