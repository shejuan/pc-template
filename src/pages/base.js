import Vue from 'vue'

export default class Base extends Vue {
    // 页面跳转
    goTo(options) {
        this.$router.push(options)
    }
}
