let td = document.querySelectorAll('td');
const widthNum=4;
let numArr = [];
let score = 0;
let checkMove = true;
function createBoard() {
    for (const iterator of td) {
        iterator.innerHTML = 0;
        numArr.push(iterator);
    }
    getRandomText();
    getRandomText();
}
createBoard();

function getRandomText() {
    let min = Math.ceil(0);
    let max = Math.floor(15);
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    if (td[random].innerHTML == 0) {
        td[random].innerHTML = 2;
        checkForGameOver();
    } else {
        getRandomText();
    }
}

function moveRight() {
    for (let index = 0; index < 16; index++) {
        // console.log(index+":"+index % 4);
        if (index % 4 == 0) {
            let horizontalOne = numArr[index].innerHTML;
            let horizontalTwo = numArr[index+1].innerHTML;
            let horizontalThree = numArr[index+2].innerHTML;
            let horizontalFour = numArr[index+3].innerHTML;
            // 转换为数字
            let row = [parseInt(horizontalOne), parseInt(horizontalTwo), parseInt(horizontalThree), parseInt(horizontalFour)];
            // 将数字都移动到最右边
            let filterRow = row.filter(num => num);
            let missing = 4 - filterRow.length;
            let zeros = Array(missing).fill(0);
            let newRow = zeros.concat(filterRow);
            numArr[index].innerHTML = newRow[0];
            numArr[index+1].innerHTML = newRow[1];
            numArr[index+2].innerHTML = newRow[2];
            numArr[index+3].innerHTML = newRow[3];
        }
    }
}
function moveLeft() {
    for (let index = 0; index < 16; index++) {
        if (index % 4 == 0) {
            let horizontalOne = numArr[index].innerHTML;
            let horizontalTwo = numArr[index+1].innerHTML;
            let horizontalThree = numArr[index+2].innerHTML;
            let horizontalFour = numArr[index+3].innerHTML;
            // 转换为数字
            let row = [parseInt(horizontalOne), parseInt(horizontalTwo), parseInt(horizontalThree), parseInt(horizontalFour)];
            // 将数字都移动到最右边
            let filterRow = row.filter(num => num);
            let missing = 4 - filterRow.length;
            let zeros = Array(missing).fill(0);
            let newRow = filterRow.concat(zeros);
            numArr[index].innerHTML = newRow[0];
            numArr[index+1].innerHTML = newRow[1];
            numArr[index+2].innerHTML = newRow[2];
            numArr[index+3].innerHTML = newRow[3];
        }
    }
}
function moveTop() {
    for (let index = 0; index < 4; index++) {
            let horizontalOne = numArr[index].innerHTML;
            let horizontalTwo = numArr[index+widthNum].innerHTML;
            let horizontalThree = numArr[index+widthNum*2].innerHTML;
            let horizontalFour = numArr[index+widthNum*3].innerHTML;
            // 转换为数字
            let row = [parseInt(horizontalOne), parseInt(horizontalTwo), parseInt(horizontalThree), parseInt(horizontalFour)];
            // 将数字都移动到最右边
            let filterRow = row.filter(num => num);
            let missing = 4 - filterRow.length;
            let zeros = Array(missing).fill(0);
            let newRow = filterRow.concat(zeros);
            numArr[index].innerHTML = newRow[0];
            numArr[index+widthNum].innerHTML = newRow[1];
            numArr[index+widthNum*2].innerHTML = newRow[2];
            numArr[index+widthNum*3].innerHTML = newRow[3];
    }
}
function moveBottom() {
    for (let index = 0; index < 4; index++) {
        let horizontalOne = numArr[index].innerHTML;
        let horizontalTwo = numArr[index+widthNum].innerHTML;
        let horizontalThree = numArr[index+widthNum*2].innerHTML;
        let horizontalFour = numArr[index+widthNum*3].innerHTML;
        // 转换为数字
        let row = [parseInt(horizontalOne), parseInt(horizontalTwo), parseInt(horizontalThree), parseInt(horizontalFour)];
        // 将数字都移动到最右边
        let filterRow = row.filter(num => num);
        let missing = 4 - filterRow.length;
        let zeros = Array(missing).fill(0);
        let newRow = zeros.concat(filterRow);
        numArr[index].innerHTML = newRow[0];
        numArr[index+widthNum].innerHTML = newRow[1];
        numArr[index+widthNum*2].innerHTML = newRow[2];
        numArr[index+widthNum*3].innerHTML = newRow[3];
    }
}
function combineRow() {
    for (let i =0; i < 15; i++) {
        if (numArr[i].innerHTML === numArr[i + 1].innerHTML) {
            let combinedTotal = parseInt(numArr[i].innerHTML) + parseInt(numArr[i + 1].innerHTML)
            numArr[i].innerHTML = combinedTotal  
            numArr[i + 1].innerHTML = 0      
            score += combinedTotal
            checkMove = true;
        } else {
            checkMove = false;
        }
    }
}
function combineColumn() {
    for (let i =0; i < 12; i++) {
        if (numArr[i].innerHTML === numArr[i +widthNum].innerHTML) {
            let combinedTotal = parseInt(numArr[i].innerHTML) + parseInt(numArr[i +widthNum].innerHTML)
            numArr[i].innerHTML = combinedTotal
            numArr[i +widthNum].innerHTML = 0
            score += combinedTotal
            checkMove = true;
        } else {
            checkMove = false;
        }
        }
}
function keyOn(e) {
    if (e.key === "ArrowRight") {
        moveRight();
        combineRow();
        moveRight();
        getRandomText();
    } else if (e.key === "ArrowLeft") {
        moveLeft();
        combineRow();
        moveLeft();
        getRandomText();
    } else if (e.key === "ArrowUp") {
        moveTop();
        combineColumn();
        moveTop();
        getRandomText();
    } else if (e.key === "ArrowDown") {
        moveBottom();
        combineColumn();
        moveBottom();
        getRandomText();
    }
}
document.addEventListener('keydown', keyOn);

