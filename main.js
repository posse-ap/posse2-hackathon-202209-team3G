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
  let divSquare = document.createElement('div');
  divSquare.classList.add(`square`,`square${i}`);
  let div = document.createElement('div');
  div.classList.add('val');
  if(i <= 12){
    div.textContent = i;
  } else{
    div.textContent = i - 1;
  }
  divSquare.appendChild(div);
  outer.appendChild(divSquare);
  let congratulations;
    if(i === Math.round(COLUMN_LENGTH * ROW_LENGTH /2)){
      div.style.backgroundImage = `url(./img/bingoBack13.jpg)`;
      div.style.backgroundSize = 'contain';
      div.textContent ='';
    }else{
      divSquare.addEventListener('click',
      function(){
        divSquare.classList.add('magic');
        div.classList.add('bingoAnimation');
        div.style.backgroundImage = `url(./img/bingoBack${i}.jpg)`;
        div.style.backgroundSize = 'contain';
        div.textContent ='';
        congratulations = [...document.querySelectorAll('.val')];
        divSquare.classList.add('magic');
          const animationTimeout = function(){
            if(divSquare1.classList.contains('magic') && divSquare2.classList.contains('magic') && divSquare3.classList.contains('magic') && divSquare4.classList.contains('magic') && divSquare5.classList.contains('magic')){
              congratulations.forEach((element,conIndex)=>{                
                    element.style.backgroundImage = `url(./img/bingoBack${conIndex + 1}.jpg)`;
                    element.style.backgroundSize = 'contain';
                    element.textContent ='';
                    element.classList.add('bingoAnimation');
              }
            )
            }
            if(divSquare6.classList.contains('magic') && divSquare7.classList.contains('magic') && divSquare8.classList.contains('magic') && divSquare9.classList.contains('magic') && divSquare10.classList.contains('magic')){
              congratulations.forEach((element,conIndex)=>{                
                    element.style.backgroundImage = `url(./img/bingoBack${conIndex + 1}.jpg)`;
                    element.style.backgroundSize = 'contain';
                    element.textContent ='';
                    element.classList.add('bingoAnimation');
              }
            )
            }
            if(divSquare11.classList.contains('magic') && divSquare12.classList.contains('magic') && divSquare14.classList.contains('magic') && divSquare15.classList.contains('magic')){
              congratulations.forEach((element,conIndex)=>{                
                    element.style.backgroundImage = `url(./img/bingoBack${conIndex + 1}.jpg)`;
                    element.style.backgroundSize = 'contain';
                    element.textContent ='';
                    element.classList.add('bingoAnimation');
              }
            )
            }
            if(divSquare16.classList.contains('magic') && divSquare17.classList.contains('magic') && divSquare18.classList.contains('magic') && divSquare19.classList.contains('magic') && divSquare20.classList.contains('magic')){
              congratulations.forEach((element,conIndex)=>{   
                    element.style.backgroundImage = `url(./img/bingoBack${conIndex + 1}.jpg)`;
                    element.style.backgroundSize = 'contain';
                    element.textContent ='';
                    element.classList.add('bingoAnimation');
              }
            )
            }
            if(divSquare21.classList.contains('magic') && divSquare22.classList.contains('magic') && divSquare23.classList.contains('magic') && divSquare24.classList.contains('magic') && divSquare25.classList.contains('magic')){
              congratulations.forEach((element,conIndex)=>{                
                    element.style.backgroundImage = `url(./img/bingoBack${conIndex + 1}.jpg)`;
                    element.style.backgroundSize = 'contain';
                    element.textContent ='';
                    element.classList.add('bingoAnimation');
              }
            )
            }
            if(divSquare1.classList.contains('magic') && divSquare6.classList.contains('magic') && divSquare11.classList.contains('magic') && divSquare16.classList.contains('magic') && divSquare21.classList.contains('magic')){
              congratulations.forEach((element,conIndex)=>{                
                    element.style.backgroundImage = `url(./img/bingoBack${conIndex + 1}.jpg)`;
                    element.style.backgroundSize = 'contain';
                    element.textContent ='';
                    element.classList.add('bingoAnimation');
              }
            )
            }
            if(divSquare2.classList.contains('magic') && divSquare7.classList.contains('magic') && divSquare12.classList.contains('magic') && divSquare17.classList.contains('magic') && divSquare22.classList.contains('magic')){
              congratulations.forEach((element,conIndex)=>{                
                    element.style.backgroundImage = `url(./img/bingoBack${conIndex + 1}.jpg)`;
                    element.style.backgroundSize = 'contain';
                    element.textContent ='';
                    element.classList.add('bingoAnimation');
              }
            )
            }
            if(divSquare3.classList.contains('magic') && divSquare8.classList.contains('magic') && divSquare18.classList.contains('magic') && divSquare23.classList.contains('magic')){
              congratulations.forEach((element,conIndex)=>{                
                    element.style.backgroundImage = `url(./img/bingoBack${conIndex + 1}.jpg)`;
                    element.style.backgroundSize = 'contain';
                    element.textContent ='';
                    element.classList.add('bingoAnimation');
              }
            )
            }
            if(divSquare4.classList.contains('magic') && divSquare9.classList.contains('magic') && divSquare14.classList.contains('magic') && divSquare19.classList.contains('magic') && divSquare24.classList.contains('magic')){
              congratulations.forEach((element,conIndex)=>{                
                    element.style.backgroundImage = `url(./img/bingoBack${conIndex + 1}.jpg)`;
                    element.style.backgroundSize = 'contain';
                    element.textContent ='';
                    element.classList.add('bingoAnimation');
              }
            )
            }
            if(divSquare5.classList.contains('magic') && divSquare10.classList.contains('magic') && divSquare15.classList.contains('magic') && divSquare20.classList.contains('magic') && divSquare25.classList.contains('magic')){
              congratulations.forEach((element,conIndex)=>{                
                    element.style.backgroundImage = `url(./img/bingoBack${conIndex + 1}.jpg)`;
                    element.style.backgroundSize = 'contain';
                    element.textContent ='';
                    element.classList.add('bingoAnimation');
              }
            )
            }
            if(divSquare1.classList.contains('magic') && divSquare7.classList.contains('magic') && divSquare19.classList.contains('magic') && divSquare25.classList.contains('magic')){
              congratulations.forEach((element,conIndex)=>{                
                    element.style.backgroundImage = `url(./img/bingoBack${conIndex + 1}.jpg)`;
                    element.style.backgroundSize = 'contain';
                    element.textContent ='';
                    element.classList.add('bingoAnimation');
              }
            )
            }
            if(divSquare5.classList.contains('magic') && divSquare9.classList.contains('magic') && divSquare17.classList.contains('magic') && divSquare21.classList.contains('magic')){
              congratulations.forEach((element,conIndex)=>{                
                    element.style.backgroundImage = `url(./img/bingoBack${conIndex + 1}.jpg)`;
                    element.style.backgroundSize = 'contain';
                    element.textContent ='';
                    element.classList.add('bingoAnimation');
              }
            )
            }
          }
          setTimeout(animationTimeout,3000);
      }
      )
    }
  }



