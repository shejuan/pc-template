<template>
  <div class="hello">
    <el-container class="hello-first">
      <new-aside width="200px">Aside</new-aside>
      <el-container class="hello-two">
        <new-header></new-header>
        <new-main></new-main>
        <new-footer></new-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import newHeader from './header/index.vue'
import newFooter from './footer/index.vue'
import newMain from './main/index.vue'
import newAside from './aside/index.vue'
export default {
  name: 'HelloWorld',
  components: {newHeader, newFooter, newMain, newAside},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

.hello-first {
  flex-direction: row;
}
.hello-two {
  flex-direction: column;
}
</style>
