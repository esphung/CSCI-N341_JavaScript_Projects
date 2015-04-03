/**************************************
FILENAME:       PICK ME LAB HTML 
AUTHOR:         ERIC SCOTT PHUNG (ESP)
PURPOSE:        DEMONSTRATE JQUERY SELECTORS
CREATED:        10.24.2014 (ESP)
MODIFIED:       10.24.2014 (ESP)
*************************************/


$(document).ready(function(){


	//SELECETIONS BY CLASS
	alert('PICK ME! LAB    t(^^t)');
	$('#domText').html("HELLO JQUERY");

	//alert('JQUERY THRU BUTTONS');
	$('h2').html("HELLO JQUERY");


	//CLASS BUTTON
	$(".buttonClass").css({
		fontSize: '18px',
	});

	//ID BUTTON
	$("#buttonId").html("ID BUTTON");
	//alert('exercitation ullamco laboris');


	//ALERT BUTTON
	var firstButtonStuff = document.getElementById("firstButton");
	//Event Registration;
	firstButtonStuff.onclick = firstButtonClick;
	function firstButtonClick() {
		alert("FONT CHANGES AAAAAAAAAAH");
		$("#body").css({
			fontSize: "20px",
		});
		
	}

	var jQueryButtonStuff = document.getElementById("jQueryButton");
	jQueryButtonStuff.onclick = jQueryButtonClick;


	function jQueryButtonClick() {
		alert("OMG JQUERY!!!    AAAAAAAAAAH")
	}
	

});
			