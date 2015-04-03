/****
Filename:  Arrays Javascript Document
Written by: Eric Scott Phung (ESP)
Purpose: Arrays
CREATED: 10.01.2014 (ESP)
Last Modified: 
	10.01.2014: Created By ESP
	10.02.2014: Added string counter module
****/

/******* STRING VALUES >>>>>>>>>

// "bodyTextA" = "ASCII" output
// "bodyTextB" = "BINARY" output
// "bodyTextC" = "HASH" output
// "bodyTextD" = "TRUE" output
// "bodyTextE" = "FALSE" output




********/
//PAGE FUNCTION:  BEGIN  =========================================

$(document).ready(function(){



// USER INPUT (INITAL READY FUNCTION)  =========================================

var strPhrase = window.prompt(" YARH! WHAT MESSAGE HAVE Ye?!? ");



//MODULE: VALID USER INPUT CHECKER =========================================

if (strPhrase.length > 1) {
	alert("ONE AT A TIME!! ARRRGHHH!");
    return false;
}



/****

//(OPTIONAL)
//MODULE:  STRING COUNTER  ===========================================
var intPhraseLength = new Number(0);
	intPhraseLength = strPhrase.length;
	
alert(" LENGTH OF PHRASE IS  " + intPhraseLength + "  ");

****/



//FUNCTION: ASCII  "parseAscii()"  ===========================================

function parseAscii(strPhrase) {
		intAscii = strPhrase.charCodeAt(0);
		return intAscii;
}
parseAscii(strPhrase);

document.getElementById("bodyTextA").innerHTML += (intAscii);// doc.write 





//FUNCTION:  BIN  "parseBin()"  =========================================
function parseBin(intAscii) {
		strBin = parseInt(intAscii, 10).toString(2);
		return strBin;
}
parseBin(intAscii);

document.getElementById("bodyTextB").innerHTML += (strBin);//docwrite




//ARRAY SPLICING  =========================================
resBin = strBin.split("");
//docwrite
document.getElementById("bodyTextC").innerHTML += (resBin);//docwrite




//LOOP: ARRAY  =========================================
var binList = resBin.length;
for (var i = 0; i < binList; i++) {
    alert("AYE SIR!  " + resBin[i] + " ...GOT IT! ");
	if (resBin[i] == 1) {
        //alert("True");
		document.getElementById("bodyTextD").innerHTML += (" True ");
    } else if (resBin[i] == 0) {
        //alert("False");
		document.getElementById("bodyTextE").innerHTML += (" False ");//DEBUG!!
    } else {
        alert(" WTF ");
   }
}



});//PAGE FUNCTION:  END  =========================================
