// In these exercises, you will be working on conditional statements,
// namely the if / else if / else and switch/case conditionals.

// For these exercises, you will place your code in a function block.
// If you don't know what a function is yet, that's ok, your code will be the
// same. The variables will be defined for you, you just have to plug in the
// logic.

// For example, if asked for exercise 0 to assign the value of myAnswer to the sum
// of num1 and num2, and were given this construct:

// function exercise0(num1, num2) {
//   var myAnswer;
//   // ------------------------------------------
//   // Write your code for exercise 1 below here:
//   // ------------------------------------------
//
//   // ------------------------------------------
//   // And above here
//   // ------------------------------------------
//   return myAnswer;
// }

// You would put your code between the "below here"
// and "above here" blocks as shown:

// function exercise0(num1, num2) {
//   var myAnswer;
//   // ------------------------------------------
//   // Write your code for exercise 1 below here:
//   // ------------------------------------------
//   myAnswer = num1 + num2;
//   // ------------------------------------------
//   // And above here
//   // ------------------------------------------
//   return myAnswer;
// }

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// EXERCISE 1.
// First reassign the value of `answer1` so that it has the value of:
// "num1 is small"
// Write an if statement that checks if a variable `num1` is greater than 10.
// If it is, then within your if statement code change the value of answer1 so
// that its new value would be a string that says:
// "The value of num1 is <value here> and is greater than 10".

function exercise1(num1) {
  var answer1 = "num1 is small";
  // ------------------------------------------
  // Write your code for exercise 1 below here:
  // ------------------------------------------
  if (num1 > 10) {
    answer1 = 20;
    console.log(`The value of num1 is ${num1} and is greater than 10`);
  }
  // ------------------------------------------
  // And above here
  // ------------------------------------------
  console.log(answer1);
  return answer1;
}
exercise1(11);

// EXERCISE 2.
// Write an if/else conditional statement that if given a number will assign
// a string value of:
// "<num2 value> is even" to `answer2`,
// if `num2` is even
// and a value of "<num2 value> is odd" to `answer2`,
// if `num2` is odd.
// ie. if num2 has a value of 4 then the message should read:
// "4 is even"

function exercise2(num2) {
  var answer2;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  if (num2 % 2 === 0) {
    answer2 = `${num2} is even`;
    console.log(answer2);
  } else {
    answer2 = `${num2} is odd`;
    console.log(answer2);
  }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer2;
}
exercise2(9);

// EXERCISE 3.
// Write an if/else if/else block such that if `num3` is positive, then
// answer3 is assigned the string value of:
// "<num3 value> is positive"
// if `num3` is negative, then the value should be:
// "<num3 value> is negative"
// otherwise if the value is zero it should return
// "<num3 value> is zero"

function exercise3(num3) {
  var answer3;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  if (num3 > 0) {
    answer3 = `${num3} is positive`;
  } else if (num3 < 0) {
    answer3 = `${num3} is nagative`;
  } else {
    answer3 = `${num3} is zero`;
  }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  console.log(answer3);
  return answer3;
}
exercise3(0);

// EXERCISE 4.
// Write an if/else statement such that if `varA` and `varB` are strings or
// numbers and they have equal values, then change the value of answer4 to
// "varA and varB are equal"
// otherwise assign a value of "varA and varB differ"

function exercise4(varA, varB) {
  var answer4;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  if (typeof varA === typeof varB) {
    answer4 = "varA and varB are equal";
  } else {
    answer4 = "varA and varB differ";
  }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  console.log(answer4);
  return answer4;
}
exercise4("noi", 10);

// EXERCISE 5.
// In exercise 4, what are some of the unexpected cases where `varA` and `varB`
// seemed like they are equal, but would not pass the tests? In your analysis
// consider other data types beside strings and variables.

