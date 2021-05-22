export const state = () => ({
  messages: null,
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
}

export const mutations = {
  SET_MESSAGES(state, messages) {
    state.messages = messages
  },
}
