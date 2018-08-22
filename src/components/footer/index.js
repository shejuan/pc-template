import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import template from './footer.vue'

@Component({
  name: 'footer',
  mixins: [template],
  components: {}
})
export default class Footer extends Vue {
}
