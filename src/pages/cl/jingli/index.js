import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import template from './jingli.vue'

@Component({
  name: 'jingli',
  mixin: [template]
})

export default class Jlingli extends Vue {
  data = '经理页面的展示'
}
