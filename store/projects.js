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
  async deleteProject({ dispatch }, payload) {
    const res = await this.$axios.$delete(
      `${this.$axios.defaults.baseURL}/projects/${payload}`
    )
    if (res !== null) {
      dispatch('load')
    }
  },
}

export const mutations = {
  SET_PROJECTS(state, projects) {
    state.projects = projects
  },
}
