import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import template from './myAside.vue'

@Component({
  name: 'myAside',
  mixins: [template],
  components: {}
})
export default class MyAside extends Vue {
  data = [
    {
      title: '首页',
      list: [
        {
          oneTitle: '个人资料',
          path:'user/message'
        },
        {
          oneTitle: '工作经历',
          path:'user/working'
        }
      ]
    },
    {
      title: '材料交易部门',
      list: [
        {
          oneTitle: '主管',
          path: '/cl/manage'
        },
        {
          oneTitle: '经理',
          path: '/cl/jingli'
        }
      ]
    },
    {
      title: 'sass',
      list: [
        {
          oneTitle: '产品部门'
        },
        {
          oneTitle: '研发部门'
        }
      ]
    },
    {
      title: '领筑电商',
      list: [
        {
          oneTitle: '后台'
        },
        {
          oneTitle: '前端'
        }
      ]
    },
    {
      title: '工程云',
      list: [
        {
          oneTitle: 'UI'
        },
        {
          oneTitle: '测试'
        }
      ]
    }
  ]
}
