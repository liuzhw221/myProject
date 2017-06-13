/**
 *整个项目的主模块文件
 * 负责创建Web服务器对象，监听指定端口
 * 并向客户端提供静态资源+动态资源服务
 */
const http = require('http');
const express = require('express');
const user = require('./user');
const uc = require('./usercenter');

var app = express();//请求处理函数
http.createServer(app).listen(8080);

//向客户端提供静态资源的响应
app.use(express.static('public'));

//向客户端提供动态资源的响应
app.post('/user/register',user.register);
app.post('/user/login',user.login);
app.get('/uc/myorder',uc.myOrders);







