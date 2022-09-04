
//ハンバーガーメニュー
function hamburger() {
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    document.getElementById('nav').classList.toggle('in');
}
document.getElementById('hamburger').addEventListener('click' , function(){
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
  if(i === Math.round(COLUMN_LENGTH * ROW_LENGTH /2)){
    // divSquare.classList.add('gray');
    // div.textContent = 'free';
    div.style.backgroundImage = `url(./img/bingoBack13.jpg)`;
    div.style.backgroundSize = 'contain';
  }else{
    divSquare.addEventListener('click', 
    function (){
      div.style.backgroundImage = `url(./img/bingoBack${i}.jpg)`;
      div.style.backgroundSize = 'contain';
      div.textContent ='';
      divSquare.classList.add('magic');
      if(divSquare1.classList.contains('magic') && divSquare2.classList.contains('magic') && divSquare3.classList.contains('magic') && divSquare4.classList.contains('magic') && divSquare5.classList.contains('magic')){
        console.log('成功');
      }
      if(divSquare6.classList.contains('magic') && divSquare7.classList.contains('magic') && divSquare8.classList.contains('magic') && divSquare9.classList.contains('magic') && divSquare10.classList.contains('magic')){
        console.log('成功');
      }
      if(divSquare11.classList.contains('magic') && divSquare12.classList.contains('magic') && divSquare14.classList.contains('magic') && divSquare15.classList.contains('magic')){
        console.log('成功');
      }
      if(divSquare16.classList.contains('magic') && divSquare17.classList.contains('magic') && divSquare18.classList.contains('magic') && divSquare19.classList.contains('magic') && divSquare20.classList.contains('magic')){
        console.log('成功');
      }
      if(divSquare21.classList.contains('magic') && divSquare22.classList.contains('magic') && divSquare23.classList.contains('magic') && divSquare24.classList.contains('magic') && divSquare25.classList.contains('magic')){
        console.log('成功');
      }
      if(divSquare1.classList.contains('magic') && divSquare6.classList.contains('magic') && divSquare11.classList.contains('magic') && divSquare16.classList.contains('magic') && divSquare21.classList.contains('magic')){
        console.log('成功');
      }
      if(divSquare2.classList.contains('magic') && divSquare7.classList.contains('magic') && divSquare12.classList.contains('magic') && divSquare17.classList.contains('magic') && divSquare22.classList.contains('magic')){
        console.log('成功');
      }
      if(divSquare3.classList.contains('magic') && divSquare8.classList.contains('magic') && divSquare18.classList.contains('magic') && divSquare23.classList.contains('magic')){
        console.log('成功');
      }
      if(divSquare4.classList.contains('magic') && divSquare9.classList.contains('magic') && divSquare14.classList.contains('magic') && divSquare19.classList.contains('magic') && divSquare24.classList.contains('magic')){
        console.log('成功');
      }
      if(divSquare5.classList.contains('magic') && divSquare10.classList.contains('magic') && divSquare15.classList.contains('magic') && divSquare20.classList.contains('magic') && divSquare25.classList.contains('magic')){
        console.log('成功');
      }
      if(divSquare1.classList.contains('magic') && divSquare7.classList.contains('magic') && divSquare19.classList.contains('magic') && divSquare25.classList.contains('magic')){
        console.log('成功');
      }
      if(divSquare5.classList.contains('magic') && divSquare9.classList.contains('magic') && divSquare17.classList.contains('magic') && divSquare21.classList.contains('magic')){
        console.log('成功');
      }

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
// let tarrgetNumber = [];
// for(let i = 1; i <= MAX_NUMBER; i++){
//   targetNumber.push(i);
// }

// お題のオブジェクト
const suggestObj = {
  1:`全員の共通点を3つみつけよう！`,
  2:`MBTI診断をみんなでやってみる`,
  3:`パーソナルカラー診断をする`,
  4:`全員と2ショットをとる。or 皆でスクショを撮る`,
  5:`経験したことのあるスポーツについて共有する`,
  6:`二人組になってみんなにペアの人を紹介する（他己紹介）`,
  7:`カメラロールで最新の画像を見せる`,
  8:`16Personalities(性格診断）をみんなでやる`,
  9:`自分の好きなご飯やさんの情報を共有する`,
  10:`読んでよかった本を紹介する`,
  11:`好きな土地の紹介`,
  12:`地元の紹介をする`,
  13:`自分史を4分間なるべく詳しく説明してみる`,
  14:`背中の後ろで手を繋げる？チャレンジ！！`,
  15:`誰にでもなれるとしたら誰になりたい？`,
  16:`将来のことについて15分間話す。or 目標を宣言する`,
  17:`遊びの計画を立てる`,
  18:`自分しか知らなそうな豆知識を披露する！`,
  19:`苦手なところを一つ克服できるとしたら何？`,
  20:`共通の友人探し！相手と意外な共通の知人がいるかも...`,
  21:`その場にいる人と絵しりとり`,
  22:`相手の似顔絵を書く`,
  23:`ラインとインスタを交換する`,
  24:`コンビニで小学生のときに一番食べていたお菓子を買うor紹介`,
}

let timerId;

// お題表示
const bingo = document.querySelector('.card');
bingo.insertAdjacentHTML('beforeend', `<div class="suggest"></div>`);
const suggest = document.querySelector('.suggest');
suggest.style.display = 'none';


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

  suggest.style.display = '';
  suggest.innerHTML = `${suggestObj[targetIndex]}`;
  }

}

const divSquare1 = document.querySelector('.square1');
const divSquare2 = document.querySelector('.square2');
const divSquare3 = document.querySelector('.square3');
const divSquare4 = document.querySelector('.square4');
const divSquare5 = document.querySelector('.square5');
const divSquare6 = document.querySelector('.square6');
const divSquare7 = document.querySelector('.square7');
const divSquare8 = document.querySelector('.square8');
const divSquare9 = document.querySelector('.square9');
const divSquare10 = document.querySelector('.square10');
const divSquare11 = document.querySelector('.square11');
const divSquare12 = document.querySelector('.square12');
const divSquare13 = document.querySelector('.square13');
const divSquare14 = document.querySelector('.square14');
const divSquare15 = document.querySelector('.square15');
const divSquare16 = document.querySelector('.square16');
const divSquare17 = document.querySelector('.square17');
const divSquare18 = document.querySelector('.square18');
const divSquare19 = document.querySelector('.square19');
const divSquare20 = document.querySelector('.square20');
const divSquare21 = document.querySelector('.square21');
const divSquare22 = document.querySelector('.square22');
const divSquare23 = document.querySelector('.square23');
const divSquare24 = document.querySelector('.square24');
const divSquare25 = document.querySelector('.square25');

