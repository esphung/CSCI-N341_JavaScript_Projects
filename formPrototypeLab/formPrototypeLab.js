/******************
FILENAME:  			formPrototype.js JAVASCRIPT FILE
AUTHOR:				ERIC PHUNG
PURPOSE: 			SERVES AS CUSTOM JAVASCRIPT FILE FOR FORM PROTOTYPE LAB HTML FILE
CREATED:			2014.01.2014 (eS)
MODIFIED: 			2014.01.2014 (eS);
					TESTED IN OPERA, CHROME, FIREFOX, SAFARI
					W3 VALIDATED
*******************/

$(document).ready(function() {

/********************
DATEPICKER AND ECHO STUFF
*********************/
	//alert("aSome")//DEBUG ALERT
	$('input[type=date]')
    .attr('type', 'text')
    .datepicker({
      // Consistent format with the HTML5 picker
      dateFormat: 'yy-mm-dd'
    });
	$('#submitBtn').click(function(event) {
		var formInfo = $('#id_1').val();
		$('#outputDiv').html(formInfo)
  });//RETURN TEXT INPUT TO OUTPUT FIELDSET

/********************

*********************/
	$("#button").button();

	$("#accordion").accordion();
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
      $("#autocomplete").autocomplete({
      	source: availableTags
      });
      $("#button").button();
      $("#radioset").buttonset();
      $("#tabs").tabs();
      $("#dialog").dialog({
      	autoOpen: false,
      	width: 400,
      	buttons: [{
      		text: "Ok",
      		click: function() {
      			$(this).dialog("close");
      		}
      	}, {
      		text: "Cancel",
      		click: function() {
      			$(this).dialog("close");
      		}
      	}]
      });
      // Link to open the dialog
      $("#dialog-link").click(function(event) {
      	$("#dialog").dialog("open");
      	event.preventDefault();
      });
      $("#datepicker").datepicker({
      	inline: true
      });
      $("#slider").slider({
      	range: true,
      	values: [17, 67]
      });
      $("#progressbar").progressbar({
      	value: 20
      });
      $("#spinner").spinner();
      $("#menu").menu();
      $("#tooltip").tooltip();
      $("#selectmenu").selectmenu();
      // Hover states on the static widgets
      $("#dialog-link, #icons li").hover(
      	function() {
      		$(this).addClass("ui-state-hover");
      	},
      	function() {
      		$(this).removeClass("ui-state-hover");
      	}
      );
});