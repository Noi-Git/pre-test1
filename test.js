// function exercise1(num1) {
//   var answer1;
//   answer1 = "num1 is small";
//   var num1 = 11;

//   if (num1 > 10) {
//     answer1 += "The value of num1 is ${num1} and is greater than 10";
//     console.log(answer1);
//   }
//   return answer1;
// }
// console.log(answer1);
// couldn't get the right answer
for (let outsideCounter = 1; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (
    let insideCounter = outsideCounter + 2;
    insideCounter >= outsideCounter;
    insideCounter--
  ) {
    console.log("inside", insideCounter);
  }
  console.log("***********************************");
}
