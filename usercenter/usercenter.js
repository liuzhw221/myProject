/***
 * 用户中心相关功能模块
 * 向外提供
 *  myOrders()
 *  buyStat()
 *  lotteryStat()
 *  lotterySave()
 *  4个请求处理函数
 */
const pool = require('./dbpool');

module.exports = {
  /**
   * 从请求GET消息中读取客户端提交的uid，
   * 查询出该用户所有的订单信息，以JSON格式返回：
   * [{},{},...{}]
   * @param req
   * @param res
   */
  myOrders: (req, res)=>{
    //接收客户端GET请求中在URL后追加的请求数据
    //console.log(req);
    var uid = req.query.uid;
    //从连接池中获取连接对象，执行SELECT操作

  },
  buyStat: (req, res)=>{

  }
}