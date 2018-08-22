import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import template from './main.vue'

@Component({
  name: 'main',
  mixins: [template],
  components: {}
})
export default class Main extends Vue {
}
