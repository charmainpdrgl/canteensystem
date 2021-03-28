

  
// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
      setupUI(user);
  } else {
    setupUI();
  }
});

// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = signupForm['emailInput'].value;
  const password = signupForm['passwordInput'].value;
  const password2 = signupForm['passwordInput2'].value;
  console.log(password, password2);

  if(password!=password2){
    signupForm.querySelector('#password-error').innerHTML ="Passwords do no match - try again";
    return;
  }

  else {


  // sign up the user & add firestore data
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    
    return db.collection('users').doc(cred.user.uid).set({
      fname: signupForm['signup-fname'].value,
      lname: signupForm['lastNameInput'].value,
      email: email,
      studentID: signupForm['studentIDInput'].value,
      balance: 0
    });
  }).then(() => {
    //close the signup modal & reset form
    auth.currentUser.sendEmailVerification().then(function() {
      auth.signOut();
    });
    const modal = document.querySelector('#modal-signup');
    //M.Modal.getInstance(modal).close();
    $('#modal-login').modal('hide');
    signupForm.reset();
    signupForm.querySelector('#password-error').innerHTML = '';
    alert('Email Verification Sent! Please check your email and click the link before logging in');
  }).catch(err => {
    signupForm.querySelector('#password-error').innerHTML = err.message;
  });

  }
});


// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});

// login
const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;
    
  

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(email, password);
    const verified = cred.user.emailVerified;
    if (!verified){
      alert('You have not verified your email');
      auth.signOut();
    }
      
      console.log(verified);
    // close the signup modal & reset form
    $('#modal-signup').modal('hide');
    loginForm.reset();
    
  }).catch(err => {

    if(err.code == 'auth/user-not-found'){
      loginForm.querySelector('#loginError').innerHTML = "User not found - check your email address and try again";
    }
    else if(err.code == 'auth/wrong-password'){
      loginForm.querySelector('#loginError').innerHTML ="Incorrect password - try again";
    }
    else {
      loginForm.querySelector('#loginError').innerHTML = err.message;
    }
    console.log(err);
    return(err);

  });

});
