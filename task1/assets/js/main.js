const buttons = document.querySelectorAll('button.play');
console.log(buttons);

let player = 1;
let arrPlayer1 = [];
let arrPlayer2 = [];
function play(btns) {
  if (player === 1) {
    this.textContent = 'X';
    arrPlayer1.push(this.dataset.btn);
    player = 2;
  } else {
    this.textContent = 'O';
    arrPlayer2.push(this.dataset.btn);
    player = 1;
  }
  check();
}
function check() {
  //check dong 
  let player1 = arrPlayer1.join('');
  let player2 = arrPlayer2.join('');
  if ((player1.includes(1) && player1.includes(2) && player1.includes(3))
    || (player1.includes(4) && player1.includes(5) && player1.includes(6))
    || (player1.includes(7) && player1.includes(8) && player1.includes(9))) {
    alert('player X win');
    resetPlay();
    return;
  }
  if ((player2.includes(1) && player2.includes(2) && player2.includes(3))
    || (player2.includes(4) && player2.includes(5) && player2.includes(6))
    || (player2.includes(7) && player2.includes(8) && player2.includes(9))) {
    alert('player O win');
    resetPlay();
    return;
  }
  //check cot
  if ((player1.includes(1) && player1.includes(4) && player1.includes(7))
    || (player1.includes(2) && player1.includes(5) && player1.includes(8))
    || (player1.includes(3) && player1.includes(6) && player1.includes(9))) {
    alert('player X win');
    resetPlay();
    return;
  }
  if ((player2.includes(1) && player2.includes(4) && player2.includes(7))
    || (player2.includes(2) && player2.includes(5) && player2.includes(8))
    || (player2.includes(3) && player2.includes(6) && player2.includes(9))) {
    alert('player O win');
    resetPlay();
    return;
  }
  //duong cheo
  if ((player1.includes(1) && player1.includes(5) && player1.includes(9))
    || (player1.includes(3) && player1.includes(5) && player1.includes(7))) {
    alert('player X win');
    resetPlay();
    return;
  }
  if ((player2.includes(1) && player2.includes(5) && player2.includes(9))
    || (player2.includes(3) && player2.includes(5) && player2.includes(7))) {
    alert('player O win');
    resetPlay();
    return;
  }
}
function resetPlay() {
  buttons.forEach(button => button.textContent = '');
  arrPlayer1 = [];
  arrPlayer2 = [];
  player = 1;
}
buttons.forEach(button => button.addEventListener('click', play));

//click button reset
const btnRe = document.querySelector('.reset > button');
btnRe.addEventListener('click', resetPlay);
//B
let btns;
const showPlace = document.querySelector('.show-place');
function showGrid() {
  const Change = document.querySelector('#hang').value;
  const winNumber = document.querySelector('#winNumber').value;
  // console.log(Change);
  let table = document.createElement('table');
  let count = 1;
  for (let j = 1; j <= Change; j++) {
    let tr = document.createElement('tr');
    for (let i = 1; i <= Change; i++) {
      let td = document.createElement('td');
      let btn = document.createElement('button');
      td.appendChild(btn);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  showPlace.appendChild(table);
  btns = showPlace.querySelectorAll('button')
}
const btnChange = document.querySelector('#change');
btnChange.addEventListener('click', showGrid);

//when btns have value
setInterval(() => {
  if(btns != undefined){
    btns.forEach(item => item.addEventListener('click',play));
  }
}, 1);