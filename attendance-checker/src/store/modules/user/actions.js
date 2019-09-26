export default {
  mutateUserState ({ commit }, payload) {
    commit('FILL_USER_STATE', payload)
  },
  clearUserState({commit}){
    commit('CLEAR_USER_STATE')
  }
}
