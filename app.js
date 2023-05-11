const http = require('http')
const querystring = require('querystring')

// //处理get请求
// // http.createServer创建一个服务器
// const serve = http.createServer((req, res) => {
//   console.log(req.method) //请求方式
//   const url = req.url
//   console.log(url) //请求地址
//   req.query = querystring.parse(url.split('?')[1])
//   console.log(req.query) //请求参数
//   res.end(JSON.stringify(req.query))
// })
// serve.listen(8000)
// console.log('ok')

// //post请求
// const serve = http.createServer((req, res) => {
//   //请求方式
//   if (req.method === 'POST') {
//     //   请求头
//     console.log(req.headers['content-type'])
//     let postData = ''
//     req.on('data', (chunk) => {
//       postData += chunk.toString()
//     })
//     req.on('end', () => {
//       console.log(postData)
//       res.end('hello world')
//     })
//   }
// })
// serve.listen(8000)
// console.log('ok')

// 综合请求示例 get+post请求
const serve = http.createServer((req, res) => {
  //请求方式
  const method = req.method
  //请求地址
  const url = req.url
  //请求路径
  const path = url.split('?')[0]
  //请求参数
  const query = querystring.parse(url.split('?')[1])

  //设置返回格式
  res.setHeader('Content-type', 'application/json')

  //返回的数据
  const resData = {
    method,
    url,
    path,
    query,
  }
  //返回
  if (method === 'GET') {
    res.end(JSON.stringify(resData))
  }
  if (method === 'POST') {
    let postData = ''
      req.on('data', (chunk) => {
        console.log(chunk.toString())
      postData += chunk.toString()
    })
    req.on('end', () => {
      resData.postData = postData
      res.end(JSON.stringify(resData))
    })
  }
})
serve.listen(8000)
