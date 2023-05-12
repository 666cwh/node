// const serveHandle = (req, res) => {
//   //设置返回格式
//   res.setHeader('Content-type', 'application/json')
//   //定义返回数据
//     const resData = {
//       name: '张三',
//       site: 'imooc',
//       process: process.env.NODE_ENV,
//     }
//   //返回数据
//     res.end(JSON.stringify(resData))

// }
// module.exports = serveHandle

const handBlogReact = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const querystring = require('querystring')

const getPostdata = (req) => {
  const promise = new Promise((resolve, reject) => {
    // 请求方式不是post时
    if (req.method !== 'POST') {
      resolve({})
      return
    }
    // 请求头不是application/json时
    if (req.headers['content-type'] !== 'application/json') {
      resolve({})
      return
    }

    let postData = ''
    //处理数据格式
    req.on('data', (chunk) => {
      postData += chunk.toString()
    })

    // 返回数据
    req.on('end', () => {
      if (!postData) {
        resolve({})
        return
      }
      resolve(JSON.parse(postData))
    })
  })
  return promise
}

const serveHandle = (req, res) => {
  //设置返回格式
  res.setHeader('Content-type', 'application/json')
  const url = req.url
  //解析参数
  req.query = querystring.parse(url.split('?')[1])

  //添加请求参数
  getPostdata(req).then((postData) => {
    req.body = postData
    //获取登陆接口数据
    const blogData = handBlogReact(req, res)
    if (blogData) {
      res.end(JSON.stringify(blogData))
      return
    }

    //获取博客数据
    const userData = handleUserRouter(req, res)

    if (userData) {
      res.end(JSON.stringify(userData))
      return
    }

    //未命中返回404
    res.writeHead(404, { 'Content-type': 'text/plain' })
    res.write('404 Not Found\n')
    res.end()
  })
}
module.exports = serveHandle
