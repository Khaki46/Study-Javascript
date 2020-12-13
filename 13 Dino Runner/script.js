document.addEventListener('DOMContentLoaded',() =>{

const dino = document.querySelector('.dino');

function control(e) {
    if(e.keyCode===32){
        // jump code
        jump();
    }
}
document.addEventListener('keyup',control);

function jump() {
    let position = 0;
    let timerUp=setInterval(() => {
        position+=5;
        dino.style.bottom = position + 'px';
            if(position===150){
                clearInterval(timerUp);
                let timerDown=setInterval(() => {
                    position-=5;
                    dino.style.bottom = position + 'px';
                    if(position===0){
                        clearInterval(timerDown);
                    }
                }, 20);
            }
        }, 20);
    }
})
