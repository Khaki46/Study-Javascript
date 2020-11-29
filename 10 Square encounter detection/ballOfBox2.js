var box2 = document.getElementById("box2");

var moveBall = document.getElementById("moveBall");
var fixedBall = box2.getElementsByTagName("div");

moveBall.onmousedown = function(){
    var ev = ev || event;

    var leftOfMB = ev.clientX-this.offsetLeft;
    var topOfMB = ev.clientY-this.offsetTop;
    document.onmousemove = function(){
        var ev = ev || event;

        moveBall.style.left = ev.clientX - leftOfMB + 'px';
        moveBall.style.top = ev.clientY - topOfMB + 'px';

        for(var i =1;i<fixedBall.length;i++){
            var theFixedBallColor=fixedBall[i];
            if(ball(moveBall,theFixedBallColor)){
                theFixedBallColor.style.backgroundColor="red";
            }
        }

    }
    document.onmouseup = function(){
        document.onmouseup = document.onmousemove=null;
    }
}
    function ball(theMoveBall,theFixedBall){
        var moveBallLeft = theMoveBall.offsetLeft;
        var moveBallTop = theMoveBall.offsetTop;
        var moveBallRight = moveBallLeft+theMoveBall.offsetWidth;
        var moveBallBottom = moveBallTop+theMoveBall.offsetHeight;

        var fixedBallLeft = theFixedBall.offsetLeft;
        var fixedBallTop = theFixedBall.offsetTop;
        var fixedBallRight = fixedBallLeft+theFixedBall.offsetWidth;
        var fixedBallBottom = fixedBallTop+theFixedBall.offsetHeight;

        if(moveBallBottom>fixedBallTop && moveBallRight>fixedBallLeft && moveBallLeft<fixedBallRight && moveBallTop<fixedBallBottom){
            return true;
        }else{
            return false;
        }
    }