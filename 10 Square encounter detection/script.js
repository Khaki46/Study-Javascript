var cube1 = document.getElementById("cube1");
var cube2 = document.getElementById("cube2");

cube1.onmousedown = function(ev){
    var ev = ev || event;

    var cube1OfLeft = ev.clientX - this.offsetLeft;
    var cube1OfTop = ev.clientY - this.offsetTop;

    document.onmousemove = function(ev){
        var ev = ev || event;

        cube1.style.left = ev.clientX - cube1OfLeft + 'px';
        cube1.style.top = ev.clientY - cube1OfTop + 'px';

        var cube1Top = cube1.offsetTop;
        var cube1Bottom = cube1Top+cube1.offsetHeight;
        var cube1Left = cube1.offsetLeft;
        var cube1Right = cube1Left+cube1.offsetWidth;

        var cube2Top = cube2.offsetTop;
        var cube2Bottom = cube2Top+cube2.offsetHeight;
        var cube2Left = cube2.offsetLeft;
        var cube2Right = cube2Left+cube2.offsetWidth;

        if(cube1Bottom>cube2Top && cube1Right>cube2Left && cube1Top<cube2Bottom && cube1Left<cube2Right){
            cube2.style.backgroundColor="beige";
        }else{
            cube2.style.backgroundColor="aquamarine"
        }
    }
    document.onmouseup = function(){
        document.onmouseup=document.onmousemove=null;
    }
}