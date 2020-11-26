var sideNav = document.getElementById("sideNav");
var touchSpan = sideNav.getElementsByTagName("span");

var i =0;
touchSpan[0].onclick = function(){
    i = i>=1 ? 0:1;
    console.log(i);
    sideNav.style.left=-180 * i +'px';
    setTimeout(() => {
        touchSpan[0].innerHTML = i>=1 ? ">":"<";        
    }, 600);

}

