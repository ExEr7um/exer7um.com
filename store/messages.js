import nuxtStorage from 'nuxt-storage'

export const state = () => ({
  messages: [],
})

export const actions = {
  async load({ commit }) {
    const res = await this.$axios.$get(
      `${this.$axios.defaults.baseURL}/messages`,
      { headers: { 'auth-token': nuxtStorage.localStorage.getData('user') } }
    )

    commit('SET_MESSAGES', res)
  },
  async updateMessage({ commit, dispatch }, payload) {
    const res = await this.$axios.$patch(
      `${this.$axios.defaults.baseURL}/messages/${payload.id}`,
      payload.body,
      { headers: { 'auth-token': nuxtStorage.localStorage.getData('user') } }
    )
    if (res) {
      dispatch('load')
    }
  },
  async deleteMessage({ dispatch }, payload) {
    const res = await this.$axios.$delete(
      `${this.$axios.defaults.baseURL}/messages/${payload}`,
      { headers: { 'auth-token': nuxtStorage.localStorage.getData('user') } }
    )
    if (res !== null) {
      dispatch('load')
    }
  },
}

export const mutations = {
  SET_MESSAGES(state, messages) {
    state.messages = messages
  },
}
