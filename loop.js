// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code. 
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
num = 1;
while (num <= 5) {
  console.log(num);
  num++;
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
num1 = 1;
do {
  console.log(num1);
  num1++;
} while (num1 <= 5);


// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for (let i = 1; i <= 5; i++) {
  console.log(i);


// Exercise 4. Now we want a loop that prints the integers 
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

// count 10 1 while..loop
  num = 10;
  while (num >= 1) {
    console.log(num);
    num--;
  }

// count 10-1 do..while..loop
  num1 = 10;
  do {
    console.log(num1);
    num1--;
  } while (num1 >= 1);

// count 10 -1 for..loop
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }


// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this 
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

  // count 7 -27 while..loop
  num = 7;
  while (num <= 27) {
    console.log("while " + num);
    num++;
  }

  // count 7 -27 do..while..loop
  num1 = 7;
  do {
    console.log("do " + num1);
    num1++;
  } while (num1 <= 27);

  // count 7 -27 for..loop
  for (let i = 7; i <= 27; i++) {
    console.log("for" + i);
  }


// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc. 
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

  // prints numbers between 0 and 100 that can be devided by 10 with while..loop
  num = 10;
  while (num <= 100) {
    if (num % 10 === 0) {
      console.log("while and modular " + num);
    }
    num++;
  }

  // prints numbers between 0 and 100 that can be devided by 10 with  do..while..loop
  num1 = 10;
  do {
    if (num1 % 10 === 0) {
      console.log("do and modular " + num1);
    }
    num1++;
  } while (num1 <= 100);

  // prints numbers between 0 and 100 that can be devided by 10 with  with for..loop
  for (let i = 10; i <= 100; i++) {
    if (i % 10 === 0) {
      console.log("modular " + i);
    }
  }

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will 
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

let counterFour = 1;
while (counterFour < 2) {
  console.log('HELP ME!')
  // the code below 'counterFour--, the initial value of counterFour will never be greater than 2
  //counterFour--;
  counterFour++;
}


// Exercise 8. Make a variable that contains your favorite integer. Write a loop 
// (your choice which type) that prints the integers from 0 to that number.

let myFavInteger = 15;
for (let i = 0; i <= myFavInteger; i++) {
  console.log(i);
}


// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's 
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

  let myFavInteger = 15;
  for (let i = 0; i <= 100; i++) {
    if (i === myFavInteger) {
      console.log(i + " my favorite number!");
    } else {
      console.log(i + " not my favorite number");
    }
  }


// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or 
// doing some research and write down your thoughts in a comment below:

// I am fell comfortable with for..loop, but there is time that while..loop needs to be use. For example, while..loop need to be used when we want the code run at least one time.

/*
From research 

while..loop and do..while loop
https://www.tutorialgateway.org/difference-between-javascript-while-and-do-while-loop/

  Do While loop and While loop looks similar, but they differ in their execution.
    - In While loop, condition is tested at the beginning of the loop and if the condition is True then only statements inside the loop will be executed. So, While loop executes the code block only if the condition is True.
    - In Do While loop, condition is tested at the end of the loop so, Do While executes the statements in the code block at least once even if the condition Fails.

for..loop
https://www.tutorialrepublic.com/javascript-tutorial/javascript-loops.php

    - The for loop repeats a block of code until a certain condition is met. It is typically used to execute a block of code for certain number of times.
*/


// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

// could not get the right answer

  for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
    for (let insideCounter = outsideCounter; insideCounter >= outsideCounter; insideCounter--) {
    console.log("inside", insideCounter);
  }
  console.log("***********************************")
}


// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you? 
// Please answer in a comment below.
//

// Email your file to us or commit your file to GitHub and email us a link.