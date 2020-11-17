 let currentPlayer = "X"; // initialising to X means X plays first move


 console.log("Please wait your turn");
$(document).ready(function(){

  // console.log("Hello world dom is ready");
  $(".grid-item").on('click',function() {
    //this code runs only when a click happens.
    // console.log("choose box");
    if( currentPlayer === "X" ){
      // what should you do if it is X?
      $(this).html("X");
      currentPlayer = "O";
    } else {
      // what should you do if it's O?
      $(this).html("O");
      currentPlayer = "X";
    }
    console.log(currentPlayer);
    //check if there has been a win
    
  });   //end of click handler for grid item squares

});    //end of document ready
