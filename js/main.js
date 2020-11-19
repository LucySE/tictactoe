  let currentPlayer = "X"; // initialising to X means X plays first move
  let moveCount = 0;

$(document).ready(function(){

  $("#playbutton").on('click',function(){
    $(this).hide();
  });   //This is the end of the playbutton handler



  // console.log("Hello world dom is ready");
  $(".grid-item").on('click',function() {
    //this code runs only when a click happens.
    // console.log("choose box");
    // Is the box empty?if

  // });

    if( $(this).html() !== "" ){
      // If clicked square is occupied, return early from this click handler.
      // This has the effect of preventing the move from being played.
      // i.e. ignore illegal moves in occupied squares.
      return;
    }


    moveCount++;

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
    // let winner = [
    //   [#1,#2,#3]
    // ]
    if ($("#1").html() === "X" && $("#2").html() === "X" && $("#3").html() ==="X") {
      alert("X wins on first row!");
    }
    else if ($("#4").html() === "X" && $("#5").html() === "X" && $("#6").html() ==="X") {
      alert("X wins on second row!");
    }
    else if ($("#7").html() === "X" && $("#8").html() === "X" && $("#9").html() ==="X"){
      alert("X wins!");
    }
    else if ($("#1").html() === "X" && $("#4").html() === "X" && $("#7").html() ==="X") {
      alert("X wins on first row!");
    }
    else if ($("#2").html() === "X" && $("#5").html() === "X" && $("#8").html() ==="X"){
      alert("X wins on second!");
    }
    else if ($("#3").html() === "X" && $("#6").html() === "X" && $("#9").html() ==="X") {
      alert("X wins on third row!");
    }
    else if ($("#7").html() === "X" && $("#5").html() === "X" && $("#3").html() ==="X") {
      alert("X wins on diagonal row!");
    }
    else if ($("#1").html() === "X" && $("#5").html() === "X" && $("#9").html() ==="X"){
      alert("X wins on diagonal row!");
    }
    else if ($("#1").html() === "O" && $("#2").html() === "O" && $("#3").html() ==="O") {
      alert("O wins on first row!");
    }
    else if ($("#4").html() === "O" && $("#5").html() === "O" && $("#6").html() ==="O") {
      alert("O wins on second row!");
    }
    else if ($("#7").html() === "O" && $("#8").html() === "O" && $("#9").html() ==="O"){
      alert("O wins!");
    }
    else if ($("#1").html() === "O" && $("#4").html() === "O" && $("#7").html() ==="O") {
      alert("O wins on first row!");
    }
    else if ($("#2").html() === "O" && $("#5").html() === "O" && $("#8").html() ==="O"){
      alert("O wins on second!");
    }
    else if ($("#3").html() === "O" && $("#6").html() === "O" && $("#9").html() ==="O") {
      alert("O wins on third row!");
    }
    else if ($("#7").html() === "O" && $("#5").html() === "O" && $("#3").html() ==="O") {
      alert("O wins on diagonal row!");
    }
    else if ($("#1").html() === "O" && $("#5").html() === "O" && $("#9").html() ==="O") {
      alert("0 wins on diagonal row");
    } else if (moveCount===9){
      alert("It's a draw");
      //this code runs if no other "winning conditions" are found.
    }
     //end of click handler for grid item squares
  });   //end of click handler for grid item squares

 });    //end of document ready
