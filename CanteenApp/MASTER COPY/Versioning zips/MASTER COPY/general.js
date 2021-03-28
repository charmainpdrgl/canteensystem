/*

function validateFName() {
    if(firstNameInput.validity.patternMismatch || firstNameInput.validity.valueMissing) {
        
        alert("Please enter a valid first name");
        firstNameError.textContent = "Please enter a first name between 2 and 50 characters (letters only.)";
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
}

function validateLName() {
    
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
 
}

function validatePassword() {
    
       if(passwordInput.validity.patternMismatch || passwordInput.validity.valueMissing) {
        
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
        
        
    }
    
    if(passwordInput.value == passwordInput2.value) {
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
*/

// DOM elements

const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setupUI = (user) => {
  if (user) {
    
    // if the user is logged in get the account info from Firebase and display them in the account modal
    db.collection('users').doc(user.uid).get().then(doc => {
      const html = `
        <div>Email: ${user.email}</div>
        <div>Name: ${doc.data().fname} ${doc.data().lname}</div>
        <div>Student ID: ${doc.data().studentID}</div>
        <div>Current Balance: ${doc.data().balance}</div> 
      `;
      accountDetails.innerHTML = html;
    });
    // toggle user UI Navigation elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    // the user is logged out so clear account info
    accountDetails.innerHTML = '';
    // toggle user UI Navigation elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};

/*
// setup materialize components - this would be different for Bootstrap
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});
*/

/*js for order form collapsible menus*/
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
