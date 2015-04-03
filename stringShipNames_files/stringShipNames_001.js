/**************************************
Filename:  		STRING SHIP NAMES JAVASCRIPT DOCUMENT
Written by: 	Eric Scott Phung (ESP)
Purpose: 		DERIVE 12x SHIP NAMES USING "charAt, indexOf, substring, trim, replace, toUpperCase, toLowerCase) Store the names into an array and write them to the page as a list."
CREATED:		10.02.2014;	(ESP)
Last Modified: 	10.02.2014;	(ESP)
*************************************/

//PAGE FUNCTION: BEGIN  ===================================================

$(document).ready(function(){

//ADDED 10.04.2014 TO MAKE SURE ALL FUNCTIONS WERE USED

var firstName = window.prompt('WHAT NAME??'); {
	alert('THANKs (JUST CHECKING)');
	console.log(firstName);//DEBUG
};


var newName = function(firstName) {
	console.log(firstName.toUpperCase());
	console.log(firstName.toLowerCase());
	console.log(firstName.charAt(0));
	console.log(firstName.indexOf('a'));

}

newName(firstName);





//MODULE: STRING COUNTER  ===================================================


//var strPhrase = new String("E R I C S C O P H U N G");//DEBUG NAME


var strPhrase = firstName;
	
var intPhraseLength = new Number(0);
	
intPhraseLength = strPhrase.length;
	
alert("STRING LENGTH IS " + intPhraseLength);
	




//MODULE: TRIM/REPLACE METHOD  ========================================= 



var trimPhrase = strPhrase.trim(" ");
alert("AFTER TRIMMED EDGES  >>>  " + trimPhrase);//ARB TEXT
var trPhrase = trimPhrase.replace(/ /g,'');//ADDED REPLACE FOR TEXT
alert("AFTER REPLACED SPACES  >>>  " + trPhrase);//ARB TEXT




//MODULE: VALID USER INPUT CHECKER =========================================




if (trPhrase.length < 8) {
	alert("Ya won 12 names, mon.  Meh needz atleaz 12 lettaz!");//ARB TEXT
    return false;
}





//MODULE: indexOf | toLowerCase >>> (IN SEARCH OF VOWELS!!! XD)
// REORGANIZE FOR REUSAGE THERE OF!!!  =====================================================

function indexVow(){
	var indeXter = trPhrase;
	var indeX = indeXter.toLowerCase().replace(/ /g,'');
	var vowA = indeX.indexOf("a");
	var vowE = indeX.indexOf("e");
	var vowI = indeX.indexOf("i");
	var vowO = indeX.indexOf("o");
	var vowU = indeX.indexOf("u");
	//alert("HOW MANY A's  = " + vowA);
	//alert("HOW MANY E's  = " + vowE);
	//alert("HOW MANY I's  = " + vowI);
	//alert("HOW MANY O's  = " + vowO);
	//alert("HOW MANY U's  = " + vowU);

vowArrayList = [];
	
	if (vowA >= 0) {
		vowArrayList[0] = " a ";
	} else (false);
	if (vowE >= 0) {
		vowArrayList[1] = " e ";
	} else (false);
	if (vowI >= 0) {
		vowArrayList[2] = " i ";
	} else (false);
	if (vowO >= 0) {
		vowArrayList[3] = " o ";
	} else (false);
	if (vowU >= 0) {
		vowArrayList[4] = " u ";
	} else (false);

	return vowArrayList;
}
	
indexVow();


alert("THESE VOWELS WERE FOUND:  " + vowArrayList);




//MODULE: SUBSTRINGS|5| TO ADD LETTERS =========================================



function combineShip(){
	var comboPhrase =  trPhrase;
	var comboA = comboPhrase.substring(5);
	var comboB = comboPhrase.substring(0, 5);
	var comboC = comboPhrase.substring(8, 0);
	var comboD = comboPhrase.substring(10, 0);
	var comboE = comboPhrase.substring(3, 12);
	//alert(comboA);
	//alert(comboB);
	//alert(comboC);
	//alert(comboD);
	//alert(comboE);
comboNameList = [];
	comboNameList[0] = comboA;
	comboNameList[1] = comboB;
	comboNameList[2] = comboC;
	comboNameList[3] = comboD;
	comboNameList[4] = comboE;
	return comboNameList;
}

combineShip();

//alert(comboNameList);//DEBUG


//MODULE:  REPLACEMENT WITH AVAILABLE VOWELS INTO SHIP NAME ARRAY LIST  =========================================

var newComboA = comboNameList[0, 1, 2].replace(comboNameList[3], vowArrayList);

var newComboB = comboNameList[3, 4, 1].replace(comboNameList[0, 2], vowArrayList);



// TO PAGE  =========================================


/*******

// FIRST SET SHIP NAMES
document.getElementById('shipName_001').innerHTML += comboNameList[0];

document.getElementById('shipName_002').innerHTML += comboNameList[1];

document.getElementById('shipName_003').innerHTML += comboNameList[2].substring(0, 3);

document.getElementById('shipName_004').innerHTML += comboNameList[3];

document.getElementById('shipName_005').innerHTML += comboNameList[4];

//SECOND SET SHIP NAMES (APPENDED VOWELS)

document.getElementById('shipName_006').innerHTML += comboNameList[0].substring(0, 8);

document.getElementById('shipName_007').innerHTML += comboNameList[1].substring(2, 10);

document.getElementById('shipName_008').innerHTML += comboNameList[2].substring(0, 9);

document.getElementById('shipName_009').innerHTML += comboNameList[3].substring(1, 10);

document.getElementById('shipName_010').innerHTML += comboNameList[4].substring(2, 10);

document.getElementById('shipName_011').innerHTML += (newComboA);

document.getElementById('shipName_012').innerHTML += (newComboB).substring(0, 2);

******/

var writeToDiv = (function(writeToDiv) {
	document.getElementById('shipName_001').innerHTML +=  comboNameList[0];
	document.getElementById('shipName_002').innerHTML += comboNameList[1];
	document.getElementById('shipName_003').innerHTML += comboNameList[2].substring(0, 3);
	document.getElementById('shipName_004').innerHTML += comboNameList[3];
	document.getElementById('shipName_005').innerHTML += comboNameList[4];
	document.getElementById('shipName_006').innerHTML += comboNameList[0].substring(0, 8);
	document.getElementById('shipName_007').innerHTML += comboNameList[1].substring(2, 10);
	document.getElementById('shipName_008').innerHTML += comboNameList[2].substring(0, 9);
	document.getElementById('shipName_009').innerHTML += comboNameList[3].substring(1, 10);
	document.getElementById('shipName_010').innerHTML += comboNameList[4].substring(2, 10);
	document.getElementById('shipName_011').innerHTML += (newComboA);
	document.getElementById('shipName_012').innerHTML += (newComboB).substring(0, 2);

})();




writeToDiv();



});//PAGE FUNCTION: END
			