import Vue from 'src/pages/base'
import { Component } from 'vue-property-decorator'
import template from './myHeader.vue'

@Component({
  name: 'myHeader',
  mixins: [template],
  components: {}
})
export default class MyHeader extends Vue {
  activeIndex ='1'
  activeIndex2 = '1'

  handleSelect(key, keyPath){
    console.log(key, keyPath)
  }

  runGoTo(key) {
    this.goTo(key)
  }
}
