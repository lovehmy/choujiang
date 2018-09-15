/// <reference path="jquery-1.10.2.min.js" />
var ranNum = 0;//存放随机数
var i = 0;
$(function () {//页面加载完成之后
    //找到按钮 给按钮一个点击事件
    $("#dshow").click(function () {
        i++;
        if (i >= 4) {
            alert("只有3次机会");
            return;
        }
        //alert("a");
        //随机数  Math.random();//0-1 0.99  0.23 0.25
        ranNum =  Math.random()*360;
        $(this).rotate({//让其旋转
            duration: 3000,//旋转一圈所需要的时间 毫秒
            angle: 0,//起点
            animateTo: ranNum + 720,//终止角度 随机值 720就是让其多转两圈
            callback: function () {
                aRun();
            }
        });
    });
});

function aRun(){
    if (0 < ranNum && ranNum <= 22.5) {
        alert("谢谢参与");
        //break;//跳出当前循环体
        //continue;//跳出当前条件的判断
        return; //两种：1、跳出整个方法体 2.返回值
    } else if (22.5 < ranNum && ranNum <= 67.5) {
        alert("恭喜你中了5元代金券");
        return; 
    } else if (67.5 < ranNum && ranNum <= 112.5) {
        alert("恭喜你中了1元代金券");
        return;
    }else if (112.5 < ranNum && ranNum <= 157.5) {
        alert("恭喜你中了10元代金券");
        return;
    } else if (157.5 < ranNum && ranNum <= 202.5) {
        alert("谢谢参与");
        return;
    } else if (202.5 < ranNum && ranNum <= 247.5) {
        alert("恭喜你中了20元代金券");
        return;
    } else if (247.5 < ranNum && ranNum <= 292.5) {
        alert("恭喜你中了50元代金券");
        return;
    } else if (292.5 < ranNum && ranNum <= 337.5) {
        alert("恭喜你中了30元代金券");
        return;
    } else {
        alert("谢谢参与");
        return;
    }
     
}
