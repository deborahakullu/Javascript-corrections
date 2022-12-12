const nameError = document.getElementById("name-error");
const passwordError = document.getElementById("password-error");
const emailError = document.getElementById("email-error");
const submitError = document.getElementById("submit-error");

function validateName() {
    const name = document.getElementById("first-name").value;
    if (name.length === 0) {
        nameError.innerHTML = "please name is required";
        return false;
    }
    if (!name.match(/[A-Za-z]*\s[A-Za-z]*$/)) {
        nameError.innerHTML = "please name is required";
        return false;

    }
    nameError.innerHTML = '<i class="fa fa-check-square"></i>';
    return true;
}


function validatePassword() {
    const password = document.getElementById("password").value
    if (password.length === 0) {
        passwordError.innerHTML = "please password is required"
        return false;
    }
    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)) {
        
        passwordError.innerHTML = "please password is required";
        return false;

    }
    passwordError.innerHTML = '<i class="fa fa-check-square"></i>';
    return true;
}

function validateEmail() {
    const email = document.getElementById("email-address").value;
    if (email.length == 0) {
        emailError.innerHTML = "email is required";
        return false;
    }
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g)) {
        emailError.innerHTML = "email invalid";
        return false;

    }
    emailError.innerHTML = '<i class="fa fa-check-square"></i>';
    return true;
}
function validateForm(){
    if(!validateName()||!validateEmail()||!validatePassword()){
    
        submitError.innerHTML="please fill in all the values to submit";
        return false;
    }
}


