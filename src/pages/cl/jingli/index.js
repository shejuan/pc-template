import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import template from './jingli.vue'
import api from '@/api/index'
import { Store as DemoStore } from '@/store/modules/demo'
// import { watch } from 'fs'

@Component({
  name: 'jingli',
  mixins: [template]
})

export default class Jingli extends Vue {
  data = ''
  resultData = null

  // 触发store的方法
  @DemoStore.action('doDemo') doDemo

  // 获取store的数据
  @DemoStore.state('name') name    // 专业系统类型

  clickMe () {
    this.doDemo({paramer: '更改store 中的name 的值'})

    this.data = this.name

    console.log(this.data)
    // this.postTopics()
  }

  async getTopics () {
    try {
      this.resultData = await api.demo.sendInfo({ page: 1, tab: 'aqqqsk' })
      // console.log(this.resultData, 'resultData-----')
      // throw new Error('出错了');
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
    } catch (error) {
      console.log(error)
    }
  }

  created () {
    this.data = this.name
    this.getTopics()
  }
}
