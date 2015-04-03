/**************************************
 TITLE: 				Iffey Programming Javascript File 
 AUTHOR: 				Eric Scott Phung (ESP);
 CREATE DATE: 			09.24.2014;
 PURPOSE: 				To get iffey with it; Conditionals/if statements;
 LAST MODIFIED ON: 		09.24.2014;
 LAST MODIFIED BY: 		Eric Scott Phung (ESP);
 MODIFICATION HISTORY:
 						09.24.2014: Created (ESP);
*************************************/
$(document).ready(function(){
	var answer = prompt("Did you arrive portside on time? Yes or no.");
	var newAnswer = answer.toUpperCase();
    	if (answer == "yes") {
        	alert(newAnswer + "!  Congratulations!  You earned 26 doubloons!");
        //alert positive response iff Case yes
  	} 	else if (answer == "no") {
    		alert(newAnswer + "!  Ok.  In that case, you can scrub the deck for a week.");
    	//alert negative response iff Case no
	}	
});
			