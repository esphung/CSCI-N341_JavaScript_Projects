/*************
FILENAME:			TRIGGER EVENT JQUERY LAB
AUTHOR:				ERIC SCOTT PHUNG
PURPOSE: 			DEMONSTRATE A JQUERY TRIGGERED EVENT
CREATED:			10.27.2014 (ESP)
MODIFIED: 			10.27.2014 (ESP)
***************/
$(document).ready(function(){//DOCUMENT READY FUNCTION
	alert("DOCUMENT EVENT TRIGGERED!    t(^^t)")//DOCUMENT READY ALERT
	
	$('#target').keypress(function(event) {
	alert("OMG YOUR TYPING!    t(^^t)")//KEYPRESS ALERT
	});//KEYPRESS FUNCTION

	$(window).trigger(event);
	window.onresize = windowStuff;
	function windowStuff() {
		alert("RESIZE WINDOW EVENT TRIGGERED!    t(^^t)")
}


});












/*****
#Create a Document event trigger.
#Create a Window event trigger.
#Reinforce key jQuery event syntax.
*****/


