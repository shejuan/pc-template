import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import template from './jingli.vue'
import api from '@/api/index'
// import { watch } from 'fs'

@Component({
  name: 'jingli',
  mixins: [template]
})

export default class Jingli extends Vue {
  data = ''

  clickMe () {
    this.$store.dispatch('doDemo', { paramer: '我是状态机更改过的值' })
    this.data = this.$store.getters.getName
    this.postTopics()
  }

  async getTopics () {
    console.log('1', api)
    try {
      let resultData = await api.demo.sendInfo({ page: 1, tab: 'ask' })
      console.log(resultData, 'resultData-----')
    } catch (error) {
      console.log(error)
    }
  }

  async postTopics () {
    try {
      let data = {
        accesstoken: '用户的 accessToken',
        title: '标题',
        tab: 'ask',
        content: '主体内容'
      }
      let resultData = await api.demo.postInfo(data)
      console.log(resultData, 'resultData-----')
    } catch (error) {
      console.log(error)
    }
  }

  created () {
    this.data = this.$store.getters.getName
    this.getTopics()
  }
}
