"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let myBalance = 3000; //dollars
let myPin = 6250;
let pinCord = await inquirer_1.default.prompt([
    {
        name: "pinNumber",
        message: "Enter your pin",
        type: "number",
    }
]);
if (pinCord.pinNumber === myPin) {
    console.log("correct pin number");
}
else {
    console.log("inCorrect pin number");
}
let operationAns = await inquirer_1.default.prompt([
    {
        name: "opeartion",
        message: "Select one option",
        type: "list",
        choices: ["withDraw", "check balance"]
    }
]);
console.log(operationAns);
if (operationAns.opeartion === "withDraw") {
    const amountAns = await inquirer_1.default.prompt([
        {
            name: "amount",
            message: "Enter your amount",
            type: "number",
        }
    ]);
    myBalance -= amountAns.amount;
    console.log("your remaining balance is :" + myBalance);
}
else if (operationAns.opeartion === "check balance") {
    console.log("your balance is :" + myBalance);
}
