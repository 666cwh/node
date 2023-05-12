const mysql = require('mysql')

const { NYSQL_CONF } = require('../conf/db')
//连接mysql数据库
const con = mysql.createConnection(NYSQL_CONF)

//开始连接
con.connect()

// 统一执行sql的函数
function exec (sql) {
    const promise = new promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if (err) {
                reject(err)
                return
            }
            resolve(result)
        })
    })
    return promise
}

module.exports = {
    exec
}