import Vue from 'vue'
import Vuex from 'vuex'

// 以下这些可以不要
// import mutations from './mutations'
// import actions from './actions'
// import getters from './getters'
// import * as types from './mutation-types'

import Demo from './modules/demo'

Vue.use(Vuex)

export default new Vuex.Store({
  // getters,
  // actions,
  modules: {
    Demo
  }
  // mutations
})
