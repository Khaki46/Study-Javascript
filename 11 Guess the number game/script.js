let num = Math.round(Math.random()*100);
console.log("数字："+num);
let result = document.getElementById("result");
let btn = document.getElementById("btn");
let startGameBtn = document.getElementById("startGameBtn");
let prompt=document.getElementsByTagName("span");
let promptNum = document.getElementById("prompt");
let banNum = 10;
let arrNum = new Array();

btn.addEventListener("click",function(){
    let enterNum = document.getElementById("enterNum").value;
    banNum-=1;
    if(num==enterNum){
        result.innerHTML="You win!";
        result.style.backgroundColor="blue";
        promptFun(enterNum);
        banNum=0;
    }else{
        result.innerHTML="You wrong!"
        result.style.backgroundColor="red";
        arrNum.push(enterNum);
        prompt[1].innerHTML=arrNum;
        promptFun(enterNum);

    }
    console.log(enterNum);
});
    function promptFun(enterNum){
        if(num==enterNum){
            promptNum.innerHTML = "";
        }else{
            promptNum.innerHTML = enterNum>num ? "猜高了":"猜低了"
            prompt[0].innerHTML=banNum;
        }
    }

btn.onclick = function(){
    document.getElementById("enterNum").value=null;
    if(banNum<=0){
        let enterNum = document.getElementById("enterNum").disabled=true;
        btn.disabled=true;
        startGameBtn.style.display="inline";
    }
}
startGameBtn.addEventListener("click",function(){
    banNum=10;
    let enterNum = document.getElementById("enterNum").disabled=false;
    btn.disabled=false;
    startGameBtn.style.display="none";
    arrNum.splice(0,arrNum.length);
    prompt[0].innerHTML="";
    prompt[1].innerHTML="";
    result.innerHTML="";
    result.style.backgroundColor="white";
    promptNum.innerHTML = "";
    num = Math.round(Math.random()*100);
    console.log("数字："+num);
})