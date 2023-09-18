function calculate() {
  // // Arrays
  // 1. create an operation array using *, -, +, /
  const operationArray = ["*", "-", "+", "/"];
  console.log("Operation array", operationArray);

  // const operationArray = ['+', '-', '*', '/'];
  // console.log('Operation Array: ', operationArray);

  // // Objects
  // 1. Create an object that grabs numberOne, numberTwo, and the operation from the user input in key/value pairs

  const userInput = {
    numberOne: prompt("Input a number"),
    numberTwo: prompt("Give me another number"),
    operation: prompt("What operation are we doing today?")
  };
  console.log("User input:", userInput);
  // const userInput = {
  //   numberOne: prompt('Input a number'),
  //   numberTwo: prompt('Input another number'),
  //   operation: prompt('What operation would you like to do?')
  // };
  // console.log('User input: ', userInput);

  // // Logic
  // 1. create a logic statement for the operation
  //  * check if the user input is included in the operations array
  //    * if so, console log the operation the user entered
  //    * if not, return "Please fix the calculation"
  if (
    userInput.operation === operationArray[0] ||
    userInput.operation === operationArray[1] ||
    userInput.operation === operationArray[2] ||
    userInput.operation === operationArray[3]
  ) {
    console.log(userInput.operation);
  } else {
    console.log("Please fix the calculation");
  }

  //   if (
  //     operationArray[0] === userInput.operation ||
  //     operationArray[1] === userInput.operation ||
  //     operationArray[2] === userInput.operation ||
  //     operationArray[3] === userInput.operation
  //   ) {
  //     console.log(userInput.operation);
  //   } else {
  //     console.log('Please fix the calculation');
  //   }
  answer(userInput.numberOne, userInput.numberTwo, userInput.operation);
  // }

  // 3. Create a logic statment for the numbers
  //  * check if the user input is a number (use isNaN() method)
  //    * if so, console log the numbers the user entered
  //    * if not, return "Please use numbers in the calculation";
  function answer(num1, num2, operator) {
    if (isNaN(num1) || isNaN(num2)) {
      console.log("Please use numbers in the calculation");
    } else {
      if (operator === "+") {
        console.log(Number(num1) + Number(num2));
      } else if (operator === "*") {
        console.log(Number(num1) * Number(num2));
      } else if (operator === "-") {
        console.log(Number(num1) - Number(num2));
      } else if (operator === "/") {
        console.log(Number(num1) / Number(num2));
      }
    }

    // function answer(num1, num2, operator) {
    //   if (isNaN(num1) || isNaN(num2)) {
    //     console.log('Please use numbers in the calculation');
    //   } else {
    //     // 2. Create logic statements for each operator (*, +, -, /)
    //     if (operator === '+') {
    //       console.log(Number(num1) + Number(num2));
    //     } else if (operator === '*') {
    //       console.log(Number(num1) * Number(num2));
    //     } else if (operator === '-') {
    //       console.log(Number(num1) - Number(num2));
    //     } else if (operator === '/') {
    //       console.log(Number(num1) / Number(num2));
    //     }
  }
}

// // Functions
// 4. Put these logic statements into functions so that they do not run automatically
//    * create a function called answer that accepts the user input as 3 arguments: num1, num2, operator
//    * create a function called calculate that grabs the user value and pass them to the answer function.

// 5. Run the program and console log the answer
calculate();

/////////////////////////
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //
// // ANSWER KEY BELOW //

// //*****************************************//
// // ANSWER KEY //
// //*****************************************//

// const calculate = () => {
//   const userInput = {
//     firstNum: prompt("What is the first number? "),
//     secondNum: prompt("What is the second number? "),
//     operation: prompt("What is the calculation? ")
//   };

//   const operationsArray = ["*", "-", "+", "/"];

//   if (operationsArray.includes(userInput.operation)) {
//     return answer(userInput.firstNum, userInput.secondNum, userInput.operation);
//   }

//   return "Please fix the calculation";
// };

// const answer = (num1, num2, operator) => {
//   // ensure that the we get numbers
//   if (isNaN(num1) || isNaN(num2)) {
//     return "Please use numbers in the calculation";
//   }
//   if (operator === "*") {
//     return Number(num1) * Number(num2);
//   }
//   if (operator === "/") {
//     return Number(num1) / Number(num2);
//   }
//   if (operator === "+") {
//     return Number(num1) + Number(num2);
//   }
//   if (operator === "-") {
//     return Number(num1) - Number(num2);
//   }
// };

// console.log(calculate());
