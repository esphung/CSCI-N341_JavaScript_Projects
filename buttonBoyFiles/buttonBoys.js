/**************************************
 TITLE: 
 AUTHOR: Eric Scott Phung
 CREATE DATE: 
 PURPOSE: 
 LAST MODIFIED ON: 
 LAST MODIFIED BY: Eric Scott Phung (ESP)
 MODIFICATION HISTORY:

*************************************/


$(document).ready(function(){

	var firstButtonStuff = document.getElementById("firstButton");


	//Event Registration;
	firstButtonStuff.onclick = firstButtonClick;

	function firstButtonClick() {
		alert("YOU CLICKED THE FIRST BUTTON");
		
	}
	
	
});
			