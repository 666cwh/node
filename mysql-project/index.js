const mysql = require('mysql')

//创建连接对象
//连接mysql数据库
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '521cwh...',
    port: '3306',
    database:'myblog'
})

//开始连接
con.connect()

//执行sql语句 查询
const sql = "insert into users(username,`password`,reainame) values('wangwu','123','王五')"

con.query(sql, (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
})

//关闭连接
con.end()