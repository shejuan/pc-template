<template>
  <div>
    <div>{{data}}</div>
    <input type="button" value="点击我更改状态机的值" @click="clickMe()"/>

    <div>调用了get方法，请求了后台接口：{{resultData}}</div>
  </div>
</template>

<style src="./jingli.scss" lang="scss" scoped></style>
