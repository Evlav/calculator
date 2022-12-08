
add = (a,b) => Number(a) + Number(b);

subtract = (a,b) => Number(a) - Number(b);

function multiply (a,b) {
    a = Number(a);
    b = Number(b);

    if (a == 0 || b == 0){
        return 0
    }
    else {
        return a * b;
    }
}

function divide (a,b) {
    a = Number(a);
    b = Number(b);

    if (b == 0){
        return undefined
    }
    else if (a == 0){
        return 0
    }
    else {
        return a / b;
    }
}

function operate(operator, a, b){
    if (operator == '+'){
        return add(a,b);
    }
    else if (operator == '-'){
        return subtract(a,b);
    }
    else if (operator == 'x'){
        return multiply(a,b);
    }
    else if (operator == '/'){
        return divide(a,b);
    }
    else{
        console.log("invalid operator")
        return undefined;
    }
}

function display(value){
    let digits = 0;
    let wholes = 0;
    let decimals = 0;
    let howmany = 0;
    if (value > 99999999999999999999){
        var s = String(value).split('.');
        wholes = s[0];
        decimals = s[1];

        var q = String(decimals).split('e');

        screen.textContent = wholes + '.' + decimals.slice(0, 1) + 'e' + q[1];
    }
    else if (value > 99999999999){
        let firstpart =  String(value)[0] + '.' + String(value)[1] + String(value)[2];
        screen.textContent = firstpart + '*10^' + (String(value).length -1); 
    }
    else if (value % 1 != 0){
        var s = String(value).split('.');
        wholes = s[0];
        decimals = s[1];
        howmany = 10 - wholes.length - decimals.length;
        screen.textContent = wholes + '.' + decimals.slice(0, howmany);
    }
    else{
        screen.textContent = value;
    }

    
}

//main
// const buttonContainer = document.querySelector("#buttonContainer");
// const collumnList = buttonContainer.querySelectorAll(".collumn");
// const button = document.createElement('div');
// button.setAttribute('class', 'button');

// for (let i = 0; i < 3; i++){
//     collumnList[i].appendChild(button)
// }

const screen = document.getElementById("numbers");
var displayvalue = '';
screen.textContent = displayvalue;
var operation;
var firstnum = 0;
var secondnum = 0;
var aftercalc = false;


buttonList = ['1','2','3','4','5','6','7','8','9','0']

buttonList.forEach(element => {
    var thisone = document.getElementById(element);
    
    thisone.addEventListener('click', function() {
        if (aftercalc == true){
            displayvalue = '';
            firstnum = 0;
            secondnum = 0;
            aftercalc = false;
        }
        if (String(displayvalue).length <= 10 ){
            displayvalue = displayvalue + element;
            screen.textContent = displayvalue;
            
        }
        


            
    });
});

operationList = ['+', '-', 'x', '/']

operationList.forEach(element => {
    var thisone = document.getElementById(element);
    thisone.addEventListener('click', function() {
        if (firstnum == 0){
            firstnum = displayvalue;
            console.log(firstnum);
        }
        operation = element;
        displayvalue = '';
        screen.textContent = element;
        aftercalc = false;
        console.log(operation);
    });
});

const clear = document.getElementById('c');
clear.addEventListener('click', function(){
    displayvalue = '';
    firstnum = 0;
    secondnum = 0;
    screen.textContent = displayvalue;
    aftercalc = false;

})

const equals = document.getElementById('=');
equals.addEventListener('click', function(){
    secondnum = displayvalue;
    console.log(secondnum);

    let result = operate(operation, firstnum, secondnum);
    if (result == undefined){
        displayvalue = '';
        screen.textContent = 'ERROR';
        aftercalc = true;
    }
    else{
        console.log(result);
        displayvalue = result;
        display(result);
        firstnum = displayvalue;
        secondnum = 0;
        aftercalc = true;
    }
    
});

//round digits so max digits fit the screen
//undo button
//keyboard support