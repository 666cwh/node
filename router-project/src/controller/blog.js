//博客列表接口
const getList = (author, keyword) => {
  //返回数据
  return [
    {
      id: 1,
      title: '标题',
      content: '内容',
      createTime: '1234567890',
      author: 'zhangsan',
    },
    {
      id: 2,
      title: '标题2',
      content: '内容2',
      createTime: '12345678902',
      author: 'zhangsan2',
    },
  ]
}
const getDetail = (id) => {
  //返回数据
  return [
    {
      id: 1,
      title: '标题',
      content: '内容',
      createTime: '1234567890',
      author: 'zhangsan',
    },
  ]
}

//新建博客接口
const newBlog = (blogData = {}) => {
  //返回数据
  return {
    id: '1',
  }
}
// 更新博客
const updateBlog = (id, blogData = {}) => {
  return true
}

// 删除博客
const delBlog = (id) => {
    return true
  }
  
module.exports = {
  getList,
  getDetail,
  newBlog,
    updateBlog,
    delBlog
}
