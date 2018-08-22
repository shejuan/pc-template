import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import template from './myHeader.vue'

@Component({
  name: 'myHeader',
  mixins: [template],
  components: {}
})
export default class MyHeader extends Vue {
}
