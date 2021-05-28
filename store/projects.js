import nuxtStorage from 'nuxt-storage'

export const state = () => ({
  projects: [],
})

export const actions = {
  async load({ commit }) {
    const res = await this.$axios.$get(
      `${this.$axios.defaults.baseURL}/projects`
    )
    commit('SET_PROJECTS', res)
  },
  async createProject({ dispatch }, payload) {
    const res = await this.$axios.$post(
      `${this.$axios.defaults.baseURL}/projects`,
      payload.body,
      { headers: { 'auth-token': nuxtStorage.localStorage.getData('user') } }
    )
    if (res) {
      dispatch('load')
    }
  },
  async updateProject({ commit, dispatch }, payload) {
    const res = await this.$axios.$patch(
      `${this.$axios.defaults.baseURL}/projects/${payload.id}`,
      payload.body,
      { headers: { 'auth-token': nuxtStorage.localStorage.getData('user') } }
    )
    if (res) {
      dispatch('load')
    }
  },
  async deleteProject({ dispatch }, payload) {
    const res = await this.$axios.$delete(
      `${this.$axios.defaults.baseURL}/projects/${payload}`,
      { headers: { 'auth-token': nuxtStorage.localStorage.getData('user') } }
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