let MAXNUMBER = 24;
let main = document.getElementById('main');
let button = document.querySelector('#button');
let history = document.getElementById('history');
let historyArray = [];

// お題のオブジェクト
const suggestObj = {
  1:`全員の共通点を3つみつけよう！`,
  2:`MBTI診断をみんなでやってみる`,
  3:`お金のことを考えなくていいなら何したい？`,
  4:`全員と2ショットを撮るor皆でスクショを撮る`,
  5:`小さい頃の将来の夢を話す`,
  6:`右隣の人の第一印象を話す`,
  7:`テンションが上がる瞬間は？`,
  8:`捨てられない思い出のものは？`,
  9:`高校生の頃の一番楽しかった思い出について話す`,
  10:`おすすめの〇〇を紹介する（本・映画など）`,
  11:`夏休みの一番の思い出を話す`,
  12:`言われたことのあるあだ名は？`,
  13:`今一番行ってみたい場所は？`,
  14:`POSSEに入った理由を話す`,
  15:`誰にでもなれるとしたら誰になりたい？`,
  16:`死ぬまでに一度はしてみたいこと`,
  17:`この夏一番聴いた曲は？`,
  18:`休みの日は何してる？`,
  19:`苦手なところを一つ克服できるとしたら何？`,
  20:`今までにもらった最高のプレゼントは？`,
  21:`忘れらない夢（夜の夢）は？`,
  22:`子供のころはどんな子だった？`,
  23:`一番怖いものは？`,
  24:`小さいころ好きだった駄菓子は？`,
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
    let targetIndex = Math.floor(Math.random() * targetNumber.length);
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
  suggest.innerHTML = `${suggestObj[Number(main.textContent)]}`;
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

