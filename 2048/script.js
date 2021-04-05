let td = document.querySelectorAll('td');
let numArr = [];
function  createBoard() {
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
    }
}

function moveright() {
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
moveright();
