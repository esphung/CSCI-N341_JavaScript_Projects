/**************************************
FILENAME:    			DOWN RIGHT SHOT | JQUERY LAB | JS PAGE
AUTHOR:    				ERIC SCOTT PHUNG (eS)
PURPOSE:   				Create a Keyboard event trigger.
						Create a Mouse event trigger.
						Reinforce key jQuery event syntax. 
CREATED:   				11.03.2014 (eS)
MODIFIED: 				11.03.2014 (eS)


*************************************/


//TESTED IN FIREFOX 11.03.2014 (eS)
//TESTED IN CHROME 11.03.2014 (eS)
//TESTED IN IE 11.03.2014 (eS)


$(document).ready(function(){
	$('#boxChange').mouseenter(function(event) {
		$('#boxChange').css({
			//property1: 'value1',
			//property2: 'value2',
			"background-color":"white",
			"color":"black"
		});//MOUSE (ENTER) EVENT TRIGGER
	});
	$(document).keypress(function(event) {
		$('div').css("background-color","black");
	});//KEYBOARD EVENT TRIGGER

});

	














