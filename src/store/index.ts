import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 0,
    }
  },
  mutations: {
    add(state: any) {
      state.count++
    },
    reduce(state, any) {
      state.count--
    }
  }
})

export default store