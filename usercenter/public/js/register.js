//功能点1：监听“注册”按钮的单击事件
$('#bt-register').click(function(){
  var n = $('#uname').val();  //用户名
  var p = $('#upwd').val();   //密码
  //将客户端数据异步提交给服务器
  $.ajax({
    type: 'POST',
    url: '/user/register',
    data: {uname: n,  upwd: p},
    success: function(result){
      console.log('成功获取到异步返回的数据')
      console.log(result);
      //{"code":1,"msg":"注册成功","uid":31}
      if(result.code===1){
        alert('注册成功！3s后自动跳转到登录页面...')
        setTimeout(function(){
          location.href='login.html';
        }, 3000);
      }else {
        alert('注册失败！请稍候重试！')
      }
    }
  });
});