/********************************************************
FILENAME:  			finalPageTest.js JAVASCRIPT
AUTHOR:				ERIC PHUNG
PURPOSE: 			JAVASCRIPT PAGE FOR FINAL TEST PAGE
CREATED:			2014.04.2014 (eS)
MODIFIED: 			2014.04.2014 (eS);
********************************************************/

$(document).ready(function() {
	$("#button").button();//CALLS MAIN BUTTON FUNCTIONS (SUBMITS)
    
    $("#radioset").buttonset();//CALLS RADIOSET FUNCTION  
    $("#datepicker").datepicker({
      	inline: true
      	});//CALL TO DATEPICKER FUNCTION



    $("#spinner").spinner();//CALL TO SPINNER FUNCTION
    $('input[type=date]')
	.attr('type', 'text')
    .datepicker({
    	dateFormat: 'mm/dd/yy'
    	});//DATE PICKER SET FOR DOB INPUT FIELD



    $("#button").click(function(event){
    	$(".showMe").show();
    	});//SHOWS NEW USER REGRISTRATION
  	$("#button").click(function(event) {
  		$("#hideMe").hide();
  		});//HIDES EXISTING USER LOGIN
    

/******************
EVENT REGISTRATIONS FOR OUTPUT CONTENT
ADDED 2014.01.2014 (eS)
*******************/
	$('#submitBtn').click(function(event) {
		var firstName = $('#id_1').val();
		$('#outputFirstName').html(firstName)//RETURN TEXT FIRSTNAME INPUT TO OUTPUT FIELDSET
		var lastName = $('#id_2').val();
		$('#outputLastName').html(lastName)//RETURN TEXT LAST NAME INPUT TO OUTPUT FIELDSET
		var address = $('#id_3').val();
		$('#outputAddress').html(address)//OUTPUT USERS ADDRESS INPUT
		var streetName = $('#id_4').val();
		$('#outputStreetName').html(streetName)//OUTPUT YEARS IN TECH
		var DOB = $('#id_5').val();
		$('#outputDOB').html(DOB)//OUTPUT USERS DOB
		var zip = $('#id_6').val();
		$('#outputZip').html(zip)//OUTPUT USERS ZIP
		var email = $('#id_7').val();
		$('#outputEmail').html(email)//OUTPUT USERS EMAIL INPUT
		var password = $('#id_8').val();
		$('#outputPassword').html("**************")//OUTPUT USERS PASSWORD (HASHED)
		var phone = $('#id_9').val();
		$('#outputPhone').html(phone)//OUTPUT USERS PHONE NUMBER
		var radioInfo = String($('input:radio[name=radio]:checked').val());
		$("#outputRadio").html(radioInfo)//RETURN INPUT RADIO BUTTONS SELECTED
	});
/******************
JQUERY SIGN UP FOR DEFAULT SETTINGS
ADDED 2014.01.2014 (eS)
*******************/
	$.validator.setDefaults({
		submitHandler: function() {
		//alert("Welcome!");
	},
	showErrors: function(map, list) {
	// ADDED ON 2014.01.12 (eS)
	var focussed = document.activeElement;
	if (focussed && $(focussed).is("input, textarea")) {
		$(this.currentForm).tooltip("close", {currentTarget: focussed
		}, true)
	}
	this.currentElements.removeAttr("title").removeClass("ui-state-highlight");
	$.each(list, function(index, error) {
		$(error.element).attr("title", error.message).addClass("ui-state-highlight");
	});
     	if (focussed && $(focussed).is("input, textarea")) {
     		$(this.currentForm).tooltip("open", {
     			target: focussed
      });//DEFAULT JQUERY FORM VALIDATION SETTINGS
    }
  }
});

$("#signupForm input:not(:submit)").addClass("ui-widget-content");//STYLE SUBMIT BUTTONS
$(":submit").button();//EVENT REG SUBMIT BUTTONS
$("#signupForm input:not(:reset)").addClass("ui-widget-content");//STYLE RESET BUTTONS
$(":reset").button();//EVENT REG RESET BUTTONS


$("#signupForm").validate({
});//SIGN UP FORM DEFAULTS



$("#commentForm, #signupForm").tooltip({
	show: false,
	hide: false
});



$("#signupForm").validate({
	rules: {
		firstname: "required",
		lastname: "required",
		username: {
			required: true,
			minlength: 2
		},
		password: {
			required: true,
			minlength: 5
		      },
		      confirm_password: {
		      	required: true,
		      	minlength: 5,
		      	equalTo: "#password"
		      },
		      email: {
		      	required: true,
		      	email: true
		      },
		      topic: {
		      	required: "#newsletter:checked",
		      	minlength: 2
		      },
		      agree: "required"
		  },
		  messages: {
		  	firstname: "Please enter your firstname",
		  	lastname: "Please enter your lastname",
		  	username: {
		  		required: "Please enter a username",
		  		minlength: "Your username must consist of at least 2 characters"
		  	},
		  	password: {
		  		required: "Please provide a password",
		  		minlength: "Your password must be at least 5 characters long"
		  	},
		  	confirm_password: {
		  		required: "Please provide a password",
		  		minlength: "Your password must be at least 5 characters long",
		  		equalTo: "Please enter the same password as above"
		  	},
		  	email: "Please enter a valid email address",
		  	agree: "Please accept our policy"
		  }
		  });//ALL INPUT FIELD DEFUALTS AND TOOLTIP TEXT

/******************
JAVASCRIPT "ONLY NUMBERS" VALIDATION FOR INPUT FIELDS
WILL NOT ALLOW KEYUP ON TEXT INPUT FROM USER
ADDED 2014.02.2014 (eS)
*******************/

/* NO KEY UP TEXT ON STREET ADDRESS */
$("#id_3").keydown(function (e) {
	if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
		(e.keyCode == 65 && e.ctrlKey === true) || 
		(e.keyCode >= 35 && e.keyCode <= 39)) {
		return;
}
if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
	e.preventDefault();
}
});//NO KEY UP TEXT ON STREET ADDRESS



/* NO KEY UP TEXT ON ZIP CODE */
$("#id_6").keydown(function (e) {
	if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
		(e.keyCode == 65 && e.ctrlKey === true) || 
		(e.keyCode >= 35 && e.keyCode <= 39)) {
		return;
}
if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
	e.preventDefault();
}
});//NO KEY UP TEXT ON ZIP CODE


/* NO KEY UP TEXT ON TELEPHONE */
$("#id_telephone").keydown(function (e) {
	if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
		(e.keyCode == 65 && e.ctrlKey === true) || 
		(e.keyCode >= 35 && e.keyCode <= 39)) {
		return;
}
if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
	e.preventDefault();
}
});//NO KEY UP TEXT ON TELEPHONE


$( "#id_telephone" ).validate({
	rules: {
		field: {
			required: true,
			phoneUS: true
		}
	}
});



/* TEXT ONLY IN TEXT TYPE INPUT FIELDS */
$(':text').bind('keyup blur',function(){
	var node = $(this);
	node.val(node.val().replace(/[^a-z]/g,'') );
	});//REGULAR EXPRESSIONS TO DEFINE APLHA CHARS ALLOWED





});//END OF DOCUMENT READY QUERY FUNCTION WRRRAAAPPPPPPEERRR











