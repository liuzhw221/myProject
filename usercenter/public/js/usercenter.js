//功能点1：页面加载完，异步请求页头和页尾
$('#header').load('header.html', function(){
  //页头已经异步加载完成，挂载到DOM树
  $('#welcome').html('欢迎回来：'+sessionStorage['loginUname']);
});
$('#footer').load('footer.html');

//功能点2：为附加导航中的超链接添加单击事件监听——事件代理
$('.affix').on('click', 'li a', function(e){
  e.preventDefault();
  //修改A的父元素LI的.active的位置
  $(this).parent().addClass('active').siblings('.active').removeClass('active');

  //根据A的HREF找到对应的右侧DIV，修改.active的位置
  var id = $(this).attr('href');
  $(id).addClass('active').siblings('.active').removeClass('active');
})

//功能点3：异步请求“我的订单”数据
$.ajax({
  type:'GET',
  url: '/uc/myorder',
  data: {uid: sessionStorage['loginUid']},
  success: function(list){
    console.log('成功获取到我的订单列表')
    console.log(list)
  }
});







