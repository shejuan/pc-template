import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import template from './helloWorld.vue'
import NewHeader from '../../components/header'
import NewFooter from '../../components/footer'
import NewMain from '../../components/main'
import NewAside from '../../components/aside'

@Component({
  name: 'demo',
  mixins: [template],
  components: {NewHeader, NewFooter, NewMain, NewAside}
})
export default class Demo extends Vue {
  msg = 'Welcome to Your Vue.js App'
  active = 0

  // next () {
  //   if (this.active++ > 2) this.active = 0
  // }
}
