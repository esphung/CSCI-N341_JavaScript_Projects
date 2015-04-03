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
	alert("PAGE RELOADED")//DEBUG PAGE LOAD JS SCRIPT


//BUTTON FUNCTIONS

	function hideMe() {
		alert("CROUCHING TIGER, HIDDEN ERLEN!!! WAHH!");
	}//HIDE ME FUNCTION
	function showMe() {
		alert("I AM REVEALED! AHHH!");
	}//SHOW ME FUNCTION
	function toggleMe() {
		alert("I AM TOGGLED AND BOGGLED BY YOU! WOAH!");
	}//TOGGLE ME FUNCTION
	function slideMeDown() {
		alert("I ABOUT TO SLIDE DOWN ON YOU, BRUH!");
	}//SLIDE ME DOWN FUNCTION
	function slideMeUp() {
		alert("SLIDERS....MMMMMMM!");
	}//SLIDE ME UP FUNCTION
	function fadeMeIn() {
		alert("IM SO FADED! WEEEE!");
	}//FADE ME IN FUNCTION
	function fadeMeOut() {
		alert("FADE OUT! NEEENJA!!");
	}//FADE ME OUT FUNCTION




//Use getElementById to search the HTML for your button
//and store the button into a variable




//STORED VARIABLES	
	var hideButton = document.getElementById("hideButton");//HIDE ME BUTTON
	var showButton = document.getElementById("showButton");//SHOW ME BUTTON
	var toggleButton = document.getElementById("toggleButton");//TOGGLE ME BUTTON
	var slideDownButton = document.getElementById("slideDownButton");//SLIDE ME DOWN BUTTON
	var slideUpButton = document.getElementById("slideUpButton");//SLIDE ME UP BUTTON
	var fadeInButton = document.getElementById("fadeInButton");//FADE ME IN BUTTON
	var fadeOutButton = document.getElementById("fadeOutButton");//FADE ME OUT BUTTON


//Variable name dot Event Name = (set to) Name of function
//you want to run when button is clicked


//EVENT HANDLERS
	hideButton.onclick = hideMe;//HIDE ME BUTTON
	showButton.onclick = showMe;//SHOW ME BUTTON
	toggleButton.onclick = toggleMe;//TOGGLE ME BUTTON
	slideDownButton.onclick = slideMeDown;//SLIDE ME DOWN BUTTON
	slideUpButton.onclick = slideMeUp;//SLIDE ME UP BUTTON
	fadeInButton.onclick = fadeMeIn;//FADE ME IN BUTTON
	fadeOutButton.onclick = fadeMeOut;//FADE ME OUT BUTTON


});









