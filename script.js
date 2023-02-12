/* get inputs

validity check for each*/

/* checking valid formation of postal code for each country might be more complex than i wanted 

MIGHT GET RID OF COUNTRY AND POSTCODE...*/
const form = document.querySelector('.formExercise');
const firstName = form.querySelector('#firstName');
const surname = form.querySelector('#surname');
const email = form.querySelector('#userEmail');
const password = form.querySelector('#userPassword');
const passwordConfirmation = form.querySelector('#passwordConfirmation');
const county = form.querySelector('#country');
const postcode = form.querySelector('#postcode');
const passwordLength = form.querySelector('.pc--length');
const passwordDigit = form.querySelector('.pc--digit');
const passwordCapital = form.querySelector('.pc--capital');

const numbersRegex = /\d/;
const capitalRegex = /[A-Z]/;
const textRegex = /([A-Z])\w*/g;
/* Need to look up regex, this useing a group with a range of A-Z followed by any word */

/* if(county.value == null){
    county.classList.add(':invalid');
} DOESN'T WORK HOW I WOULD LIKE. */

email.addEventListener('input', (e) =>{
    if(email.validity.typeMismatch){
        email.setCustomValidity("Please enter a valid email address.");
    } else {
        email.setCustomValidity('');
    }
})

firstName.addEventListener('input', (e) => {
    if(textRegex.test(firstName.value) == false){
        firstName.setCustomValidity('Please enter in your name');
    } else {
        firstName.setCustomValidity('');
    }
})


surname.addEventListener('input', (e) => {
    if(textRegex.test(surname.value) == false){
        surname.setCustomValidity('Please enter in your surname');
    } else {
        surname.setCustomValidity('');
    }
})

/* PASSWORD VALIDATION;

    MUST BE ATLEAST 8CHARACTERS
    CONTAIN A NUMBER, this will need thinking to check if string contains digit?
    CONTAIN A CAPITALISED LETTER
    WOULD BE COOL TO GET THE TICK AND CROSS THING GOING ON*/

password.addEventListener('input', (e) => {

  

    if(numbersRegex.test(password.value) == false){
        password.setCustomValidity('Password must contains atleast one digit.');
    } else {
        password.setCustomValidity('');
        passwordDigit.style.color = 'green';   
    }

    if(capitalRegex.test(password.value) == false){
        password.setCustomValidity('Password must contain a capital letter.');
    } else {
        password.setCustomValidity('');
        passwordCapital.style.color = 'green';
    }

    if(password.value.length < 8){
        password.setCustomValidity('Password must be atleast 8 characters.')
    } else {
        password.setCustomValidity('');
        passwordLength.style.color = 'green';
        /* this works */
    }

    /* skipping an if statement! */
})