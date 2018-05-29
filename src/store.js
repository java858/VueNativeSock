import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 在main.js中VueNativeSock被引入和挂载，所有的组件都可以使用this.$socket对象,
// 但是this.$socket.onmessage返回的evt在组件之间是不共享的，这个组件有evt，跳到
// 下个组件就没了。为了共享evt，所以放在仓库里。
const state = {
  evt: null // onmessage的返回的evt
}

const getters = {
  getEvt: state => {
    return state.evt
  }
}

const mutations = {
  setEvt: (state, param) => {
    state.evt = param
  }
}

const actions = {
  setEvt: (context, param) => {
    context.commit('setEvt', param)
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})