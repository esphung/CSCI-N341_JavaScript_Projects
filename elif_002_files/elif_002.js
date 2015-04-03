/**************************************
 TITLE: 			Coordinates If Else javascript file
 AUTHOR: 			Eric Scott Phung
 CREATE DATE: 		09.25.2014
 PURPOSE: 			If Else in Javascript
 LAST MODIFIED ON: 	09.25.2014;
 LAST MODIFIED BY: 	Eric Scott Phung (ESP)
 MODIFICATION HISTORY:
 					09.25.2014; (ESP)
*************************************/
$(document).ready(function(){
	//inital prompts for input
var a = prompt("Please enter current latitude.", "0");
var b = prompt("Please enter current longitude.", "0");
var c = prompt("Please enter destination latitude.", "0");
var d = prompt("Please enter destination longitude.", "0");
// input into variables that hold coordinates that arent real life...ie xx,yy.....wtf
var intCurrentLatitude = new Number(a);			
var intCurrentLongitude = new Number(b);			
var intDestinationLatitude = new Number(c);		
var intDestinationLongitude = new Number(d);
//if else conditions; operaters may be incorrect (originally "=<" or "=>";)
if (intCurrentLatitude <= intDestinationLatitude && intCurrentLongitude <=intDestinationLongitude) {
	alert("Head North East");
} else if (intCurrentLatitude <= intDestinationLatitude && intCurrentLongitude >= intDestinationLongitude) {
	alert("Head North West");
} else if (intCurrentLatitude >= intDestinationLatitude && intCurrentLongitude >= intDestinationLongitude) {
	alert("Head South West");
} else if (intCurrentLatitude >= intDestinationLatitude && intCurrentLongitude <= intDestinationLongitude) {
	alert("Head South East");
} else if (intCurrentLatitude == intDestinationLatitude && intCurrentLongitude == intDestinationLongitude) {
	alert("hmmm")
} else if (intCurrentLatitude == 0 && intDestinationLatitude == 0 &&intCurrentLongitude == 0 && intDestinationLongitude == 0) {
	alert("Land ahoy!");
} else {
	alert("Land ahoy!");
};

});
			