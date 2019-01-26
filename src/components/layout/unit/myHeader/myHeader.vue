<template>
  <div class="myHeader">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1" @click="runGoTo('shouye')">首页</el-menu-item>
      <!-- <el-submenu index="2">
        <template slot="title">解决方案</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu> -->
      <el-menu-item index="3" @click="runGoTo('smartDevice')">智能装置</el-menu-item>
      <el-menu-item index="4" @click="runGoTo('cloudPlatform')">云平台</el-menu-item>
      <el-menu-item index="5" @click="runGoTo('aboutUs')">关于科中</el-menu-item>
      <el-menu-item index="6" @click="runGoTo('successfulCase')">成功案例</el-menu-item>
      <el-menu-item index="7" @click="runGoTo('mall')">商城</el-menu-item>
      <el-menu-item index="8" @click="runGoTo('contact')">联系我们</el-menu-item>
    </el-menu>
  </div>
</template>
<style src="./myHeader.scss" lang="scss" scoped></style>
