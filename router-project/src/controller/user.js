// 登录
const loginCheck = (username, password) => {
  if (username === '张三' && password === '123') {
    return true
  } else {
    return false
  }
}

module.exports = {
    loginCheck,
}
