var box = document.getElementById("box");

box.onmousedown = function(ev){
    var ev = ev || event;

    var left = ev.clientX;
    var top = ev.clientY;

    var width = this.offsetWidth;
    var height = this.offsetHeight;

    console.log(top,left);
    document.onmousemove = function(ev){
        var ev = ev || event;
        box.style.width = ev.clientX - left + width +'px';
        box.style.height = ev.clientY - top + height + 'px';
        
    };
    box.onmouseup = function(){
        document.onmouseup = document.onmousemove = null;
    };
};