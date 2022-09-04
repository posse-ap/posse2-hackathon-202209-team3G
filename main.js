
//ハンバーガーメニュー
function hamburger() {
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    document.getElementById('nav').classList.toggle('in');
}
document.getElementById('hamburger').addEventListener('click' , function () {
    hamburger();
} );
//ハンバーガーメニューおわり

//たいとるアニメーション

//たいとるアニメーションおわり

//ビンゴ
const COLUMN_LENGTH = 5;//縦の長さ
const ROW_LENGTH = 5;
let MAX_NUMBER = 24;//問題数
let targetNumber = [];
for(let i = 1; i <= MAX_NUMBER; i++){
  targetNumber.push(i);
}

let outer = document.getElementById('outer');



for(let i = 1; i <= COLUMN_LENGTH * ROW_LENGTH; i++){
  let divSquare = document.createElement('div');
  divSquare.classList.add('square',`square${i}`);
  let divSquare1 =document.querySelector('.square1');

  let div = document.createElement('div');
  if(i === Math.round(COLUMN_LENGTH * ROW_LENGTH /2) ){
    divSquare.classList.add('gray');
    div.textContent = 'free';
  }else{
    divSquare.onclick = () => divSquare.classList.toggle('gray');
    div.textContent = i
    // let targetIndex = Math.floor(Math.random() * targetNumber.length) ;     
    // div.textContent = targetNumber[targetIndex];
    // targetNumber.splice(targetIndex, 1);
  }
  divSquare.appendChild(div)
  outer.appendChild(divSquare);
}

let MAXNUMBER = 24
let main = document.getElementById('main');
let button = document.querySelector('#button');
let history = document.getElementById('history');
let historyArray = [];
let tarrgetNumber = [];
for(let i = 1; i <= MAX_NUMBER; i++){
  targetNumber.push(i);
}

let timerId;


button.onclick = () => {

  if(targetNumber.length === 0){
    alert('すべての番号の発表が終わりました') ;
    clearInterval(timerId);
    return;
  }
  
  if(button.textContent === 'スタート'){
    button.textContent = 'ストップ';
    timerId = setInterval( () => {
      let targetIndex = Math.floor(Math.random() * targetNumber.length) ;  
      main.textContent = targetNumber[targetIndex];
    }, 100)
  }else{
    button.textContent = 'スタート';
    clearInterval(timerId); 
    let targetIndex = targetNumber.indexOf(Number(main.textContent));   
    targetNumber.splice(targetIndex, 1);
    historyArray.push(main.textContent);
    history.textContent = historyArray;
  }
}