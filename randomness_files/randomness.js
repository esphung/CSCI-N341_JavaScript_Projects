/**************************************
 TITLE: Randomness Javascript
 AUTHOR: Eric Scott Phung
 CREATE DATE: 10.01.2014
 PURPOSE: Learn to use randomness with Javascript functions and input/output.
 LAST MODIFIED ON: 10.01.2014
 LAST MODIFIED BY: Eric Scott Phung (ESP)
 MODIFICATION HISTORY:
 			10.01.2014 Created (ESP)

*************************************/

$(document).ready(function() {
//document.write(Date());//added to test doc writing;
//alert("Test");

// declare object diceA
var diceA = {
	intSides : new Number(6),
	intFace : new Number(6),//function to randomize number
	roll : function() {
		this.intFace = Math.floor(6*Math.random())+1;
	},//function to display face
	displayFace : function(elSelected) {
		alert("You threw a " + this.intFace);
	}
}//end of object diceA;
//declare diceB with 10 numbers
var diceB = {
	intSides : new Number(10),
	intFace : new Number(10),
	roll : function() {
		this.intFace = Math.floor(10*Math.random())+1;
	},
	displayFace : function(elSelected) {
		alert("Your on a roll! " + this.intFace);
	}
}
//declare diceC with 100 numbers
var diceC = {
	intSides : new Number(100),
	intFace : new Number(100),
	roll : function() {
		this.intFace = Math.floor(100*Math.random())+1;
	},
	displayFace : function(elSelected) {
		alert("OMG You rolled " + this.intFace);
	}
}//end object diceC
//call to functions
var elSelected = document.getElementById("bodyText").innerHTML += "You rolled " + (elSelected);
diceA.roll(elSelected);
diceA.displayFace(elSelected);//diceA 6 sides

diceB.roll(elSelected);
diceB.displayFace(elSelected);//diceB 10 sides

diceC.roll(elSelected);
diceC.displayFace(elSelected);//diceC 100 sides
//end of calls
});