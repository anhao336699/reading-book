const mysql = require('mysql')

// createPool 创建连接池

// 在开发web应用程序时，连接池是一个很重要的概念。建立一个数据库连接所消耗的性能成本是很高的。
// 在服务器应用程序中，如果为每一个接收到的客户端请求都建立一个或多个数据库连接，将严重降低应用程序性能。

// ?因此在服务器应用程序中通常需要为多个数据库连接创建并维护一个连接池，当连接不再需要时，
// 这些连接可以缓存在连接池中，当接收到下一个客户端请求时，从连接池中取出连接并重新利用，而不需要再重新建立连接。
const db = mysql.createPool({
    host: '10.0.224.10:3306', //数据库ip地址
    user: 'readingbook', //数据库账号
    password: 'taocong123', //数据库密码
    database: 'nodejs_demo' //链接的数据库
})

module.exports = db