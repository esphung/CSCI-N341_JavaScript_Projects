/**************************************
FILENAME:			MOVERS AND SHAKERS LAB | N341
AUTHOR:				ERIC SCOTT PHUNG (eS)
PURPOSE: 			DEMONSTRATE A MOVABLE IMAGE
    Utilize strict compliant XHTML host file (or HTML5)
    Utilize google hosted jQuery library
    Utilize three-tiered web page
    Construct a range of JQuery selector instructions, from simple to compound
    Utilize jQuery filters to refine selection choices
    Utilize general expression pattern matching as required on element attributes as selection criteria
    Manipulate the DOM with jQuery
    Manipulate CSS with jQuery
    Manipulate HTML with jQuery
    Create visual effects with Show, Hide, Toggle, Fade
    Create movement effects with slide and animate

CREATED:            11.05.2014: PAGE CREATED (eS)
MODIFIED:           11.05.2014: PAGE CREATED (eS)
                                ADDED BOOTSTRAP (eS)
                    11.06.2014:; (eS)
                    ADDED JQUERY HANDLES (eS)
                    ADDED FX FUNCTIONS/EVENTS/HANDLERS (eS)
*************************************/


$(document).ready(function(){
	alert("PAGE RELOAD   t(^^t)")//DEBUG PAGE LOAD JS SCRIPT



/***********************************

FX BUTTONS FUNCTIONS, EVENTS, HANDLERS

***********************************/

//FX BUTTON FUNCTIONS

	function hideMe() {
		alert("CROUCHING TIGER, HIDDEN ERLEN!!! WAHH!");
		$("#erwinPic").hide();
		$("#historyDiv").html("YOU HID ME.  BRING ME BACK!");
	}//HIDE ME FUNCTION

	function showMe() {
		alert("I AM REVEALED! AHHH!");
		$("#erwinPic").show();
		$("#historyDiv").html("WOOOOSH! I AM BACK! NEXT TOGGLE ME!");
	}//SHOW ME FUNCTION

	function toggleMe() {
		alert("I AM TOGGLED AND BOGGLED BY YOU! WOAH!");
		$("#erwinPic").toggle();
		$("#historyDiv").html("I AM NIETHER HERE NOR THERE!");
	}//TOGGLE ME FUNCTION

	function slideMeUp() {
		alert("SLIDERS....MMMMMMM!");
		$("#erwinPic").slideUp();
		$("#historyDiv").html("I SLID UP!");
	}//SLIDE ME UP FUNCTION

	function slideMeDown() {
		alert("I ABOUT TO SLIDE DOWN ON YOU, BRUH!");
		$("#erwinPic").slideDown();
		$("#historyDiv").html("I SLID DOWN!");
	}//SLIDE ME DOWN FUNCTION

	function fadeMeIn() {
		alert("IM SO FADED! WEEEE!");
		$("#erwinPic").fadeIn();
		$("#historyDiv").html("I FADED IN!");
	}//FADE ME IN FUNCTION
	function fadeMeOut() {
		alert("FADE OUT! NEEENJA!!");
		$("#erwinPic").fadeOut();
		$("#historyDiv").html("I FADED OUT!");
	}//FADE ME OUT FUNCTION




//Use getElementById to search the HTML for your button
//and store the button into a variable




//STORED VARIABLES	
	var hideButton = document.getElementById("hideButton");//HIDE ME BUTTON
	var showButton = document.getElementById("showButton");//SHOW ME BUTTON
	var toggleButton = document.getElementById("toggleButton");//TOGGLE ME BUTTON
	var slideUpButton = document.getElementById("slideUpButton");//SLIDE ME UP BUTTON
	var slideDownButton = document.getElementById("slideDownButton");//SLIDE ME DOWN BUTTON
	var fadeInButton = document.getElementById("fadeInButton");//FADE ME IN BUTTON
	var fadeOutButton = document.getElementById("fadeOutButton");//FADE ME OUT BUTTON


//Variable name dot Event Name = (set to) Name of function
//you want to run when button is clicked


//EVENT HANDLERS
	hideButton.onclick = hideMe;//HIDE ME BUTTON
	showButton.onclick = showMe;//SHOW ME BUTTON
	toggleButton.onclick = toggleMe;//TOGGLE ME BUTTON
	slideUpButton.onclick = slideMeUp;//SLIDE ME UP BUTTON
	slideDownButton.onclick = slideMeDown;//SLIDE ME DOWN BUTTON
	fadeInButton.onclick = fadeMeIn;//FADE ME IN BUTTON
	fadeOutButton.onclick = fadeMeOut;//FADE ME OUT BUTTON




/***********************************

MOVE BUTTONS FUNCTIONS, EVENTS, HANDLERS

11.07.2014 (eS)

***********************************/





//NEED TO ANIMATE PROPERLY

	function glideMe(){
		alert('I GLIDE!');
		$("#erwinPicMove").animate("left", "left-limit", "top", "top-limit", 1500);
	}//GLIDE ME FUNCTION




//STORED VARIABLES	
	var glideButton = document.getElementById("glideButton");//GLIDE ME BUTTON






//EVENT HANDLERS
	glideButton.onclick = glideMe;//GLIDE ME BUTTON







});









