let num1 = 0 //first user input
let num2 = //second user input
const operation = "" //user input for what function to call

const add = function(a,b) {
    return a+b;
}

const subtract = function(a,b) {
    return a-b;
}

const multiply = function(a,b){
    return a*b;
}

const divide = function(a,b){
    return a/b;
}

function operate(num1, num2, operation){
    if(operation === "multiply"){
        multiply(num1, num2);
    }
    else if(operation === "divide"){
        divide(num1, num2);
    }
    else if(operation === "add"){
        add(num1, num2);
    }
    else if(operation === "subtract"){
        subtract(num1, num2);
    }
}
