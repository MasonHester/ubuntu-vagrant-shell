let operator = process.argv[2];
let firstNum = parseInt(process.argv[3]);
let secondNum = parseInt(process.argv[4]);

let result = "";

if(operator === "add") {
    result = firstNum + secondNum
}

else if(operator === "subtract") {
    result = firstNum - secondNum
}

else if(operator === "multiply") {
    result = firstNum * secondNum;
}

else if(operator === "divide") {
    result = firstNum / secondNum;
}

else if(operator === "remainder") {
    result = firstNum % secondNum;
}

else if(operator === "exponant") {
    result = Math.pow(firstNum, secondNum);
}

else {
    console.log("write better");
}

console.log(result);