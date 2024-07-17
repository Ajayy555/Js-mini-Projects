let randomNum=parseInt(Math.random()*10 +1);
console.log(randomNum);

const getNumber = document.querySelector('form');
const prevGuess=document.querySelector('.guesses');
const results=document.querySelector('.result');
const remainGuess=document.querySelector('.remain');
const disableButton=document.querySelector('#guessbutton');
const msg=document.querySelector('.message');
const input=document.querySelector('#guessfield');

let numberArray=[];
const p=document.createElement('p');
let numguess=1;
let playgame=true;

if(playgame){
        getNumber.addEventListener('submit',function(e){
        e.preventDefault();
        const guess=parseInt(input.value)
        console.log(guess);
        validateGuess(guess)

    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please Entre a Valid Number');
    }else if(guess<1 || guess>100){
        alert('Please Entre a Number With in Range 1 to 100');
    }else{
        numberArray.push(guess);
        if(numguess==11){
            displayguess(guess);
            // console.log('iside 3guess');
            displayMsg(`Game Over Random Number was ${randomNum}`);
            endGame();
        }else{
            chkGuess(guess);
        }
    }
}



function chkGuess(guess){

    if(guess === randomNum){
        displayMsg(`You Guessed it Right !!!`);
        endGame();
    }else if(guess < randomNum){
        displayMsg(`Number is Too Low !!!`);
    }else if(guess>randomNum){
        displayMsg(`Number is Too high !!!`);
    }

    displayguess(guess);
}

function displayguess(guess){
    input.value='';
    prevGuess.innerHTML+=`${guess}  `
    numguess++;
    remainGuess.innerHTML=`${11-numguess}`
}

function displayMsg(msgg){
msg.innerHTML=`<h2>${msgg}</h2>`

}

function endGame(){
    input.value='';
    input.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id='newgame'> start New Game</h2>`;
    results.appendChild(p);
    playgame=false;
    newGame();
}

function newGame(){
const StartButton=document.querySelector('#newgame');
StartButton.addEventListener('click',function(e){
//     randomNum=parseInt(Math.random()*10 +1);
//    prevGuess=[''];
//     numguess=1;
//     results.innerHTML='';
//     prevGuess.innerHTML=``
//     numguess++;
//     remainGuess.innerHTML=``

document.location.reload();

})=

}










// getNumber.addEventListener('submit',function(e){
// e.preventDefault();
// numberArray.push(parseInt(document.querySelector('#guessfield').value));
// console.log(numberArray);
// console.log(numberArray.length);
// prevGuess.innerHTML=numberArray;
// let remain=10-(numberArray.length);
// console.log(remain);

// if(remain === 0){
//     // disableButton.style.display='none';
//     disableButton.disabled="false";
//     document.querySelector('.message').innerHTML='All Chances are Over'
//     console.log('inside if');
// }else{
//  remainGuess.innerHTML=remain;
// }
    
// })