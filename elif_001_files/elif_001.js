/**************************************
 TITLE: 			Else If 001 javascript file
 AUTHOR: 			Eric Scott Phung
 CREATE DATE: 		09.25.2014
 PURPOSE: 			Case Switch in Javascript
 LAST MODIFIED ON: 	09.25.2014;
 LAST MODIFIED BY: 	Eric Scott Phung (ESP)
 MODIFICATION HISTORY:
 					09.25.2014; (ESP)
*************************************/


$(document).ready(function(){
	var someCondition = prompt("Tell me what grade you got; A, B, C, D, or F.");
		switch(someCondition) {
	case "A": case "a":
		alert("Grade of A! Awesome");
		break;
	case "B": case "b":		
		alert("Grade of B! Acceptable.");
		break;
	case "C": case "c":
		alert("Grade of C! Okay.");
		break;
	case "D": case "d":
		alert("Grade of D! Really?");
		break;
	case "F": case "f":
		alert("Grade of F! You suck.");
		break;	
	default:	
		alert("Come back when you learn to read and write.");	
} // end the switch statement
});
			