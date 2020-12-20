let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//this function will be called at the start of each new round in order to generate the new secret target number.
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

//this function takes tow numbers and retruns the distance
const getAbsoluteDistance = (number1, number2) => {
  return Math.abs(number1 - number2);
};

//this function check whether a user guess is between 0 and 9 and alert the user that their number is out of range

function alert(number) {
  if (number < 0 || number > 9) {
    console.log('The number you entered is out of range. Enter value between 0 and 9.');
  }
};

//this function will be called each round to determine which guess is closest to the target number.
const compareGuesses = (human, computer, secret) => {
  const humanDifference = getAbsoluteDistance(human, secret);
  alert(human);
  const computerDifference = getAbsoluteDistance(computer, secret);
  return humanDifference <= computerDifference;
// reutrn using if/else statements
//   if (human === computer) {
//     return true;
//   } else if (humanDifference < computerDifference) {
//     return true;
//   } else if (humanDifference === computerDifference) {
//     return true;
//   }else {
//     return false;
//   }

};



//this function will be used to correctly increase the winner's score after each round
function updateScore(winner) {
  if (winner === 'human') {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
};

//this function will be used to update the round number after each round
const advanceRound = () => currentRoundNumber ++;




