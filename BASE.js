const guessInput = document.getElementById('userGuess');
const submitBtn = document.getElementById('submitBtn');
const guessses = document.getElementById('guessForm');
const remaining = document.getElementById('remainingguesses');
const resetBtn = document.getElementById('resetButton');
const guesscnt = document.getElementById('guessCount');
let randomNum = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
const score = document.getElementById('totalscore');

let Guesses=[];
console.log(randomNum);

userGuess.addEventListener('input', (e) => {
//   e.preventDefault();
  console.log(userGuess.value);
});
// console.log(score);
guesscnt.innerHTML = "0";
totalscore.innerHTML = "0";


let guesscount = 0;
// let totalscore = 0;
// let numberOfGuesses = 0;


guessForm.addEventListener('submit', (e) => {
    e.preventDefault();
console.log(randomNum);

    const trial=parseInt(userGuess.value.trim());
    console.log(trial);
     if (trial === "") {
    alert("Please enter a valid number.");
    return;
  }
   
  console.log(`type of trial: ${typeof trial}`);
  console.log(`type of randomNum: ${typeof randomNum}`);
    if(trial === randomNum){
        alert("Your guess is correct!");
    }
    else if(trial < randomNum){
        alert('your number is too low')
    
    }
     else if(trial > randomNum){
        alert('your number is too high')
    
    }
    if(trial === randomNum){
        totalscore.innerHTML =+1;
    } 
   
    Guesses.push(trial);
    guesscnt.innerHTML =++guesscount;
    if (guesscnt.innerHTML >= 11){
        alert('you have run out of chances')
    }
    remaining.innerHTML =  10 - guesscount;
    console.log(Guesses);

 if (guesscnt.innerHTML >= 11){
    window.location.reload();  
    }
});


resetBtn.addEventListener('click', () => {
    window.location.reload();
});
