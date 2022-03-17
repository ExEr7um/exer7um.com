export default function ({ app }) {
  app.i18n.onLanguageSwitched = () => {
    app.store.dispatch('projects/load')
  }
}
