/**************************************
FILENAME:		FILTER SELECTION LAB JS
AUTHOR:			ERIC SCOTT PHUNG (ESP)
PURPOSE: 		DEMONSTRATE SELECTION FILTERING IN JQUERY
CREATED:		10.24.2014 (ESP)
MODIFIED: 		10.24.2014 (ESP)
				11.01.2014 ADDED ID/CLASS SELECTORS (eS)
*************************************/


$(document).ready(function(){
	alert('LOOK AT MY LIST!  t(^^t)');
	$('#bodyText').css({"fontSize": "10px"});//BY ID SELECTOR
	$('.omgClass').css({"fontSize": "15px"});//BY CLASS NAME
	//UNDERLINE FIRST LIST ITEM
	$('ul li:first').css('border-bottom','1px solid #333');
	//SHRINK LAST LIST ITEM
	$('ul li:last').css({
		
		"border-style": "solid",
    	"border-width": "5px"
	});
	$('ul li:first + li').css({
		"fontSize": '5px',
	});

	

});
			