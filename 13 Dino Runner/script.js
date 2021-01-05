// document.addEventListener('DOMContentLoaded',() =>{
 
const dino = document.getElementById('dino');
const dinoImg = dino.querySelector('img');
const cactus = document.getElementById('cactus');
const cactusImg = cactus.querySelector('img');

let dinoTF=true;
function jump() {

    if(dino.classList!='jump'){
        dino.classList.add("jump");
        setTimeout(() => {
            dino.classList.remove("jump");
        }, 600);
    }
}
function down() {
        dinoTF=false;
        document.addEventListener('keyup',control1);
        function control1(){
        dinoTF=true;
        dinoImg.setAttribute('src','img/dino.png')


    }
}
function control(e) {
    if(e.keyCode===32 || e.keyCode===38){
        // jump code

        jump();
    }else if(e.keyCode===40){
        down();

    }

}


let dinoAlive = setInterval(() => {
    // 获得恐龙高度距离
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    // 获得仙人掌宽度距离
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if(cactusLeft<45 && cactusLeft>0 && dinoTop>=100){
        // console.log("good");
        alert('you die!');
    }
    if(dinoTop<140){
        dinoImg.setAttribute('src','img/dino.png');
    }
}, 10);
document.addEventListener('keydown',control);


function dinoGoFun1(){
    if(dinoTF){
        dinoImg.setAttribute('src','img/dinogo1.png')
    }else{
        dinoImg.setAttribute('src','img/dinoDown1.png')
    }
}
function dinoGoFun2(){
    if(dinoTF){
        dinoImg.setAttribute('src','img/dinogo2.png')
    }else{
        dinoImg.setAttribute('src','img/dinoDown2.png')
    }
}

    let dinoGo1=setInterval(dinoGoFun1, 100);
    let dinoGo2=setInterval(dinoGoFun2, 200);

setInterval(() => {
    let num=Math.floor(Math.random()*10); 
    console.log(num);
    if(num<=3){
        cactusImg.setAttribute('src','img/cactus2.png')
    }else if(3<num<=6){
        cactusImg.setAttribute('src','img/cactus3.png')
    }else if(6<num<=10){

        cactusImg.setAttribute('src','img/cactus4.png')

    }
}, 2000);
// })
