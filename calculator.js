let num1 = ""; //first user input
let num2 = "";//second user input
let operation = ""; //user input for what function to call
let ans = "";
let danglingOperation="";
const operators = ["+", "-", "x", "÷", "="];

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");


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

function clear(){
    display.textContent = "";
    ans = "";
    operation = "";
    danglingOperation = "";
    num1 = "";
    num2 = "";
}

function operate(num1, num2, operation){
    if(operation === "x"){
       return multiply(num1, num2);
    }
    else if(operation === "÷"){
        return divide(num1, num2);
    }
    else if(operation === "+"){
        return add(num1, num2);
    }
    else if(operation === "-"){
        return subtract(num1, num2);
    }
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const pressed = button.textContent;
    const hasOperator = display.textContent.includes("+")
        ||display.textContent.includes("-")
        ||display.textContent.includes("x")
        ||display.textContent.includes("÷");

    if(pressed === "Clear"){
        clear();
    }//working on this rn: 
    else if(display.textContent != "" && ans!="" && !operators.includes(pressed)){
        num1 = parseFloat(display.textContent);
        display.textContent = pressed; 
        ans = "";
    }
    else if(num1 !=="" && operators.includes(pressed)){
            num2 = parseFloat(display.textContent);
            operation = danglingOperation;
            display.textContent = operate(num1, num2, operation);
            ans = parseFloat(display.textContent);
            operation = "";
            if (pressed !== "="){
                danglingOperation = pressed;
            }
            else {
                danglingOperation = "";
            }
    }
    else if((ans !== "") && operators.includes(pressed)){ 
        num1 = parseFloat(ans); //store ans in num 1
        danglingOperation = pressed; //store the operation pressed in danglingOperation
        display.textContent = "";
        ans="";
    }
    else if(pressed === "=" && !hasOperator && ans===""){
        ans = parseFloat(display.textContent); //just stores ans if no Operator and no ans
    }
    else if(pressed === "=" && !hasOperator){
        num1 = ans;
        operation = danglingOperation;
        num2 = display.textContent;
        display.textContent = operate(num1, num2, operation);

        ans = display.textContent;
        display.textContent = "";
    }
    //if an operator is pressed and an operator is already on the display
    // run an operation. 
    else if(operators.includes(pressed) && hasOperator){
        
        expression = display.textContent;
        const parts = expression.split(/([\+\-\x\÷])/);

        num1 = parseFloat(parts[0]);       
        operation = parts[1];  
        num2 = parseFloat(parts[2]);

        display.textContent = operate(num1, num2, operation);
        ans = parseFloat(display.textContent); 
        num1 = "";

        // if the pressed operator is not "=", store it in danglingOperator
        if (pressed !== "="){
            danglingOperation = pressed;
        }
    }
    else{
    display.textContent += pressed;
    }
});
});