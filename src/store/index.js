import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

// 状態Authと状態BoardsをVuexのstateで一元管理できるように定義する
const state = {
  auth: { // 状態Auth
    token: null, // tokenはnullで初期化
    userId: null // userIdはnullで初期化
  },
  board: { // 状態Board
    lists: [] // 状態taskListは空で初期化
  }
}

export default new Vuex.Store({
  state, // 定義したstateをstateオプションに指定
  getters,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})
