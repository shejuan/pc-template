import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import template from './helloWorld.vue'
import NewHeader from '../../components/myHeader'
import NewFooter from '../../components/myFooter'
import NewMain from '../../components/myMain'
import NewAside from '../../components/myAside'

@Component({
  name: 'demo',
  mixins: [template],
  components: {NewHeader, NewFooter, NewMain, NewAside}
})
export default class Demo extends Vue {
  msg = 'Welcome to Your Vue.js App'
  active = 0

  next () {
    if (this.active++ > 2) this.active = 0
  }
}
