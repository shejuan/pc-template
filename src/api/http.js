import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$http = axios

const host = 'https://cnodejs.org/api/'

// build http header
function buildHeader (option) {
  let headers = {
    // 'X-Application-Key': config.api.key,
    // 'X-Request-Sign': '',
  }
  if (option) {
    headers = { ...headers, ...option }
  }
  return headers
}

export let ax = axios.create({
  baseURL: host,
  headers: buildHeader(),
  timeout: 10000,
  responseType: 'json',
  transformRequest: [function (data) {
    if (data instanceof FormData) return data
    console.log('要序列化的，因为成功的返回了数据了')
    // return stringify(data)
  }],
  transformResponse: [function (data) {
    console.log('请求失败的-----')
    // return transformResponse(data)
  }]

})

// http get method
export function get (url, data) {
  let newData = '?data=' + JSON.stringify(data)
  // let newData = '?data=' + JSON.stringify(processData(data)) // 这步要检测token 是否过期
  return ax.get(decodeURI(url + newData)).then((res) => {
    console.log('请求成功返回来的参数', res.data)
    return res.data
  }).catch((err) => {
    // handleError(err) 请求失败的处理方式
    console.log('请求失败的处理方式')
    throw err
  })
}
