const { exec } = require('../db/mysql')
//博客列表接口
const getList = (author, keyword) => {
  //返回数据
  let sql = `select * from blogs where 1=1 `
  if (author) {
    sql += `and author='${author}'`
  }
  if (keyword) {
    sql += `and title like '${keyword}' `
  }
  sql += `order by createtime desc;`
  return exec(sql)
  //   return [
  //     {
  //       id: 1,
  //       title: '标题',
  //       content: '内容',
  //       createTime: '1234567890',
  //       author: 'zhangsan',
  //     },
  //     {
  //       id: 2,
  //       title: '标题2',
  //       content: '内容2',
  //       createTime: '12345678902',
  //       author: 'zhangsan2',
  //     },
  //   ]
}
const getDetail = (id) => {
  //返回数据
  //   return [
  //     {
  //       id: 1,
  //       title: '标题',
  //       content: '内容',
  //       createTime: '1234567890',
  //       author: 'zhangsan',
  //     },
  //   ]
  const sql = `select * from blogs where id='${id}'`
  return exec(sql).then((rows) => {
    return rows[0]
  })
}

//新建博客接口
const newBlog = (blogData = {}) => {
  //返回数据
  //   return {
  //     id: '1',
  //   }
  const { title, content, author } = blogData
  const createTime = Date.now()
  const sql = `insert into blogs(title, content, author,createTime) values(${title}, ${content}, ${author},${createTime})`
  return exec(sql).then((insertData) => {
    console.log(insertData)
    return insertData.insertId
  })
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
  delBlog,
}
