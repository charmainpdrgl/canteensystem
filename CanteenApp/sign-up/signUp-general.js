

function validateName() {
    if(firstNameInput.validity.patternMismatch || firstNameInput.validity.valueMissing) {
        
        alert("Please enter a valid first name");
        firstNameError.textContent = "Please enter a first name between 2 and 50 characters (letters only.)"
        firstNameInput.classList.add("invalid");
        return;
    }
    
    else {
        firstName = firstNameInput.value;
        //clear any values and css for the error display
        firstNameError.textContent = "";
        firstNameInput.classList.remove("invalid");
        firstNameInput.classList.add("valid");
        
        
    }
    /*
    if (lastNameInput.validity.patternMismatch || lastNameInput.validity.valueMissing) {
        alert("Please enter a valid last name");
        lastNameError.textContent = "Please enter a last name between 2 and 50 characters (letters only).";
        lastNameInput.classList.add("invalid");
        return;
    }
    
    else {
        lastName = lastNameInput.value;
        //clear any values and css for the error display
        lastNameError.textContent = "";
        lastNameInput.classList.remove("invalid");
        lastNameInput.classList.add("valid");
    } 
    */
}

function validatePassword() {
    
    /*if(passwordInput.validity.patternMismatch || passwordInput.validity.valueMissing) {
        
        alert("Please enter a valid password");
        passwordError.textContent = "Please enter a password between 8 and 50 characters (letters and numbers)"
        passwordInput.classList.add("invalid");
        return;
    }
    
    else {
        password = passwordInput.value;
        //clear any values and css for the error display
        passwordError.textContent = "";
        passwordInput.classList.remove("invalid");
        passwordInput.classList.add("valid");
        
        
    }*/
    
    if(passwordInput == passwordInput2) {
        password = passwordInput.value;
        //clear any values and css for the error display
        passwordError.textContent = "";
        passwordInput.classList.remove("invalid");
        passwordInput.classList.add("valid");
        
    }
    
    else {
        
        alert("Your Passwords do not match. Please try again.");
        passwordError.textContent = "Your passwords do not match please re-enter your passwords";
        passwordInput.classList.add("invalid");
        return;
        
    }
    
}
