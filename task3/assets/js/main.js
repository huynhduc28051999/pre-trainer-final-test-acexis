let arr = [];
let snake = [];
function Common() {
  let index = 0;
  const trs = document.querySelectorAll('tr');
  trs.forEach(items => {
    arr[index] = [];
    const tds = items.querySelectorAll('td');
    tds.forEach(item => {
      arr[index].push(item);
    });
    index++;
  });
  arr[9][9].classList.add('active');
  snake.push(arr[9][9]);
}
let row = 9;
let col = 9;
let direction;
window.onload = function () {
  Common();
  randEat();
}
let timeOut;
function directionPlay() {
  snake[0].classList.remove('active');
  snake.shift();
  // arr[row][col].classList.remove('active');
  switch (direction) {
    case 'right':
      col++;
      if (col >= 20) col = 0;
      break;
    case 'left':
      col--;
      if (col < 0) col = 19;
      break;
    case 'up':
      row--;
      if (row < 0) row = 19;
      break;
    case 'down':
      row++;
      if (row >= 20) row = 0;
      break;
  }
  snake.push(arr[row][col]);
  arr[row][col].classList.add('active');
  timeOut = setTimeout(() => {
    directionPlay();
    checkEat();
  }, 1000);
}

// change direction
function change(e) {
  clearTimeout(timeOut);
  switch (e.keyCode) {
    case 37:
      if(direction !== 'right')
      direction = 'left';
      break;
    case 38:
      if(direction !== 'down')
      direction = 'up';
      break;
    case 39:
      if(direction !== 'left')
      direction = 'right';
      break;
    case 40:
      if(direction !== 'up')
      direction = 'down';
      break;
  }
  checkEat();
  directionPlay();
}
window.addEventListener('keydown', change);

function randomNumber() {
  return Math.floor(Math.random() * 19 + 0);
}
// random show bait
let rowEat = randomNumber();
let colEat = randomNumber();
function randEat() {
  rowEat = randomNumber();
  colEat = randomNumber();
  if (rowEat == row && colEat == col) {
    rowEat++;
  }
  arr[rowEat][colEat].classList.add('eat');
}
// check do snake eat bait?
function checkEat() {
  if (rowEat == row && colEat == col) {
    let i = rowEat, j = colEat;
    snake.push(arr[rowEat][colEat]);
    arr[row][col].classList.add('active');
    arr[i][j].classList.remove('eat');
    randEat();
  }
}