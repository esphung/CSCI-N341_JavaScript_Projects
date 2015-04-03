/**************************************
 TITLE: FUnctions Pirate Battle
 AUTHOR: Eric Scott Phung
 CREATE DATE: 10.01.2014
 PURPOSE: To reinforce function concepts
 LAST MODIFIED ON: 10.01.2014
 LAST MODIFIED BY: Eric Scott Phung (ESP)
 MODIFICATION HISTORY:
 		10.01.2014: Created ESP
 		

*************************************/

$(document).ready(function(){

//alert for user input
var username = window.prompt("Enemy ship in sight. What is your name?!");//username alert

/*****
Purpose: Main function battleShip().
Parameters: battleShip(intro, cannons, intercept, assault, endWar celebration promote)
Return: N/A	
*****/
	function battleShip() {//nested functions


		//function(first) - intro

		document.getElementById("shipText").innerHTML += "Counted 100 men ready to fight for you and I " + (username) + "!";
			alert("Prepare yourself for war " + intro[0] + "! the BATTLE HAS BEGUN!");//end of first nest function;
		
		//function(second) - cannons
		document.getElementById("shipText").innerHTML += " " + cannons[0] + " cannons fired at the enemy ship " + cannons[1] + "! ";
			alert(cannons[1] + "! " + cannons[0] + " CANNONS FIRED! BOOM");
		
		//function(third) - intercept

		document.getElementById("shipText").innerHTML += intercept[0] + " communication satellites taken out on enemy ship. Good job " + intercept[1] + "! ";
			alert("Take out the satellites! There are " + intercept[0] + " of them, " + intercept[1]);
	
		//function(fourth) - assault

		document.getElementById("shipText").innerHTML += "We now have " + assault[0] + " machine guns firing at will, " + assault[1] + ". ";
			alert("Ahhh! Kill'em dead, " + username + "! ");

		//function(fourth) - endWar
		document.getElementById("shipText").innerHTML += " " + endWar[0] + " men we have left now. The rest have died " + endWar[1] + ". avast...we have succeeded! ";
			alert("DROP the NUKE!");
		
		//function(fifth) - celebration
		document.getElementById("shipText").innerHTML += " " + celebration[0] + " bottles of beer on the wall, " + celebration[0] + ", bottles of beer!!!  Take one down, pass it to " + celebration[2] + ".  " + celebration[1] + " bottles of beer on the wall! ";
			alert(" This call for a celebration " + username + "! ");

		//function(sixth) - promote
		document.getElementById("shipText").innerHTML += " Congratulations " + promote[1] + " You have been promoted to lvl " + promote[0] + "! ";
			alert("You've been promoted to lvl " + 25 + "! ");

		//end of listed functions
//end of main function >>> battleShip()

}
//variables for nested functions
	intro = [username];
	cannons = ["10", username];
	intercept = ["15", username];
	assault = ["12", username];
	endWar = ["3", username];
	celebration = ["20", "19", username];
	promote = ["25", username];

//call of main function
battleShip();


});

