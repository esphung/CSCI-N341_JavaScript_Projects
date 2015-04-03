/**************************************
FILENAME:  			IN YO FACE LAB | JS FILE
AUTHOR: 			ERIC SCOTT PHUNG
PURPOSE: 			TO DEMONSTRATE JQUERY UI THEMES
CREATED: 			11.03.2014 (eS)
MODIFIED: 			11.03.2014 (eS)
*************************************/

//TEST IN CHROME: 11.03.2014 (eS)
//TEST IN FIREFOX: 11.03.2014 (eS)
//TEST IN INTERNET EXPLORER: 11.03.2014 (eS)
$(document).ready(function(){
	alert("IN YO FACE LAB    t(^^t)");
	


	$( "#accordion" ).accordion();



	var availableTags = [
		"ActionScript",
		"AppleScript",
		"Asp",
		"BASIC",
		"C",
		"C++",
		"Clojure",
		"COBOL",
		"ColdFusion",
		"Erlang",
		"Fortran",
		"Groovy",
		"Haskell",
		"Java",
		"JavaScript",
		"Lisp",
		"Perl",
		"PHP",
		"Python",
		"Ruby",
		"Scala",
		"Scheme"
	];
	$( "#autocomplete" ).autocomplete({
		source: availableTags
	});



	$( "#button" ).button();
	$( "#radioset" ).buttonset();



	$( "#tabs" ).tabs();



	$( "#dialog" ).dialog({
		autoOpen: false,
		width: 400,
		buttons: [
			{
				text: "Ok",
				click: function() {
					$( this ).dialog( "close" );
				}
			},
			{
				text: "Cancel",
				click: function() {
					$( this ).dialog( "close" );
				}
			}
		]
	});

	// Link to open the dialog
	$( "#dialog-link" ).click(function( event ) {
		$( "#dialog" ).dialog( "open" );
		event.preventDefault();
	});



	$( "#datepicker" ).datepicker({
		inline: true
	});



	$( "#slider" ).slider({
		range: true,
		values: [ 17, 67 ]
	});



	$( "#progressbar" ).progressbar({
		value: 20
	});



	$( "#spinner" ).spinner();



	$( "#menu" ).menu();



	$( "#tooltip" ).tooltip();



	$( "#selectmenu" ).selectmenu();


	// Hover states on the static widgets
	$( "#dialog-link, #icons li" ).hover(
		function() {
			$( this ).addClass( "ui-state-hover" );
		},
		function() {
			$( this ).removeClass( "ui-state-hover" );
		}
	);

	
});









