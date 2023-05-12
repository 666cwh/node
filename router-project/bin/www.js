const http = require('http')
//端口
const PORT = 8000

const serveHandle = require('../app')

//创建服务器
const serve = http.createServer(serveHandle)
//监听接口
serve.listen(PORT)