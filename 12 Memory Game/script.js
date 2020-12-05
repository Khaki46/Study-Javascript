window.onload=function(){

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
let switchTF ;
let cardId = [];
let cardArr = [];
let imgIdArr = [];
function detect(){
    var cards = document.querySelectorAll('img');
    const cardArrOne = imgIdArr[0];
    const cardArrTwo = imgIdArr[1];
    console.log(cardArrOne);
    console.log(cardArrTwo);
    if(cardArrOne==cardArrTwo){
        cardArr[0].setAttribute('src','img/close.png');
        cardArr[1].setAttribute('src','img/close.png');
    }else if(cardId[0]===cardId[1]){

        cardArr[0].setAttribute('src','img/open.png');
        cardArr[1].setAttribute('src','img/open.png');
        cardArr[0].addEventListener('click', doneChangePhoto);
        cardArr[1].addEventListener('click', doneChangePhoto);
        function doneChangePhoto(){
            cardArr[0].setAttribute('src','img/open.png');
            cardArr[1].setAttribute('src','img/open.png');
        }
        console.log(cardArr[0]);
        console.log(cardArr[1]);
        }else{
        cardArr[0].setAttribute('src','img/close.png');
        cardArr[1].setAttribute('src','img/close.png');
    }
    // 重置
    cardArr=[]
    cardId=[]
    imgIdArr=[]
}
for (let i = 0; i < img.length; i++) {
    console.log(imgArr[i]);
    img[i].addEventListener('click',flipCard);
    function flipCard(){

        img[i].setAttribute('src',imgArr[i].img)
        img[i].index=i;
        imgIdArr.push(this.index);
        cardArr.push(img[i]);
        cardId.push(imgArr[i].name);
        if(cardId.length===2){
            setTimeout(detect, 300);
        }
    }
}
}

