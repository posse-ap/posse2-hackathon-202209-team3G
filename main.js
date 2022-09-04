
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


//ビンゴ
const COLUMN_LENGTH = 5;//縦の長さ
const ROW_LENGTH = 5;
let MAX_NUMBER = 24;//問題数
let targetNumber = [];
for(let i = 1; i <= MAX_NUMBER; i++){
  targetNumber.push(i);
}



const outer = document.getElementById('outer');

for(let i = 1; i <= COLUMN_LENGTH * ROW_LENGTH; i++){
  const divSquare = document.createElement('div');
  divSquare.classList.add(`square`,`square${i}`);
  let div = document.createElement('div');
  if(i === Math.round(COLUMN_LENGTH * ROW_LENGTH /2) ){
    // divSquare.classList.add('gray');
    // div.textContent = 'free';
    div.style.backgroundImage = `url(./img/bingoBack13.jpg)`
    div.style.backgroundSize = 'contain';
  }else{
    divSquare.addEventListener('click', 
    function (){
      div.style.backgroundImage = `url(./img/bingoBack${i}.jpg)`;
      div.style.backgroundSize = 'contain';
      div.textContent =""
      divSquare1.classList.add('ss')
      divSquare2.classList.add('ss')
      divSquare3.classList.add('ss')
      divSquare4.classList.add('ss')
      divSquare5.classList.add('ss')
  });
    div.textContent = i;
    // let targetIndex = Math.floor(Math.random() * targetNumber.length) ; 
    // div.textContent = targetNumber[targetIndex];
    // targetNumber.splice(targetIndex, 1);
  }
  divSquare.appendChild(div);
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

// const divSquare1 = document.querySelector('square1');
// const divSquare2 = document.querySelector('square2');
// const divSquare3 = document.querySelector('square3');
// const divSquare4 = document.querySelector('square4');
// const divSquare5 = document.querySelector('square5');
// const divSquare6 = document.querySelector('square6');
// const divSquare7 = document.querySelector('square7');
// const divSquare8 = document.querySelector('square8');
// const divSquare9 = document.querySelector('square9');
// const divSquare10 = document.querySelector('square10');
// const divSquare11 = document.querySelector('square11');
// const divSquare12 = document.querySelector('square12');
// const divSquare13 = document.querySelector('square13');
// const divSquare14 = document.querySelector('square14');
// const divSquare15 = document.querySelector('square15');
// const divSquare16 = document.querySelector('square16');
// const divSquare17 = document.querySelector('square17');
// const divSquare18 = document.querySelector('square18');
// const divSquare19 = document.querySelector('square19');
// const divSquare20 = document.querySelector('square20');
// const divSquare21 = document.querySelector('square21');
// const divSquare22 = document.querySelector('square22');
// const divSquare23 = document.querySelector('square23');
// const divSquare24 = document.querySelector('square24');
// const divSquare25 = document.querySelector('square25');

// if(divSquare1.classList.contains('gray') && divSquare2.classList.contains('gray') && divSquare3.classList.contains('gray') && divSquare4.classList.contains('gray') && divSquare5.classList.contains('gray')){
//   outer.classList.add('gray');
// }