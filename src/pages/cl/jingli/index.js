import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import template from './jingli.vue'
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
  }

  async getTopics () {
    console.log('1', this.api)
    try {
      let resultData = await this.api.demo.sendInfo({ page: 1, tab: 'ask' })
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
