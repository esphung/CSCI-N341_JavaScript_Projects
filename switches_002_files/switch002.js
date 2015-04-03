$(document).ready(function(){
//simplified variables of OG user input
var a = prompt("Please enter current latitude.", "0");
var b = prompt("Please enter current longitude.", "0");
var c = prompt("Please enter destination latitude.", "0");
var d = prompt("Please enter destination longitude.", "0");
//variables provided by n341 class example
var intCurrentLatitude = new Number(a);			
var intCurrentLongitude = new Number(b);			
var intDestinationLatitude = new Number(c);		
var intDestinationLongitude = new Number(d);
//alert("test"); DEVELOPER BUG HERE; NO IDEA WHAT IT IS!!!!!
//variables created for conversion from "if/else" to "case/switch"
var northEast = new (intCurrentLatitude <= intDestinationLatitude && intCurrentLongitude <= intDestinationLongitude);
var northWest = new (intCurrentLatitude <= intDestinationLatitude && intCurrentLongitude >= intDestinationLongitude);
var southWest = new (intCurrentLatitude >= intDestinationLatitude && intCurrentLongitude >= intDestinationLongitude);
var southEast = new (intCurrentLatitude >= intDestinationLatitude && intCurrentLongitude <= intDestinationLongitude);
// Wow. So many variables.  This can't be right.
	switch (northEast, northWest, southWest, southEast) {
  case northEast :
//     northEast block of statements;
	alert("Head North East");
     break;
  case northWest :
//     northWest block of statements;
	alert("Head North West");
     break;
  case northWest :
//     southWest block of statements;
	alert("Head South West");
     break;
  case northWest :
//     southEast block of statements;
	alert("Head South East");
     break;
  default:
//     default block of statements;
	alert("Land ahoy!");
     break;
}

});