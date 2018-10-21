export const state = () => ({
  items: []
})

export const actions = {
  async items({ commit }, params) {
    try {
      const response = await this.$axios.$get(
        'https://jsonplaceholder.typicode.com/photos',
        params
      )
      commit('SET_ITEMS', response.slice(0, 12))
      // to slice all api jsonplace to make it just 12
    } catch (error) {
      if (error.response && error.response.status == 401) {
        throw new Error('Unauthorize')
      }
      throw error
    }
  }
}

export const mutations = {
  SET_ITEMS(state, payload) {
    state.items = payload
  }
}

export const getters = {
  items(state) {
    return state.items
  }
}