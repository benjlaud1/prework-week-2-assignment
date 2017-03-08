// Is the JavaScript file sourced? Check in the browser console by
// right clicking and selecting 'Inspect'. If the script is properly
// sourced you will see the log message: 'Script sourced!'.
console.log('Script sourced!');

// * Step One * - Create a variable from user input and conditional statement
  // var animal =

var animal = prompt('Enter a type of animal');

// Once you have the animal variable. Write your conditional statement.
// Use these exact strings: 'Try again.' and 'How did you know?!'.

if (animal === 'dog') {
  console.log('How did you know?!');
} else {
  console.log('Try again.');
}

// * Step Two * - Refactor into a function
// Call the function by passing the animal variable into it

function animalGuess(animalName){
  // if statement goes in here.
  if (animalName === 'dog') {
    console.log('How did you know?!');
  } else {
    console.log('Try again.');
  }
}

animalGuess(animal);

// What will this log?
// console.log(animalName);

console.log(animalName);
/* This will give you a referenceError saying animalName is not defined. This is because animalName is only defined inside animalGuess so
it a local variable for animalGuess. It would need to be defined outside  the function to be used globally */