// EXERCISE 6.
// Here, assign the value of true to answer6 if:
// `varA` and `varB` are equal, but `varA` or `varB` does not equal `varC`
// in the event this is not the case, change the value of answer6 to false
function exercise6(varA, varB, varC) {
  var answer6 = "unassigned";
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  if (typeof varA === typeof varB) {
    answer6 = true;
  } else if (typeof varC !== typeof varA || typeof varB) {
    answer6 = false;
  }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  console.log(answer6);
  return answer6;
}
exercise6("yes", 6, 10);

// EXERCISE 8.
// Use a switch conditional statement with case clauses such that if `num7` is
// a number and it has a value of 1 that `answer7` is assigned the string:
// "You won!"
// if num7 is 7, then answer7 should be:
// "You are lucky!"
// if num7 is 101, then answer7 should be:
// "Welcome to coding 101!"
// if num7 is 1000000, then answer7 should be:
// "You are one in a million!"
// Othewise, assign answer7 a value of:
// "Thanks for that!"

function exercise7(num7) {
  var answer7;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  switch (num7) {
    case 1:
      answer7 = "You won!";
      break;

    case 7:
      answer7 = "You are lucky!";
      break;

    case 101:
      answer7 = "Welcome to coding 101!";
      break;

    case 1000000:
      answer7 = "You are one in a million!";
      break;

    default:
      answer7 = "Thanks for that!";
  }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  console.log(answer7);
  return answer7;
}
exercise7(10000);

// EXERCISE 8.
// Using any conditional assign the value of true to answer8 if:
// the values of amount 1 and amount2 are between the values of
// minimum and maximum
// if not, assign a value of false to answer8
function exercise8(amount1, amount2, minimum, maximum) {
  var answer8;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  if (amount1 + amount2 >= minimum && maximum) {
    answer8 = true;
  } else {
    answer8 = false;
  }
  // console.log("amount1 + amount2: " + (amount1 + amount2));
  // console.log("minimum " + minimum);
  // console.log("maximum " + maximum);
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  console.log(answer8);
  return answer8;
}
exercise8(10, 5, 20, 60);

// EXERCISE 9.
// In this exercise, if `item` is a number, follow the rules given in Exercise 7
// except that `answer7` is replaced by `answer9`
// If `item` is not a number, then assign a value to answer9 of:
// "Please send a number, that was a <data type>."
// for example, if item===true, the value should be:
// "Please send a number, that was a boolean."
function exercise9(item) {
  var answer9;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  function exercise9(item) {
    var answer9;
    // --------------------------------------------
    if (typeof item === "number") {
      console.log(`${item} is a number. Thanks for that!`);
    } else {
      console.log(`${item} is not a number. Please send a number!`);
    }
    // --------------------------------------------
    return answer9;
  }
  exercise9(10);
  exercise9("Hi");
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer9;
}

// EXERCISE 10.
// This is question is a modified version of a classic programming question
// called "Fizz Buzz"
// Using a conditional, assign a value of:
// "Fizz" to `answer10` if the value of `num10` is divisible by 3
// "Buzz" to `answer10` if the value of `num10` is divisible by 5
// "Fizz Buzz" to `answer10` if the value of `num10` is divisible by 15
// and if none of these conditions are satisfied, then assign the value of
// `num10` to `answer10`

function exercise10(num10) {
  var answer10;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  function exercise10(num10) {
    var answer10;
    // --------------------------------------------
    if (num10 % 15 === 0) {
      console.log("Fizz Buzz");
    } else if (num10 % 3 === 0) {
      console.log("Fizz");
    } else if (num10 % 5 === 0) {
      console.log("Buzz");
    } else console.log(`The number ${num10} cannot be divided by 3, 5, or 15`);

    // --------------------------------------------
    return answer10;
  }
  exercise10(60);
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer10;
}

// Congrats, you made it to the end! You rock!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
// These questions are not easy. The one I had trouble with, I used the combination of note I took while learning javascript and google for referances.

// Email your file to us or commit your file to GitHub and email us a link.
