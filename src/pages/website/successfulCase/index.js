import Vue from 'src/pages/base'
import { Component, Watch } from 'vue-property-decorator'
import template from './successfulCase.vue'

@Component({
    name: 'successfulCase',
    mixins: [template],
    components: {
    }
})
export default class SuccessfulCase extends Vue {
    
}
