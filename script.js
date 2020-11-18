let form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');

// show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show sucess outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// check valid email
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(input).toLowerCase());
    if(re.test(input.value.trim())){
        showSuccess(input);
    }
    else{
        showError(input, 'Email is not valid');
    }
}

// check required
function checkRequired(inputArr){
    inputArr.forEach(input => {
        if(input.value.trim() === ''){
            showError(input, `${input.id} is required`);
        }
        else {
            showSuccess(input);
        }
    });
}

// check input length
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${input.id} must be at least ${min} characters`)
    }
    else if (input.value.length > max){
        showError(input, `${input.id} must be less than ${max} characters`)
    }
    else {
        showSuccess(input);
    }
}

// check passwords match
function checkPasswordsMatch(input1, input2) {
    if(input1.value !== input2.value){
        showError(input2, 'Passwords do not match')
    }
}

// Event Listener
form.addEventListener('submit', function(e) {
    // console.log(username.value);

    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
});