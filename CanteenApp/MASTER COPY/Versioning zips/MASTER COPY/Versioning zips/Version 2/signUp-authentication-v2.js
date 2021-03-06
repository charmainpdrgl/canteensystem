 /* Handles the sign in button press.*/ 
    /*function toggleSignIn() {
      if (firebase.auth().currentUser) {
          
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
          
        var email = document.getElementById('emailInput').value;
        var password = document.getElementById('passwordInput').value;
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 6) {
          alert('Please enter a password of at least 6 characters.');
          return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
          
        
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          document.getElementById('createAccountBtn').disabled = false;
          // [END_EXCLUDE]
        });
          
        
        // [END authwithemail]
      }
      document.getElementById('createAccountBtn').disabled = true;
    }
*/
    /**
     * Handles the sign up button press.
     */
    function handleSignUp() {
      var email = document.getElementById('emailInput').value;
      var password = document.getElementById('passwordInput').value;
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }
      // Create user with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END createwithemail]
    }

    /**
     * Sends an email verification to the user.
     */
    /*function sendEmailVerification() {
      // [START sendemailverification]
      firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent! Please check your email and click the link before logging in');
        // [END_EXCLUDE]
      });
      // [END sendemailverification]
    }
*/
    function sendPasswordReset() {
      var email = document.getElementById('emailInput').value;
      // [START sendpasswordemail]
      firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        alert('Password Reset Email Sent!');
        // [END_EXCLUDE]
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
          alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END sendpasswordemail];
    }

    /**
     * initApp handles setting up UI event listeners and registering Firebase auth listeners:
     *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
     *    out, and that is where we update the UI.
     */
    function initApp() {
      // Listening for auth state changes.
      // [START authstatelistener]
      firebase.auth().onAuthStateChanged(function(user) {
        
        if (user) {
            
            if(!user.emailVerified){
              sendEmailVerification();
              
          }
            
            else{
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // [START_EXCLUDE]
          //document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
          //document.getElementById('createAccountBtn').textContent = 'Sign out';
          document.getElementById('quickstart-account-details').textContent = 'You are signed is as '+email+'. Your email verification state is: '+emailVerified;
            }
          // [END_EXCLUDE]
        } else {
          // User is signed out.
          // [START_EXCLUDE]
          //document.getElementById('createAccountBtn').textContent = 'Sign in';
          // [END_EXCLUDE]
        }
        // [START_EXCLUDE silent]
        document.getElementById('createAccountBtn').disabled = false;
        // [END_EXCLUDE]
      });
      // [END authstatelistener]

      //document.getElementById('createAccountBtn').addEventListener('click', toggleSignIn, false);
      document.getElementById('createAccountBtn').addEventListener('click', handleSignUp, false);
      //document.getElementById('quickstart-verify-email').addEventListener('click', sendEmailVerification, false);
      //document.getElementById('createAccountBtn').addEventListener('click', sendPasswordReset, false);
    }
    

    window.onload = function() {
      initApp();
    };
