import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import template from './header.vue'

@Component({
  name: 'header',
  mixins: [template],
  components: {}
})
export default class Header extends Vue {
}
