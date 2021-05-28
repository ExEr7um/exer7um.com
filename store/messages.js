export const state = () => ({
  messages: [],
})

export const actions = {
  async load({ commit }) {
    const res = await this.$axios.$get(
      `${this.$axios.defaults.baseURL}/messages`
    )
    commit('SET_MESSAGES', res)
  },
  async updateMessage({ commit, dispatch }, payload) {
    const res = await this.$axios.$patch(
      `${this.$axios.defaults.baseURL}/messages/${payload.id}`,
      payload.body
    )
    if (res) {
      dispatch('load')
    }
  },
  async deleteMessage({ dispatch }, payload) {
    const res = await this.$axios.$delete(
      `${this.$axios.defaults.baseURL}/messages/${payload}`
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
