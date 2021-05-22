export const state = () => ({
  projects: null,
})

export const actions = {
  async load({ commit }) {
    const projects = await this.$axios.$get(
      `${this.$axios.defaults.baseURL}/projects`
    )
    commit('SET_PROJECTS', projects)
  },
}

export const mutations = {
  SET_PROJECTS(state, projects) {
    state.projects = projects
  },
}
