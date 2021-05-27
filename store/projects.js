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
  async createProject({ dispatch }, payload) {
    const res = await this.$axios.$post(
      `${this.$axios.defaults.baseURL}/projects`,
      payload.body
    )
    if (res) {
      dispatch('load')
    }
  },
  async updateProject({ commit, dispatch }, payload) {
    const res = await this.$axios.$patch(
      `${this.$axios.defaults.baseURL}/projects/${payload.id}`,
      payload.body
    )
    if (res) {
      dispatch('load')
    }
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
