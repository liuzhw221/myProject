//购物车计算功能：
var table= document.getElementById("cart");
var btns= table.getElementsByTagName("button");
console.log(btns);
//遍历所有button
for(var i= 0,len=btns.length;i<len;i++){
    //为所有button绑定单击事件处理函数
    btns[i].onclick=function(){
        //this当前单击的按钮
        //找要操作的元素: 按钮旁边的span
        var span=this.innerHTML=="-"?
            this.nextElementSibling:
            this.previousElementSibling;
        var n=parseInt(span.innerHTML); //获得span的内容，转为整数，保存在n中
        if(this.innerHTML=="+") //如果点的是+
            n++;//就n+1
        else if(n>1)//否则，如果n>1时
            n--;//才n-1
        span.innerHTML=n;//修改: 设置span的内容为n

        /* 计算小计：单价*数量 */
        //查找当前按钮父元素的td的前一个兄弟的内容，转为浮点数，保持在price中
        var price=parseInt(this.parentNode.previousElementSibling.innerHTML);
        var subtotal=price*n;
        this.parentNode.nextElementSibling.innerHTML=("￥"+subtotal.toFixed(2));

        /*计算总价*/
        //查找id为cart_footer
        var tds=table.querySelectorAll("tbody td:nth-child(5)");
        //遍历tds中每个td，同时定义total为0
        for(var i= 0,total=0;i<tds.length;i++){
            //将当前td的内容去掉￥，转为浮点数，累加到total上
            total+=parseFloat(tds[i].innerHTML.slice(1))
        }//遍历结束
        //设置tfoot中最后一个td的内容为￥+total 按2位小数四舍五入
        var sumT= document.getElementById("cart_footer");
        sumT.querySelector(
            "div span"
        ).innerHTML= "￥"+total.toFixed(2);
    }
}
