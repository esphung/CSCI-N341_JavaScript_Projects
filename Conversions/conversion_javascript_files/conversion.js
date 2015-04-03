/**************************************
 TITLE: Conversion Javascript file
 AUTHOR: Eric Scott Phung
 CREATE DATE: 09.11.2014
 PURPOSE: Practice User input, concatenation, conversions
 LAST MODIFIED ON: 09.11.2014
 LAST MODIFIED BY: Eric Scott Phung (ESP)
 MODIFICATION HISTORY:

*/


$(document).ready(function(){
			
			
    
            var person = prompt("Aye! What be yer pirate name, lad!?", "ie: Sid Scurvy");
    
            var number = prompt("How many Gold Doubloons have ye looted?");
    	           if (person != null) {
        	
    document.getElementById("demo").innerHTML =
        	person;

    var x = number * 287;

        	
    alert("Wow! You have $" + x + " worth of Gold Doubloons!?");
        	
    document.getElementById("netWorth").innerHTML= "You're Net Pirate Worth is...";

    document.getElementById("endNumber").innerHTML= x;
        
         }


});
			