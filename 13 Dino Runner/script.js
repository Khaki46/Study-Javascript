document.addEventListener('DOMContentLoaded',() =>{

const dino = document.getElementById('dino');

function jump() {
    dino.classList.add("jump");
    setTimeout(() => {
        dino.classList.remove("jump");
    }, 600);
    }

function control(e) {
    if(e.keyCode===32){
        // jump code
        jump();
    }
}
document.addEventListener('keydown',control);

})
