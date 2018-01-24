// Variable for secret number array for each crystal
var secretNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


// Variable for sum of user's guesses
var yourSum = 0; 

// Variables for wins and losses counter
var winsCounter = 0;
var lossesCounter = 0;

// Variable for reset
var reset= function() {
	yourSum = 0;
	initialize();
	// crystalValue = 0;
	// randomNum = [Math.floor(Math.random() * 101) + 19];
	// console.log("Computer chose this: " + randomNum);
	// $("#targetscore").text(randomNum);
};

// Undefined variable for random number
var randomNum;

// Undefined variable for blue crystal
var blueCrystal = $('#crys1');

// Undefined variable for orange crystal
var orangeCrystal = $('#crys2');

// Undefined variable for green crystal
var greenCrystal = $('#crys3');

// Undefined variable for red crystal
var redCrystal = $('#crys4');

// Undefined variable result
var imageCrystal;

// Undefined variable crystalValue
var crystalValue;

// Array crystalNumbers
var crystalNumbers = [blueCrystal, orangeCrystal, greenCrystal, redCrystal]	


// Event handler that starts game
$( document ).ready(initialize);
		// Initialize function since .ready method only loads once
		function initialize() {
  		
  			// Target score is randomly generated
			randomNum = [Math.floor(Math.random() * 101) + 19];
			console.log("Computer chose this: " + randomNum);
			$("#targetscore").text(randomNum);

			// For each iteration of crystalNumbers, we will create a secret # value that is given to each crystal
			for (var i = 0; i < crystalNumbers.length; i++) {

				imageCrystal = crystalNumbers[i];

				// Each imageCrystal will be given a data attribute called data-crystalValue.
    			// This data attribute will be set equal to the array value.
				imageCrystal.attr("data-crystalvalue", secretNumber[Math.floor(Math.random() * secretNumber.length)]);
				console.log(crystalNumbers[i]);
				console.log(imageCrystal);	
  			}
};
			
	
		// On click event to generate random #'s for each crystal
		$(".crystal-image").on("click", function() {

				// Parse crystalValue string into integer
				crystalValue = ($(this).attr("data-crystalvalue"));
    			crystalValue = parseInt(crystalValue);

    			// Increases the sum of the user clicks by each crystal's click value
				yourSum +=crystalValue;
				$("#sum").text(yourSum);
				
				// Conditional to increase wins counter and reset the game if the user sum equals the target number, or to increase losses counter and reset the game if the user sum exceeds the target number
				if (yourSum == randomNum) {
				winsCounter ++;
				$("#wins").text(winsCounter);
				reset();
				}
				else if (yourSum >= randomNum) {
     			lossesCounter ++;
     			$("#losses").text(lossesCounter);
     			reset();
    }
			})	
    
