/******************
FILENAME:  			projectPage.html JAVASCRIPT FILE
AUTHOR:				ERIC PHUNG
PURPOSE: 			JAVASCRIPT PAGE FOR FINAL PROJECT HTML FILE;  APPLIES CUSTOM JAVASCRIPT TO FINAL PROJECT INDEX PAGE IF NEEDED
CREATED:			2014.01.2014 (eS)
MODIFIED: 			2014.01.2014 (eS);
					TESTED IN OPERA, CHROME, FIREFOX, SAFARI
					W3 VALIDATED

*******************/

$(document).ready(function() {
	$("#accordion").accordion();
	//alert("aSome")//DEBUG ALERT
	
	var autoHeight = $( ".selector" ).accordion( "option", "autoHeight" );//ACCORDION GETTER
	$( ".selector" ).accordion( "option", "autoHeight", false );//ACCORDION SETTER

	
});