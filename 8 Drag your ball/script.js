var ball = document.getElementById("ball");

ball.onmousedown = function(ev){
    var ev = ev || Event;
    // ev.clientX为鼠标点击球时鼠标到屏幕边的距离
    // this.offsetLeft为球边缘到屏幕边的距离
    // left为鼠标到球边的距离
    var top = ev.clientY - this.offsetTop;
    var left = ev.clientX - this.offsetLeft;
    // console.log(ev.clientX,ev.clientY);
    console.log(this.offsetLeft,this.offsetTop);
    document.onmousemove = function(ev){
        var ev = ev || Event;
        // console.log(ev.clientX,ev.clientY);

        ball.style.left = ev.clientX - left + 'px';
        ball.style.top = ev.clientY - top + 'px';

    }
    document.onmouseup = function(){
        document.onmousemove = null;
    }
    return false;
}