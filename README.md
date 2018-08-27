# ower-cli-demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

1.注意⚠️：此处是使用了oop 风格，对代码进行了拆分，当你使用index.js作为入口文件的时候，要引入
import { Component } from 'vue-property-decorator'

2.同时，路由也要注意变更以index作为入口文件
安装transform-decorators-legacy
并在.babelrc中添加 "plugins": ["transform-decorators-legacy"]

3.在路由处使用了require，并且引入了import meta from 'vue-meta'
Vue.use(meta, {
  keyName: 'metaInfo'
})
可以随时更新title