//封装selector api 为 $函数简化查询
function $(selector){
    return document.querySelectorAll(
        selector
    );
}
/*******导航li添加单击事件**********/
var navItems=$(".nav__item");
//为navitems中的每个元素绑定单击事件:
for(var i=1;i<navItems.length;i++){
    navItems[i].addEventListener("click",
        function(){
            this.className+=" active";
            this.lastElementChild.style.display="block"
        });
}
//为navitems中的每个元素绑定鼠标移入事件:
for(var i=1;i<navItems.length;i++){
    navItems[i].addEventListener("mouseenter",
        function(){
            this.style.backgroundColor="#F07818";
        });
}
//为navitems中的每个元素绑定鼠标移开单击事件:
for(var i=1;i<navItems.length;i++){
    navItems[i].addEventListener("mouseleave",
        function(){
            this.style.backgroundColor="#5D4B33";
            this.lastElementChild.style.display="none"
        });
}
/*******single 数量*******/
//找触发事件的元素
var btns=$(".qty>button");
//遍历所有button
for(var i= 0,len=btns.length;i<len;i++){
    btns[i].onclick=function(){
        var span=this.innerHTML=="-"?
            this.nextElementSibling:
            this.previousElementSibling;
        var n=parseInt(span.innerHTML); //获得span的内容，转为整数，保存在n中
        if(this.innerHTML=="+") //如果点的是+
            n++;//就n+1
        else if(n>1)//否则，如果n>1时
            n--;//才n-1
        span.innerHTML=n;//修改: 设置span的内容为n
    }
}
/*******single 相关产品*******/
var bs = $(".single-product b");
var bBackward = bs[0], bForward = bs[1];
var aList = $(".alist")[0];
//每个a的宽度
var moved = 0;//已经左移a的个数
var ACOUNT = aList.children.length;//获得a的个数
console.log(ACOUNT);
var AWIDTH =278;
var OFFSET=30;
//分别绑定事件
bForward.addEventListener("click",
    function () {
        if (this.className.indexOf("disabled") == -1) {
            bBackward.className="backward";
            moved++;
            aList.style.left=-AWIDTH * moved+OFFSET+"px";
            if(ACOUNT-moved==4){
                this.className += " disabled";
            }
        }
    }
);
bBackward.addEventListener("click",
    function () {
        if (this.className.indexOf("disabled") == -1) {
            bForward.className="forward";
            moved--;
            aList.style.left=-AWIDTH * moved+OFFSET+"px";
            if (moved == 0) {
                this.className += " disabled";
            }
        }
    }
);
/*******single 图片预览*******/
/*绑定事件:当点到哪个li时，大图显示这个li中的图像*/
var mImg = $("#mImg")[0];
var ulList= $("#icon_list")[0];
var largeDiv = $(".largeDiv")[0];//查找到id为largeDiv的div元素
//为ulList绑定鼠标进入事件
ulList.addEventListener("mouseover",function (e) {
        if (e.target.nodeName=="IMG") {
            //获得当前img的src：images/s1.png
            var src = e.target.src;
            //设置mImg的src为
            mImg.src = src;
        }
    }
);
/*鼠标移入和鼠标移出事件*/
var lImg = $("#lImg")[0];
//查找class为superMask的div
var smask = $(".superMask")[0];
var mask = $(".mask")[0];
//为smask绑定鼠标移入和鼠标移出（mouseout）事件
//移入是block，移出时none
/*鼠标移入的同时largeDiv显示。图片放大。*/
var largeDiv = $(".largeDiv")[0];//查找到id为largeDiv的div元素
smask.addEventListener("mouseover",
    function (e) {
        var I=e.target.parentNode.firstElementChild;
        var src= I.src;
        console.log(src);
        //遮罩面膜显示
        mask.style.display = "block";
        largeDiv.style.cssText="display:block";
        largeDiv.style.backgroundImage="url("+src+")";
    }
);
smask.addEventListener("mouseout",
    function () {
        mask.style.display = "none";
        //鼠标移出的时候，largeDiv也display：none；
        largeDiv.style.display="none";
    }
);
/*鼠标移动事件*/
//为smask添加鼠标移动事件
//分别保存supermask和mask的尺寸
var SMWSIZE = 360,
    SMHSIZE = 420,
    MSIZE = 200,
    WMAX = SMWSIZE-MSIZE,//mask最大left移动值
    HMAX = SMHSIZE-MSIZE;//mask最大top移动值
smask.addEventListener("mousemove",
    function (e) {
        //获得鼠标相对于当前元素的坐标
        var x= e.offsetX, y= e.offsetY;
        //计算mask的top和left
        var l = x-WMAX/2, t=y-HMAX/2;
        //做判断，让移动的top和left不要超过最大max
        if (l < 0) l = 0;
        else if (l > WMAX) l = WMAX;
        if (t < 0) t = 0;
        else if (t > HMAX) t = HMAX;
        //设置mask的top和left值
        mask.style.cssText =
            "display:block;top:" + t + "px;left:" + l + "px";
        /*让largeDiv中的图发生移动*/
        //修改largeDiv的背景的position：top，left位置
        //当mask右移了l时，largeDiv中的图左移了：-l*16/7
        largeDiv.style.backgroundPosition=-l*2.8+"px "+(-t*2.8)+"px";
    }
);

