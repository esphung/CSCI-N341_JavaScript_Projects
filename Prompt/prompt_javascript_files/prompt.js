/**************************************
 TITLE: jQuery
 AUTHOR: Eric Scott Phung
 CREATE DATE: 07.05.2013
 PURPOSE: Practice Alert
 LAST MODIFIED ON: 09.08.2014
 LAST MODIFIED BY: Eric Scott Phung (ESP)
 MODIFICATION HISTORY:
	09.08.2014 

*/

$(document).ready(function(){
			
    var person = prompt("Aye! What be yer pirate name, lad!?", "ie: Sid Scurvy");
    	if (person != null) {
       
    document.getElementById("demo").innerHTML =
        "Hello " + person + "! Below is your official pirate contract. Now you are an official space pirate!";
        
    document.getElementById("sample").innerHTML= "I, " + person + ", here by swear myself into the service of Captain Eric the Great on the Flying Software Saucer. This be my solemn oath on penalty of walkin the plank (into outerspace).";
        
         }
});
			