#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 50000; // Dollars
let myPinCode = 7890;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin",
    type: "number",
  },
]);

if (pinAnswer.pin === myPinCode) {
  console.log("Correct Pin Code!!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please Select one option:",
      type: "list",
      choices: ["withdraw", "check balance","fastCash"],
    },
  ]);

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      },
    ]);

    if (amountAns.amount <= myBalance) {
      myBalance -= amountAns.amount;
      console.log(`Your remaining balance is: ${myBalance}`);
    } else {
      console.log(`Insufficient Balance!!!`);
    }
  } else if (operationAns.operation === "check balance") {
    console.log(`Your Balance is: ${myBalance}`);
  } else if (operationAns.operation === "fastCash"){
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "list",
        choices: [1000,2000,5000,10000,20000],
      },
    ]);

    myBalance -= amountAns.amount;
    console.log(`Your remaining balance is: ${myBalance}`);
  }
} else {
  console.log("Incorrect Pin Code!!!");
}
