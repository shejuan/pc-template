import { get, post } from './http'

export default {
  // 知乎Cnodejs.org:接口 get /topics 主题首页
  sendInfo (data) {
    return get('/topics', data)
  },

  postInfo (data) {
    return post('/topics', data)
  }
}
