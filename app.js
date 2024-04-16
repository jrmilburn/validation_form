const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

confirmPassword.addEventListener('input', (event) => {
    if (password.value !== confirmPassword.value){
        confirmPassword.validity.typeMismatch = false;
        confirmPassword.setCustomValidity("Passwords must match");
    } else {
        confirmPassword.validity.typeMismatch = true;
        confirmPassword.setCustomValidity("");
    }
});