import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import template from './manage.vue'
import { Store as DemoStore } from '@/store/modules/demo'

@Component({
  name: 'manage',
  mixins: [template]
})

export default class Manage extends Vue {
  data = ''
  
  // 获取store的数据
  @DemoStore.state('name') name

  created () {
    this.data = this.name
    console.log(this.data, 'this.data的值')
  }
}
