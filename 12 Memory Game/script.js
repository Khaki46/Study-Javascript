const imgArr=[
    {
        name:'1',
        img:'img/1.png'
    },
    {
        name:'2',
        img:'img/2.png'
    },
    {
        name:'3',
        img:'img/3.png'
    },
    {
        name:'4',
        img:'img/4.png'
    },
    {
        name:'5',
        img:'img/5.png'
    },
    {
        name:'6',
        img:'img/6.png'
    },
    {
        name:'1',
        img:'img/1.png'
    },
    {
        name:'2',
        img:'img/2.png'
    },
    {
        name:'3',
        img:'img/3.png'
    },
    {
        name:'4',
        img:'img/4.png'
    },
    {
        name:'5',
        img:'img/5.png'
    },
    {
        name:'6',
        img:'img/6.png'
    }
]
imgArr.sort(function(){return 0.5-Math.random();});
const img = document.getElementsByTagName('img');
let cardId = [];
let cardArr = [];
for (let i = 0; i < img.length; i++) {
    console.log(imgArr[i]);
    img[i].addEventListener('click',flipCard);
    function flipCard(){
        img[i].setAttribute('src',imgArr[i].img)
        img[i].setAttribute('index',i);
        let carId = img[i].getAttribute('index');
        cardArr.push(img[i]);
        cardId.push(imgArr[i].name);
        if(cardId.length===2){
            setTimeout(detect, 100);
        }
    }

}
function detect(){
    let cards = document.querySelectorAll('img');

    const cardArrOne = cardId[0];
    const cardArrTwo = cardId[1];
    console.log(cardId[0]);
    console.log(cardId[1]);
    if(cardId[0]===cardId[1]){
        cardArr[0].setAttribute('src','img/open.png');
        cardArr[1].setAttribute('src','img/open.png');
        cardArr[0].removeEventListener('click',flipCard);
        cardArr[1].removeEventListener('click',flipCard);
        console.log(cards[0]);
    }else{
        cardArr[0].setAttribute('src','img/close.png');
        cardArr[1].setAttribute('src','img/close.png');
    }
}
