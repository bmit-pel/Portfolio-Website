
$(function(){
    $("body").hide();
    $("body").fadeIn("slow");
    });

/* Menue */

$(function(){
   $("#menue_001").hide();
   $("#menue_burger").on("click", function(){
   $("#menue_001").slideToggle();
   });
});