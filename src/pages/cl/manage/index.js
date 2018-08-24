import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import template from './manage.vue'

@Component({
  name: 'manage',
  mixins: [template]
})

export default class Manage extends Vue {
  data = '主管页面的展示'
}
