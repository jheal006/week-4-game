$(document).ready(function() {


/////////////////
//Variables//
////////////////

var wins = 0;
    $("#wins").html(wins);
var losses = 0;
    $("#losses").html(losses);
var totalScore = 0;
    $("#score").html("<h1>Score:<br>" + totalScore + "</h1>");


// Random Number Assigned to Dark Crystal Value
var darkCrystalValue = Math.floor(Math.random() * 101 + 19);
$("#darkCrystal").html("<h1>" + darkCrystalValue +"</h1>");

var redCrystalValue = getColorCrystalValue();
var blueCrystalValue = getColorCrystalValue();
var yellowCrystalValue = getColorCrystalValue();
var greenCrystalValue = getColorCrystalValue();

/////////////////
//Functions//
////////////////

//Get Random Values for the Different Colored Crystals

function getColorCrystalValue () {
  return Math.floor((Math.random() * 11)+ 1);
};

////////////
//GAME//
////////////

  //Game Win Conditions and Reset, if the Crystal Total adds up to the exact amount of the Dark Crystal the Game is won. Reprint adjusted Win and Loss Values, and Reset Crytal Values
  var reset = function () {
  if (totalScore === darkCrystalValue) {
    wins += 1;
      $("#wins").html(wins);
        alert("The Dark Crystal Has Been Destroyed!");
  }  else if (totalScore > darkCrystalValue) {
    losses +=1;
      $("#losses").html(losses);
        alert("The Skeksis Killed the Gelfling!!");
  }
  darkCrystalValue = Math.floor(Math.random() * 101 + 19);
    $("#darkCrystal").html("<h1>" + darkCrystalValue +"</h1>");
  totalScore = 0;
      $("#score").html("<h1>Score:<br>" + totalScore + "</h1>");
  redCrystalValue = getColorCrystalValue();
  blueCrystalValue = getColorCrystalValue();
  yellowCrystalValue = getColorCrystalValue();
  greenCrystalValue = getColorCrystalValue();
};


  // On Crystal Click take Value of Color Crystal and Add to Total Score

  //// Can't get this to function properly. With this method the doc is printing the score as if the button is clicked on page load and not on the button click event.


  // $(".red").click(crystalClick(redCrystalValue));
  // $(".blue").click(crystalClick(blueCrystalValue));
  // $(".yellow").click(crystalClick(yellowCrystalValue));
  // $(".green").click(crystalClick(greenCrystalValue));

  // function crystalClick(colorCrystalValue) {
  //   totalScore = totalScore + colorCrystalValue;
  //   $("#score").html(totalScore);
  //   if (totalScore >= darkCrystalValue) {
  //     reset();
  //   };
  // };

  //Same function as above but the Total Value stays hidden until the button click.

  $(".red").click(function() {
    totalScore = totalScore + redCrystalValue;
    $("#score").html("<h1>Score:<br>" + totalScore + "</h1>");
    if (totalScore >= darkCrystalValue){
    reset();
    };
  });
  $(".blue").click(function() {
    totalScore = totalScore + blueCrystalValue;
    $("#score").html("<h1>Score:<br>" + totalScore + "</h1>");
    if (totalScore >= darkCrystalValue){
    reset();
    };
  });
  $(".yellow").click(function() {
    totalScore = totalScore + yellowCrystalValue;
    $("#score").html("<h1>Score:<br>" + totalScore + "</h1>");
    if (totalScore >= darkCrystalValue) {
      reset();
    };
  });
  $(".green").click(function() {
    totalScore = totalScore + greenCrystalValue;
    $("#score").html("<h1>Score:<br>" + totalScore + "</h1>");
    if (totalScore >= darkCrystalValue) {
      reset();
    };
  });





});
