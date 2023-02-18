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

/* PASSWORD VALIDATION FUNCTIONS */

function hasDesiredCharacters(desiredNum, regex, string, element, message){

    let actualNumber = 0;

    if(regex.test(string) == true){
        for(let i=0; i<string.length; i++){
            if(regex.test(string[i])){
                actualNumber++;
            }
        }
    }

    if(actualNumber >= desiredNum){
        setTextGreen(element);
        return true
    } else {
        setTextRed(element);
        password.setCustomValidity(`${message}`);

    }
}

function isCorrectLength(num, string, element){
    if (string.length >= num){
        setTextGreen(element);
        return true
    } else {
        setTextRed(element);
        password.setCustomValidity(`Password must contain atleast ${num} characters`);
    }
}

function setTextGreen(element){
    element.style.color = 'green';
}

function setTextRed(element){
    element.style.color = 'red';
}


password.addEventListener('input', (e) => {

    const length = 8;
    const capNum = 1;
    const digNum = 1;

    const capitalMessage = `Password must contain atleast ${capNum} capital letter(s)`;
    const numbersMessage = `Password must contain atleast ${digNum} number(s)`;

    const value = e.target.value /* or password.value */

    
    let isLongEnough = isCorrectLength(length, value, passwordLength);
    let hasEnoughCapitals = hasDesiredCharacters(capNum, capitalRegex, value, passwordCapital, capitalMessage);
    let hasEnoughNumbers = hasDesiredCharacters(digNum, numbersRegex, value, passwordDigit, numbersMessage);


    if((isLongEnough == true) && (hasEnoughCapitals == true) && (hasEnoughNumbers == true)){
        password.setCustomValidity('');
    }

    /* ALOT CLEANER THAN A MASSIVE IF ELSE BLOCK, ALSO CAN ADD SPECIAL CHARACTERS QUITE EASILY IF NEEDED */

   
})

passwordConfirmation.addEventListener('input', (e) => {
    if(passwordConfirmation.value !== password.value){
        passwordConfirmation.setCustomValidity('Passwords do not match! Please try again');
    } else {
        passwordConfirmation.setCustomValidity('');
    }
})