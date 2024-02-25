

let inputField = document.getElementById('input-field')
let value = document.getElementById('rangeValue')
let errorMessage = document.querySelector('.try-again')
let answer = document.getElementById('answer');


function enterNumber() {
    if(inputField.value == 0) {
        inputField.value = value.innerHTML;
    } else {
        inputField.value += value.innerHTML;
    }
}

function clearOne() {
    let str = inputField.value;
    inputField.value = str.slice(0, str.length - 1)
}

function clearAll() {
    inputField.value = ''
}

function operation(op) {
    inputField.value += op;
}

function equal() {
    if(inputField.value.includes('+') || inputField.value.includes('-') || inputField.value.includes('*') || inputField.value.includes('/')) {
        document.querySelector('.captcha').style.display = 'block'
        document.getElementById('equation').innerText = inputField.value;
        inputField.value = eval(inputField.value)
    } else {
        inputField.value = ''
        
    }
    
}



function submitCaptcha() {
    if (answer.value == eval(inputField.value)) {
        document.querySelector('.captcha').style.display = 'none'
        errorMessage.style.display = 'none';

    } else {
        errorMessage.style.display = 'block'
    }

    answer.value = '';
}
