import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import template from './myAside.vue'

@Component({
  name: 'myAside',
  mixins: [template],
  components: {}
})
export default class MyAside extends Vue {
}
