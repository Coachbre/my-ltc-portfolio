console.log("Calc JS connected!!");

// QuerySelectors
// 1. inside the calculate function, add the user input on the DOM by selecting the elements on the DOM

const btn = document.querySelector("#calculate");

function calculate() {
  // 1. grab the user input and set its value to an object
  const userInput = {
    firstNum: prompt("What is the first number? "),
    secondNum: prompt("What is the second number? "),
    operation: prompt("What is the calculation? ")
  };

  const operationsArray = ["*", "-", "+", "/"];

  if (operationsArray.includes(userInput.operation)) {
    // QuerySelectors
    document.querySelector("#firstNum").textContent = userInput.firstNum;
    document.querySelector("#secondNum").textContent = userInput.secondNum;
    document.querySelector("#calcType").textContent = userInput.operation;
    document.querySelector("#answer").textContent = answer(
      userInput.firstNum,
      userInput.secondNum,
      userInput.operation
    );
  }

  return "Please fix the calculation";
}

const answer = (num1, num2, operator) => {
  // ensure that the we get numbers
  if (isNaN(num1) || isNaN(num2)) {
    return "Please use numbers in the calculation";
  }
  if (operator === "*") {
    return Number(num1) * Number(num2);
  }
  if (operator === "/") {
    return Number(num1) / Number(num2);
  }
  if (operator === "+") {
    return Number(num1) + Number(num2);
  }
  if (operator === "-") {
    return Number(num1) - Number(num2);
  }
};

btn.addEventListener("click", calculate);

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
//   // Objects and arrays
//   // 1. grab the user input and set its value to an object
//   const userInput = {
//     firstNum: prompt("What is the first number? "),
//     secondNum: prompt("What is the second number? "),
//     operation: prompt("What is the calculation? ")
//   };

//   // 2. create an operation array
//   const operators = ["*", "/", "+", "-"];
//   // 3. check if the user input is included in the array if not, return "Please fix the calculation"
//   if (!operators.includes(userInput.operation)) {
//     return alert("Please fix the calculation");
//   }

//   // QuerySelectors
//   // 1. inside the calculate function, add the user input on the DOM by selecting the elements on the DOM
//   document.querySelector("#firstNum").textContent = userInput.firstNum;
//   document.querySelector("#secondNum").textContent = userInput.secondNum;
//   document.querySelector("#calcType").textContent = userInput.operation;
//   document.querySelector("#answer").textContent = answer(
//     userInput.firstNum,
//     userInput.secondNum,
//     userInput.operation
//   );
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

// // Event Listener
// // 1. add an event listener to the calculate button that runs the program
// document.querySelector("#calculate").addEventListener("click", calculate);
