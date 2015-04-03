
/*  JQuery code to be run as soon as possible (ready) */ 
$(document).ready(function() {

    // limits
    var TOP_LIMIT     = "10px";
    var LEFT_LIMIT    = "10px";
    var RIGHT_LIMIT   = "480px";
    var BOTTOM_LIMIT  = "480px";
    
    // start position
    var STARTING_TOP  = "250px";
    var STARTING_LEFT = "250px";

    // nudge amount
    var NUDGE_LEFT    = "-=20px";
    var NUDGE_RIGHT   = "+=20px";

    // kick-off call
    $(init);
    
    // main function
    function init(){
	  
      $( "#topLeft"  ).click( topLeft );
      $( "#topRight" ).click( topRight );
      $( "#botLeft"  ).click( botLeft );
      $( "#botRight" ).click( botRight );
      $( "#glide" ).click( glide );
      $( "#left"  ).click( left );
      $( "#right" ).click( right );
      $( "#reset" ).click( reset );
	  $( "#show"   ).click( ImgShow );
      $( "#hide"   ).click( ImgHide );
      $( "#toggle" ).click( ImgToggle );

        // slide
        $( "#slideUp"     ).click( ImgSlideUp );
        $( "#slideDown"   ).click( ImgSlideDown );
        $( "#slideToggle" ).click( ImgSlideToggle );

        // fade
        $( "#fadeIn"     ).click( ImgFadeIn );
        $( "#fadeOut"    ).click( ImgFadeOut );
        $( "#fadeTo"     ).click( ImgFadeTo );
        $( "#fadeToggle" ).click( ImgFadeToggle );
		$("#fadeDelay").click(ImgDelayFade);
    }

    // reset
    function reset(){
      $( "#box" ).css( "left", STARTING_LEFT );
      $( "#box" ).css( "top",  STARTING_TOP );
    }
    
    // top left
    function topLeft(){
      $( "#box" ).css( "left", LEFT_LIMIT ).css( "top", TOP_LIMIT );
    }    

    // top right
    function topRight(){
      $( "#box" ).css( "left", RIGHT_LIMIT ).css( "top", TOP_LIMIT );
    }    
    // bottom left
    function botLeft(){
      $( "#box" ).css( "left", LEFT_LIMIT ).css( "top", BOTTOM_LIMIT );
    }    
    // bottom right
    function botRight(){
      $( "#box" ).css( "left", RIGHT_LIMIT ).css( "top", BOTTOM_LIMIT );
    }    
    
    // glide from corner to center
    function glide(){

      //move to initial spot
      $( "#box" ).css( "left", LEFT_LIMIT ).css( "top", TOP_LIMIT );
      
      //slide to new spot
      $( "#box" ).animate({ "left": RIGHT_LIMIT, "top": BOTTOM_LIMIT }, 2000);

    }
      
    // nudge left
    function left(){
      $("#box").animate({"left": NUDGE_LEFT }, 100);
    }
    
    // nudge right
    function right(){
      $("#box").animate({"left": NUDGE_RIGHT }, 100);
    }
	

   /** image functions 
    ******************************************/ 
    function ImgShow() {
        $( "#box" ).show(2000); }
    function ImgHide() {
        $( "#box" ).hide(heyText); }
    function ImgToggle() {
        $( "#box" ).toggle(); }
	function heyText() {
		alert("Hey, where did it go?");}

   /** slide functions 
    ******************************************/ 
    function ImgSlideUp() {
        $( "#box" ).slideUp( "slow" ); }
    function ImgSlideDown() { 
        $( "#box" ).slideDown( 1000 ); }
    function ImgSlideToggle() {
        $( "#box" ).slideToggle( "slow" ); }

   /** fade functions 
    ******************************************/ 
    function ImgFadeIn() {
        $( "#box" ).fadeIn( 1000 ); }
    function ImgFadeOut() {
        $( "#box" ).fadeOut( 1000 ); }
    function ImgFadeTo() {  
        $( "#box" ).fadeTo( "slow", 0.5, ImgFadeToNormal ); } // CALL BACK TO ImgFadeToNormal
    function ImgFadeToggle() {
        $( "#box" ).fadeToggle( 1000 ); }
    function ImgFadeToNormal() {
        $( "#box" ).fadeTo( "slow", 1.0 ); } // reset alpha back to 1
	function ImgDelayFade() {
	    $("#box").hide().delay(10000).hide().fadeIn(9000).fadeOut(9000); }   

}); 