let score = document.getElementById('score');
let time_left = document.querySelector('#time-left');
let squares = document.querySelectorAll('.square');
let mole = document.querySelectorAll('.mole');

let result = 0;
let rem_time = time_left.textContent;

function randomSquare(){
    squares.forEach(className=>{
        className.classList.remove('mole');
    })
    let anyRandomPosition = squares[Math.floor(Math.random()*9)];
    anyRandomPosition.classList.add('mole')

    hitPosition = anyRandomPosition.id;
}

squares.forEach(id => {
    id.addEventListener('mouseover', () => {
      if(id.id === hitPosition){
        result = result + 1
        score.textContent = result
        hitPosition=null
      }
    })
  })

function moleMove(){
    let timer = null;
    timer = setInterval(randomSquare, 500);
}
moleMove();

function countTime(){
    rem_time--
    time_left.textContent = rem_time + 'Sec';

    if(rem_time === 0 ) {
        clearInterval(timer)
        alert('GAME OVER! Your Final Score is ' + result)
    }
}
let timer = setInterval(countTime, 1000)