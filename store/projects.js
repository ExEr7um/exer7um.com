export const state = () => ({
  projects: [],
})

export const actions = {
  async load({ commit }) {
    commit('CLEAR_PROJECTS')
    const res = await this.$strapi.find('projects', {
      locale: this.$i18n.locale,
      sort: 'createdAt:desc',
      populate: 'logo',
    })
    commit('SET_PROJECTS', res.data)
  },
}

export const mutations = {
  SET_PROJECTS(state, projects) {
    state.projects = projects
  },
  CLEAR_PROJECTS(state) {
    state.projects = []
  },
}
