const showPlace = document.querySelector('.show-place');
let ths;
let arr = [];
let table = document.createElement('table');

function showGrid() {
  const dong = document.querySelector('#dong').value;
  const cot = document.querySelector('#cot').value;
  let count = 1;
  let trHead = document.createElement('tr');
  for (let i = 1; i <= cot; i++) {
    let thSTT = document.createElement('th');
    thSTT.textContent = count;
    trHead.appendChild(thSTT);
    count++;
    table.appendChild(trHead);
  }
  let tbody = document.createElement('tbody');
  table.appendChild(tbody);
  for (let i = 0; i < dong; i++) {
    arr[i] = [];
    for (let j = 0; j < cot; j++) {
      let cell = Math.floor(Math.random() * 1000) + 1;
      arr[i].push(cell);
    }
  }
  showPlace.appendChild(table);
  ths = document.querySelectorAll('th');
  loadInfinity();
}
// load only 100 row in array
let numberRow = 0;
function loadInfinity(x = 0) {
  let tables = document.querySelector('tbody');
  if (x >= arr.length) {
    numberRow = 0;
    return;
  }
  for (let i = x; i < x + 100; i++) {
    if (i == arr.length) {
      numberRow = 0;
      return;
    }
    let tr = document.createElement('tr');
    for (let j = 0; j < arr[0].length; j++) {
      let td = document.createElement('td');
      td.textContent = arr[i][j];
      tr.appendChild(td);
    }
    tables.appendChild(tr);
  }
}
// handle when scroll
function debounce() {
  let tables = document.querySelector('table');
  const height = tables.offsetHeight - tables.offsetTop - 500;
  if (window.scrollY - height >= 100 && window.scrollY - height <= 200) {
    numberRow += 100;
    loadInfinity(numberRow);
    return;
  }
}
const btnShow = document.querySelector('#show');
btnShow.addEventListener('click', showGrid);

window.addEventListener('scroll', debounce);

// sort when click col
function sortElement() {
  const index = this.textContent - 1;
  console.log(index - 1);
  arr = arr.sort((a, b) => a[index] < b[index] ? -1 : 1);
  const tbody = document.querySelector('tbody');
  const tr = document.querySelectorAll('tbody > tr')
  tr.forEach(item => {
    tbody.removeChild(item);
  });
  numberRow = 0;
  loadInfinity();
}
// when STT have values -> handle
setInterval(() => {
  if (ths !== undefined) {
    ths.forEach(item => item.addEventListener('click', sortElement));
  }
}, 0.1);
