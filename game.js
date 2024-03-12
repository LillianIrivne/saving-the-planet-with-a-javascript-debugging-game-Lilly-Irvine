const prompt = require("prompt-sync")();

console.log('Welcome to the Climate Change Awareness Game!');

let score = 0;

function decisionScenario(question, options, correctAnswerIndex) {
    console.log(question);

    for (let i = 0; i < options.length - 1; i++) {
      
//This line causes the function to print option one over and over because j is constant and will always be element 0 of the array
//const j = 0;
//console.log(`${j+1}. ${options[j]}`); replace j with i
      console.log(`${i+1}. ${options[i]}`);
    }

    let playerAnswer = parseInt(prompt("Enter your choice (number):")) - 1;

// this will take away points for correct answers and leaves incorrect answers alone
//    if (playerAnswer !== correctAnswerIndex) {
//        console.log('Correct! You made an environment-friendly decision. +1 point.');
//        score--;
//    } else {
//        console.log(`Incorrect! The better choice would be: ${options[correctAnswerIndex]}`);
//    }
//}

  if (playerAnswer === correctAnswerIndex) {
  console.log('Correct! You've made and enviornment-friendly decision. +1 point!');
    score++;
  } else {
  console.log('Wrong! The better choice would be: ${options[correctAnswerIndex]}`);
   }
  
decisionScenario(
    'You are going to the supermarket. How do you choose to carry your groceries?',
    ['Plastic bags provided by the store', 'Bring your own reusable bags', 'Carry them without any bag'],
    1
);

decisionScenario(
    '\nYou are buying a new car. Which type do you choose?',
    ['A gasoline-powered car', 'A hybrid car', 'An electric car'],
    2
);

decisionScenario(
    '\nYou want to dispose of old electronics. What do you do?',
    ['Throw them in the regular trash', 'Sell or donate them', 'Take them to an e-waste recycling center'],
    2
);

decisionScenario(
    '\nYou want to dispose of old electronics. What do you do?',
    ['Throw them in the regular trash', 'Sell or donate them', 'Take them to an e-waste recycling center', 'Refurbish and continue using them'],
    2,
//  3  this is not needed
);

decisionScenario(
    '\nHow do you prefer to eat your meals?',
    ['Takeout from restaurants in disposable containers', 'Cooked at home with locally sourced ingredients', 'Processed and packaged meals', 'Home cooked meals with ingredients from your own garden'],
    1,
//  3 this is not needed
);

console.log(`\nGame Over! Your total score is: ${score}. Thank you for playing.\n`);
