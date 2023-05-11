const { loginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')
//登陆接口
const handleUserRouter = (req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]

  if (method === 'POST' && path === '/api/user/login') {
    const { username, password } = req.body
    const result = loginCheck(username, password)
    if (result) {
      return new SuccessModel()
    } else {
      return new ErrorModel('登录失败')
    }
  }
}

module.exports = handleUserRouter
