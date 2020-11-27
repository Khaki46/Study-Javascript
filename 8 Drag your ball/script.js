var ball = document.getElementById("ball");

ball.onmousedown = function(ev){
    var ev = ev || Event;

    var top = ev.clientY - this.offsetTop;
    var left = ev.clientX - this.offsetLeft;

    document.onmousemove = function(ev){
        var ev = ev || Event;
        console.log(ev.clientX,ev.clientY);

        ball.style.left = ev.clientX - left + 'px';
        ball.style.top = ev.clientY - top + 'px';

    }
    document.onmouseup = function(){
        document.onmousemove = null;
    }
    return false;
}