let image = document.getElementById('dic');
const scores = [0,0];
let activeplayer = 0;
let playing = true;
let currentScore = 0;
const score1 = document.getElementById('score--0');
const score2 = document.getElementById('score--1');
let hold = document.querySelector('.btn--hold');

const switchPlayer = function(){
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    currentScore = 0;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
}

score1.textContent = 0;
score2.textContent = 0;



document.querySelector('.btn--roll').addEventListener('click', function(){
    if (playing){
    let number = Math.trunc(Math.random()*6 + 1);
    
 image.src = `dice-${number}.png`;
 if (number !== 1){
     currentScore += number ;
     document.getElementById(`current--${activeplayer}`).textContent = currentScore;
     
    
 }else{
    switchPlayer();
 }

    }
});
hold.addEventListener('click', function(){
    scores[activeplayer]+= currentScore;
    
    document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer];
    
    if (scores[activeplayer] >=20){
        playing = false;
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
        
    }else{
      switchPlayer();
    }
})
document.querySelector('.btn--new').addEventListener('click', function(){
    document.getElementById('current--0').textContent= 0;
    document.getElementById('current--1').textContent= 0;
    score1.textContent = 0;
    score2.textContent = 0;
})