import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import template from './manage.vue'

@Component({
  name: 'manage',
  mixins: [template]
})

export default class Manage extends Vue {
  data = ''
  created () {
    this.data = this.$store.getters.getName
    console.log(this.data, 'this.data的值')
  }
}
