
//Assign Varibles

var wins = 0;
var losses = 0;
var totalScore;

var redCrystalValue = getColorCrystalValue();
var blueCrystalValue = getColorCrystalValue();
var yellowCrystalValue = getColorCrystalValue();
var greenCrystalValue = getColorCrystalValue();
var combinedCrystals = [];
var crystalTotal;
var darkCrystalValue = getDarkCrystaValue();


/////////////////
//Functions//
////////////////

//Get Random Values for the Different Colored Crystals

function getColorCrystalValue () {
  // min = Math.ceil(min);
  // max = Math.floor(max);
  return Math.floor(Math.random() * (Math.floor(12) - Math.ceil(1) + 1)) + Math.ceil(1);
};

function getDarkCrystaValue() {
  document.getElementById("darkCrystal").innerHTML = Math.floor(Math.random() * (Math.floor(120) - Math.ceil(19) + 1)) + Math.ceil(19);
};

//Math and functions for Combining Different Color Crystals

function getSum(total, num) {
  return total + num;
};

function crystalCount() {
    crystalTotal = combinedCrystals.reduce(getSum);
    document.getElementById("crystalValue").innerHTML = crystalTotal;
};


// Take Crystal Button and Value of Crystal Color and push to
function crystalButtonClick (crystalColor, colorCrystalValue) {
  $(crystalColor).click(function() {
    combinedCrystals.push(colorCrystalValue);
    crystalCount();
  });
}

$(document).ready(function() {

  // Click Different Crystals and Sum their values to the CrystalCount

  document.getElementById("wins").innerHTML = "Wins: " + wins;
  document.getElementById("losses").innerHTML = "Losses: " + losses;

  // $(".red").click(function(){
  //   combinedCrystals.push(redCrystalValue);
  //   crystalCount();
  // });

  crystalButtonClick(".red",redCrystalValue);
  crystalButtonClick(".blue",blueCrystalValue);
  crystalButtonClick(".yellow",yellowCrystalValue);
  crystalButtonClick(".green",greenCrystalValue);


  //Game Rules, if the Crystal Total adds up to the exact amount of the Dark Crystal the Game is won.
  if (crystalTotal === darkCrystalValue) {
    wins += 1;
    combinedCrystals = [];
    getDarkCrystaValue();
    getColorCrystalValue();
  } else if (crystalTotal > darkCrystalValue) {
    losses +=1;
    combinedCrystals = [];
    getDarkCrystaValue();
    getColorCrystalValue();
  };











});
