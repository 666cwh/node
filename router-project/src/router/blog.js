const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
} = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handBlogReact = (req, res) => {
  //   参数
  const id = req.query.id
  //获取请求方式
  const method = req.method
  //获取请求地址
  const url = req.url
  //获取路由
  const path = url.split('?')[0]

  // 博客列表接口
  if (method === 'GET' && path === '/api/blog/list') {
    //参数
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    //获取数据
    // const listData = getList(author, keyword)
    // return new SuccessModel(listData)
    const result = getList(author, keyword)
    console.log(result)
    return result.then((listData) => {
      return new SuccessModel(listData)
    })
  }

  //   博客详情接口
  if (method === 'GET' && path === '/api/blog/detail') {
    //  const data = getDetail(id)
    // //获取数据
    // return new SuccessModel(data)
    const result = getDetail(id)
    return result.then((data) => {
      return new SuccessModel(data)
    })
  }

  //   新建博客接口
  if (method === 'POST' && path === '/api/blog/new') {
    // const data = newBlog(req.body)
    // return new SuccessModel(data)
    req.body.author = 'zhangsan'
    const result = newBlog(req.body)
    return result.then((data) => {
      return new SuccessModel(data)
    })
  }

  //   更新博客接口
  if (method === 'POST' && path === '/api/blog/update') {
    const result = updateBlog(id, req.body)
    if (result) {
      return new SuccessModel()
    } else {
      return new ErrorModel('更新失败')
    }
  }

  //   删除博客接口
  if (method === 'POST' && path === '/api/blog/del') {
    const result = delBlog(id)
    if (result) {
      return new SuccessModel()
    } else {
      return new ErrorModel('删除失败')
    }
  }
}

module.exports = handBlogReact
