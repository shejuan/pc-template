// import Vue from 'vue'
import Vue from 'src/pages/base'
import { Component, Watch } from 'vue-property-decorator'
import template from './shouye.vue'

@Component({
    name: 'shouye',
    mixins: [template],
    components: {
    }
})
export default class Shouye extends Vue {
    
}
