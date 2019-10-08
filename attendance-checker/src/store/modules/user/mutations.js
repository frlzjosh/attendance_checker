export default {
  FILL_USER_STATE (state, payload) {
    state.user = payload
  },
  CLEAR_USER_STATE (state) {
    state.user = null
  }
}
