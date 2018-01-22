// Undefined variable for random number
var randomNum;

// Undefined variable for blue crystal
var blueCrystal;

// Undefined variable for orange crystal
var orangeCrystal;

// Undefined variable for green crystal
var greenCrystal;

// Undefined variable for red crystal
var redCrystal;

// Variable for sum of user's guesses
var yourSum = 0;

// Undefined variable result
var result;

// Variables for wins and losses counter
var winsCounter = 0;
var lossesCounter = 0;

// Variable for reset
var reset= function() {

};

// Event handler that starts game
$( document ).ready(function() {
  		
		randomNum = [Math.floor(Math.random() * 101) + 19];
			console.log("Computer chose this: " + randomNum);

			$("#targetscore").text(randomNum);

		yourSum = blueCrystal + orangeCrystal + greenCrystal +redCrystal;

		// On click event to generate random #'s for each crystal
		$("#blue").on("click", function() {
		blueCrystal = [Math.floor(Math.random() * 13) + 1];
			console.log("Blue Crystal's value is: " + blueCrystal);
			yourSum +=blueCrystal;
			$("#sum").text(yourSum);
			if (yourSum === randomNum) {
				winsCounter ++;
			}	
    	})
    	$("#orange").on("click", function() {
		orangeCrystal = [Math.floor(Math.random() * 13) + 1];
			console.log("Orange Crystal's value is: " + orangeCrystal);	
		})
    	$("#green").on("click", function() {
		greenCrystal = [Math.floor(Math.random() * 13) + 1];
			console.log("Green Crystal's value is: " + greenCrystal);
		})
		$("#red").on("click", function() {
		redCrystal = [Math.floor(Math.random() * 13) + 1];
			console.log("Red Crystal's value is: " + redCrystal);
		})

  });
  	
// });