function youWin() {
    for (let index = 0; index < 16; index++) {
        if (numArr[index].innerHTML == 2048) {
            alert("You win!But you can keep going");
            document.removeEventListener('keyup',youWin);
        }
    }
}
document.addEventListener('keyup', youWin);

function checkForGameOver() {
    let zeros = 0
    for (let i=0; i < numArr.length; i++) {
      if (numArr[i].innerHTML == 0) {
          zeros++
          console.log(zeros);
      }
    }
    console.log("check:"+checkMove);
    // console.log(zeros === 0);
    if ((zeros === 0) && checkMove) {
        alert("You lost");
        document.removeEventListener('keyup', control)
        setTimeout(() => clear(), 3000)
    }
}
  
document.onkeydown = function (e) {
        changeColor();
		if(e.key == "ArrowUp" || e.key == "ArrowDown"){
		if(e.preventDefault){
            e.preventDefault();
        } else {
			e.returnValue = false;
		}
	}
}
function changeColor() {
    for (let index = 0; index < 16; index++) {
        if (numArr[index].innerHTML == 0) {
            td[index].className = "";
        }
        if (numArr[index].innerHTML == 2) {
            td[index].className = "td2";
        }
        if (numArr[index].innerHTML == 4) {
            td[index].className = "td4";
        }
        if (numArr[index].innerHTML == 8) {
            td[index].className = "td8";
        }
        if (numArr[index].innerHTML == 16) {
            td[index].className = "td16";
        }
        if (numArr[index].innerHTML == 32) {
            td[index].className = "td32";
        }
        if (numArr[index].innerHTML == 64) {
            td[index].className = "td64";
        }
        if (numArr[index].innerHTML == 128) {
            td[index].className = "td128";
        }
        if (numArr[index].innerHTML == 256) {
            td[index].className = "td256";
        }
        if (numArr[index].innerHTML == 512) {
            td[index].className = "td512";
        }
        if (numArr[index].innerHTML == 1024) {
            td[index].className = "td1024";
        }
        if (numArr[index].innerHTML == 2048) {
            td[index].className = "td2048";
        }
        if (numArr[index].innerHTML == 4096) {
            td[index].className = "td4096";
        }
    }
}
changeColor();