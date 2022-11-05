const displayText = document.querySelector('.display');
let btnContainer = document.querySelector('.btn-container-grid').children;
btnContainer = [...btnContainer];  // Turn list node into array

btnContainer.forEach(btn => {
    btn.addEventListener('click', handleClickBtn);
});

// Flag for check for the need of clearing the display
let newDisplayFlag = false;

function checkNewDisplay() {
    if (newDisplayFlag)
    {
        clearDisplay();
        newDisplayFlag = false;
    }
}

// Basic operation functions
const add = (n1, n2) => n1 + n2;
const subtract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => n1 / n2;

// generic operation function
function operate(operation) {
    let n1 = parseFloat(operation.match(/([0-9]*[.])?[0-9]+[+\-*\/]/));
    let n2 = parseFloat(operation.match(/[+\-*\/]([0-9]*[.])?[0-9]+/)[0].slice(1));
    let operator = operation.match(/[+\-*\/]/)[0];

    switch (operator) {
        case '+':
            return add(n1, n2);
        case '-':
            return subtract(n1, n2);
        case '*':
            return multiply(n1, n2);
        case '/':
            return divide(n1, n2);
    }
}

function handleClickBtn() {

    const btnText = this.dataset['value'];

    switch (btnText) {
        case 'CLEAR':
            clearDisplay();
            break;
        
        case 'DEL':
            //delete last character on display
            deleteDisplay();
            break;
        
        case '=':
            let op = displayText.innerText;
            while(op.match(/([0-9]*[.])?[0-9]+[*\/]([0-9]*[.])?[0-9]+/)) {
                let result = operate(op.match(/([0-9]*[.])?[0-9]+[*\/]([0-9]*[.])?[0-9]+/)[0])
                op = op.replace(op.match(/([0-9]*[.])?[0-9]+[*\/]([0-9]*[.])?[0-9]+/)[0], result)
            }
            while(op.match(/([0-9]*[.])?[0-9]+[+\-]([0-9]*[.])?[0-9]+/)) {
                let result = operate(op.match(/([0-9]*[.])?[0-9]+[+\-]([0-9]*[.])?[0-9]+/)[0])
                op = op.replace(op.match(/([0-9]*[.])?[0-9]+[+\-]([0-9]*[.])?[0-9]+/)[0], result)
            }
            displayText.innerText = op;

            newDisplayFlag = true;
            break;
        
        default:
            if (!(btnText.match(/[+\-*\/]/))) {
                checkNewDisplay()
            }
            newDisplayFlag = false;
            displayText.innerText += btnText;
    }
}

function clearDisplay(){
    displayText.innerText = '';
}

function deleteDisplay(){
    displayText.innerText = displayText.innerText.slice(0, displayText.innerText.length - 1);
}
