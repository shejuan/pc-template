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
    <el-steps :active="active" finish-status="success">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>

    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./home.scss" lang="scss" scoped></style>
