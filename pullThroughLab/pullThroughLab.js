/******************
FILENAME:		pullThroughLab.js JAVASCRIPT FILE
AUTHOR:			ERIC PHUNG
CREATED:			2014.01.2014 (eS)
PURPOSE:		TO SCRAPE TEXT INPUT FIELD AND ECHO USER INPUT
MODIFIED:		2014.01.2014 (eS); 
				TESTED IN OPERA, CHROME, FIREFOX AND SAFARI BROWSERS
				VALIDATED ON W3
				ADDED PREVENT DEFAULT FUNCTION ON 2014.01.12 (eS)
*******************/

$(document).ready(function() {
	$('#submit').click(function(event) {
		var formInfo = $('#fname').val();
		$('#outputDiv').html(formInfo)
		event.preventDefault();//STOPS PAGE FROM REFRESHING
  });//RETURN TEXT INPUT TO OUTPUT FIELDSET
	$(":submit").button();//STYLE SUBMIT BUTTON

	$(":reset").button();//STYLE RESET BUTTON
	$(":radio").button();


});