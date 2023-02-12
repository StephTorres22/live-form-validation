/* get inputs

validity check for each*/
const form = document.querySelector('.formExercise');
const firstName = form.querySelector('#firstName');
const surname = form.querySelector('#surname');
const email = form.querySelector('#userEmail');
const password = form.querySelector('#userPassword');
const passwordConfirmation = form.querySelector('#passwordConfirmation');

const textRegex = /([A-Z])\w*/g
/* Need to look up regex, this useing a group with a range of A-Z followed by any word */


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