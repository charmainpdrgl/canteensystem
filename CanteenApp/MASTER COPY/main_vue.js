var app = new Vue({
                el: '#app',
               
                data: { 
                    items: [],
                    vegSelected: false,
                    gfSelected: false,
                    dfSelected: false,
                    normalSelected: false,
                    selectedDate:'',
                },
                mounted: function(){
                   this.loadItems(); 
                },
                methods: {

                    loadItems: function(){
                    
                    //const axios = require('axios')

                    this.items = []
                    var baseURL = "https://api.airtable.com/v0/appEEXag8uIx61Eqt/Items?view=All%20items"
                    var headers = { authorization: "Bearer " + 'keyW0fB3bPRfznpHg' }
                    var params = { pageSize: 100}

                    axios({
                        baseURL: baseURL,
                        headers: headers,
                        params: params
                    }).then(res =>  { this.items.push(...res.data.records)
                        params.offset = res.data.offset
                            const axcall = () => { axios({
                                baseURL: baseURL,
                                headers: headers,
                                params: params }
                                ).then( 
                                    res =>  { this.items.push(...res.data.records)
                                        params.offset = res.data.offset

                                        if (res.data.offset !== undefined) {
                                        return axcall() }
                                        else { // after all calls ends
                                          console.log(this.items)
                                        }
                                    }
                                ).catch(e => console.log(e))
                                }
                                axcall()
                    }).catch(e => console.log(e) );
                    
                    },
                    
                    
        

                    updateItemDisplayed: function(item){
                        
                        
                        var d = new Date (this.selectedDate); //pull the selected numeric date
                        var weekdayN = d.getUTCDay(); // convert to weekday format (0-6)
                        var weekday;
                        var weekdayABR; // initalise avaliable items search field
                        
                        // translate 0-6 to associated weekday
                        
                        if (weekdayN==0){
                           this.weekday = "Sunday";
                            this.weekdayABR = 'SUN' + ' ' + 'avaItems';
                        }
                        
                        if (weekdayN==1){
                           this.weekday = "Monday";
                            this.weekdayABR = 'MON' + ' ' + 'avaItems';
                        }
                        
                        if (weekdayN==2){
                           this.weekday = "Tuesday";
                            this.weekdayABR = 'TUE' + ' ' + 'avaItems';
                        }
                        
                        if (weekdayN==3){
                           this.weekday = "Wednesday";
                            this.weekdayABR = 'WED' + ' ' + 'avaItems';
                        }
                        
                        if (weekdayN==4){
                           this.weekday = "Thursday";
                            this.weekdayABR = 'THU'+ ' ' + 'avaItems';
                        }
                        
                        if (weekdayN==5){
                           this.weekday = "Friday";
                            this.weekdayABR = 'FRI'+ ' ' + 'avaItems';
                            
                        }
                        
                        if (weekdayN==6){
                           this.weekday = "Saturday";
                            this.weekdayABR = 'SAT'+ ' ' + 'avaItems';
                        
                            
                        }
                        
                        // initalise arrays for avaliability dates and dietary catering
                        var availabilityArray = item.fields.Availability1;
                        var dietaryArray = item.fields.Dietary;
                        
                
                          if(availabilityArray!=undefined){ // if the item is presently sold at the canteen
                             if (availabilityArray.includes(this.weekday)){ //if the item is avaliable on the selected day
                                
                                 if (item.fields[this.weekdayABR] > 0){ // if there is more than 0 of the item avaliable on the selected day
                                 
                                     if(this.normalSelected && !this.dfSelected && !this.gfSelected && !this.vegSelected) { //if only normal checkbox is selected
                                        return true;

                                    }

                                    else{ //identifying which checkboxes are selected and therefore what items should be displayed

                                        if(this.vegSelected && !this.gfSelected && !this.dfSelected){ // if only  veg checkbox selected

                                            if(dietaryArray!=undefined){

                                                if(dietaryArray.includes('vegetarian')){

                                                    return true;

                                                }
                                            } 
                                        } 

                                        if (this.gfSelected && !this.vegSelected && !this.dfSelected){ // if only  gf checkbox selected

                                            if(dietaryArray!=undefined){

                                                if(dietaryArray.includes('gluten-free')){

                                                    return true;

                                                }
                                            } 
                                        }

                                        if (this.dfSelected && !this.vegSelected && !this.gfSelected){ // if only df checkbox selected
                                            if(dietaryArray!=undefined){

                                                if(dietaryArray.includes('dairy-free')){

                                                    return true;

                                                }
                                            } 
                                        }

                                        if (this.vegSelected && this.gfSelected && !this.dfSelected){ // if veg and gluten free checkbox is selected and dairy free is not
                                            if(dietaryArray!=undefined){
                                                if(dietaryArray.includes('vegetarian') && dietaryArray.includes('gluten-free')){
                                                    return true;
                                                }
                                            }
                                        }

                                        if (this.vegSelected && this.dfSelected && !this.gfSelected){ // if veg and dairy free checkbox is selected and gluten free is not
                                            if(dietaryArray!=undefined){
                                                if(dietaryArray.includes('vegetarian') && dietaryArray.includes('dairy-free')){
                                                    return true;
                                                }
                                            }
                                        }

                                        if (this.dfSelected && this.gfSelected && !this.vegSelected){ // if dairy free and gluten free checkbox is selected and veg is not
                                            if(dietaryArray!=undefined){
                                                if(dietaryArray.includes('dairy-free') && dietaryArray.includes('gluten-free')){
                                                    return true;
                                                }
                                            }
                                        }

                                        if (this.dfSelected && this.gfSelected && this.vegSelected){ // if dairy free, gluten free and veg checkbox is selected
                                            if(dietaryArray!=undefined){
                                                if(dietaryArray.includes('dairy-free') && dietaryArray.includes('gluten-free') && dietaryArray.includes('vegetarian')){
                                                    return true;
                                                }
                                            }
                                        }




                                    }//end of filtering items based on checkbox selection
                                } // end of checking the item has quantites avaliable for purchase  
                            } // end of checking the item is avaliable on the selected day
                        } // end of checking the item is sold at the canteen
                        
                    } //end of updateItemDisplayed function
                        
                }//end of Vue methods
     
    })