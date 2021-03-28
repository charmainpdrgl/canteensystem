// DOM elements
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


// setup materialize components - this would be different for Bootstrap
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  //M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  //M.Collapsible.init(items);

});
