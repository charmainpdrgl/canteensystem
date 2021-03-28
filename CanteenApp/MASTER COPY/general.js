hiddenTopUp.classList.add("hidden");
accountMatch.classList.add("true");

/*
// setup materialize components - this would be different for Bootstrap
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});
*/


    var today = new Date(); //get today's date

    var time = today.getTime(); // gets the time in 24 hour format

    if (time>8){ // if it is past 8am
        var tmrw = new Date(today); // initialise tmrw variable
        tmrw.setDate(tmrw.getDate()+1); // add one to todays date - will change months and year if applicable
        
    
        var day = tmrw.getDate(); //gets the day
        var month = tmrw.getMonth()+1; //gets the month - January is 0 so we need to add 1
        var year = tmrw.getFullYear(); //gets the four digit year

        if (day<10){
            day='0'+day; //add the leading 0 to create the correct date format
        }

        if (month<10){
            month='0'+month; //add the leading 0 to create the correct date format 
        }
        
        tmrw = year+'-'+month+'-'+day; //store tmrw's date as yyyy-mm-dd
        
       
        var maxOrderingDate = new Date(tmrw); // initialise max variable
        maxOrderingDate.setDate(maxOrderingDate.getDate()+1); // add one day to tommorows date - will change months and year if applicable
        
        var maxDay = maxOrderingDate.getDate(); //gets the day
        var maxMonth = maxOrderingDate.getMonth()+1; //gets the month - January is 0 so we need to add 1
        var maxYear = maxOrderingDate.getFullYear(); //gets the four digit year


        if (maxDay<10){
            maxDay='0'+maxDay; //add the leading 0 to create the correct date format
        }

        if (maxMonth<10){
            maxMonth='0'+maxMonth; //add the leading 0 to create the correct date format 
        }
        
        maxOrderingDate = maxYear+'-'+maxMonth+'-'+maxDay; //store max ordering date as yyyy-mm-dd
        
        //now I can set the min and max attribute of the dateSelected field
        
        dateSelected.setAttribute('min', tmrw); //set minimum ordering date to tommorow
        dateSelected.setAttribute('max', maxOrderingDate); //set maximum ordering date to 3 days from now
    }

    else {
        var today2 = new Date(); // get todays date
        var maxOrderingDate1 = new Date(today2); // initialise max variable
        maxOrderingDate1.setDate(maxOrderingDate1.getDate()+2); // add two days to todays date - will change months and year if applicable
        
        //now I can set the min and max attribute of the dateSelected field

        dateSelected.setAttribute('min', today); //set minimum ordering date to tommorow
        dateSelected.setAttribute('max', maxOrderingDate1); //set maximum ordering date to 2 days from now
    }

function enablingTpButton() {
    if (accountMatch.classList.contains("true")) {
        hiddenTopUp.classList.remove("hidden");
        
    }
    
    else {
        processTopUpBtn.disabled == true;
        
    }
    
}

    function confirmationAlert() {

        
        if(confirm("Are you you want to top up your account?")) {

         
     
 }
    
    else {
        
      
        
    }


}

    





