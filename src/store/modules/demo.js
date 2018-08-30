// import * as util from '../../utils/util'
import * as types from '../mutation-types'
// import router from '../../router'
// import axios from 'axios'
// import store from '../../store'
// import {Toast, Indicator ,MessageBox } from 'mint-ui';

const state = {
  name: '我是jane-----001'
}
const getters = {
  getName: state => state.name
}

const actions = {
  doDemo ({ commit }, data) {
    commit('DEMO', data) // 'DEM' 即是调用一个回调函数
  }
}

const mutations = {
  [types.DEMO] (state, data) {
    state.name = data.paramer
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
