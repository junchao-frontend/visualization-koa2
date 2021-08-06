// 创建koa对象
const Koa = require('koa')
const app = new Koa()

//编写响应函数（中间件）
// 绑定第一层中间件
const respDurationMiddleware= require('./middleware/koa_response_duration')
app.use(respDurationMiddleware)
//第二层响应体
const respHeaderMiddleware = require('./middleware/koa_response_header')
app.use(respHeaderMiddleware)
//第三层中间件
const respDataMiddleware = require('./middleware/koa_response_data')
app.use(respDataMiddleware)
// 绑定端口号
app.listen(8888)