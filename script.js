// Basic operation functions
const add = (n1, n2) => n1 + n2;
const subtract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => n1 / n2;

// generic operation function
function operate(n1, operator, n2) {
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

const displayText = document.querySelector('.display');
let btnContainer = document.querySelector('.btn-container-grid').children;
btnContainer = [...btnContainer];  // Turn list node into array

btnContainer.forEach(btn => {
    btn.addEventListener('click', handleClickBtn);
});


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
            // compute and show last result
            break;
        
        default:
            displayText.innerText += btnText;
    }
}

function clearDisplay(){
    displayText.innerText = '';
}

function deleteDisplay(){
    displayText.innerText = displayText.innerText.slice(0, displayText.innerText.length - 1);
}