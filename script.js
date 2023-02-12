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

/* email.addEventListener('input', (e) =>{
    if(email.validity.typeMismatch){
        email.setCustomValidity("Please enter a valid email address.");
    } else {
        email.setCustomValidity('');
    }
}) */

/* firstName.addEventListener('input', (e) => {
    if(textRegex.test(firstName.value) == false){
        firstName.setCustomValidity('Please enter in your name');
    } else {
        firstName.setCustomValidity('');
    }
}) */


/* surname.addEventListener('input', (e) => {
    if(textRegex.test(surname.value) == false){
        surname.setCustomValidity('Please enter in your surname');
    } else {
        surname.setCustomValidity('');
    }
})
 */
/* PASSWORD VALIDATION FUNCTIONS */

function hasDesiredCharacters(desiredNum, regex, string){

    let actualNumber = 0;

    if(regex.test(string) == true){
        for(let i=0; i<string.length; i++){
            if(regex.test(string[i])){
                actualNumber++;
            }
        }
    }

    if(actualNumber >= desiredNum){
        return true
    } else {
        return false
    }
}

function isCorrectLength(num, string){
    return (string.length >= num);
}

function setTextGreen(element){
    element.style.color = 'green';
}

function setTextRed(element){
    element.style.color = 'red';
}



/* PASSWORD VALIDATION;

    MUST BE ATLEAST 8CHARACTERS
    CONTAIN A NUMBER, this will need thinking to check if string contains digit?
    CONTAIN A CAPITALISED LETTER
    WOULD BE COOL TO GET THE TICK AND CROSS THING GOING ON*/

password.addEventListener('input', (e) => {

    const length = 8;
    const capNum = 1;
    const digNum = 1;

    const value = e.target.value

    if((isCorrectLength(length, value) !== true) && (hasDesiredCharacters(digNum, numbersRegex, value) !== true) && (hasDesiredCharacters(capNum, capitalRegex, value) !== true)){
        password.setCustomValidity(`Password must be atleast ${length} characters long, contain atleast ${digNum} digit and atleast ${capNum} capitalised letter.`)
        setTextRed(passwordLength);
        setTextRed(passwordCapital);
        setTextRed(passwordDigit);
    } else if((hasDesiredCharacters(digNum, numbersRegex, value) !== true) && (hasDesiredCharacters(capNum, capitalRegex, value) !== true) && (isCorrectLength(length, value) == true)){
        password.setCustomValidity(`Password must contain atleast ${digNum} digit and ${capNum} capitalised letter`);
        setTextGreen(passwordLength);
    } else if((hasDesiredCharacters(digNum, numbersRegex, value) !== true) && (hasDesiredCharacters(capNum, capitalRegex, value) == true ) && (isCorrectLength(length, value) == true)){
        password.setCustomValidity(`Password must have atleast ${digNum} digit.`);
        setTextRed(passwordDigit);
        setTextGreen(passwordLength);
        setTextGreen(passwordCapital);
    } else if((hasDesiredCharacters(digNum, numbersRegex, value) == true) && (hasDesiredCharacters(capNum, capitalRegex, value) == true) && (isCorrectLength(length, value) !== true)){
        password.setCustomValidity(`Password must be atleast ${length} characters long.`);
        setTextGreen(passwordDigit);
        setTextGreen(passwordCapital);
        setTextRed(passwordLength);
    } else if((hasDesiredCharacters(digNum, numbersRegex, value) == true) && (hasDesiredCharacters(capNum, capitalRegex, value) !== true) && (isCorrectLength(length, value) !== true)){
        password.setCustomValidity(`Password must be atleast ${length} characters long and contain atlease ${capNum} capital letters`);
        setTextGreen(passwordDigit);
        setTextRed(passwordCapital);
        setTextRed(passwordLength);
    } else if((hasDesiredCharacters(digNum, numbersRegex, value) == true) && (hasDesiredCharacters(capNum, capitalRegex, value) !== true) && (isCorrectLength(length, value) == true)){
        setTextGreen(passwordDigit);
        setTextGreen(passwordLength);
        setTextRed(passwordCapital);
        password.setCustomValidity(`Password must contain atleast ${capNum} capital letters`);
    } else if((isCorrectLength(length, value)) == true && (hasDesiredCharacters(digNum, numbersRegex, value)) == true && (hasDesiredCharacters(capNum, capitalRegex, value)) == true){
        setTextGreen(passwordLength);
        setTextGreen(passwordCapital);
        setTextGreen(passwordDigit);
        password.setCustomValidity('');
    }

    /* VERY LONG IF ELSE BLOCK... IS THERE A BETTER WAY? */

})

passwordConfirmation.addEventListener('input', (e) => {
    if(passwordConfirmation.value !== password.value){
        passwordConfirmation.setCustomValidity('Passwords do not match! Please try again');
    } else {
        passwordConfirmation.setCustomValidity('');
    }
})