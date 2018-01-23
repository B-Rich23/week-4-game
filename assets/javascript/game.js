// Variable for secret number array for each crystal
var secretNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


// Variable for sum of user's guesses
var yourSum = 0; 

// Variables for wins and losses counter
var winsCounter = 0;
var lossesCounter = 0;

// Variable for reset
var reset= function() {

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

var crystalValue;

var crystalNumbers = [blueCrystal, orangeCrystal, greenCrystal, redCrystal]	


// Event handler that starts game
$( document ).ready(function() {
  		
		randomNum = [Math.floor(Math.random() * 101) + 19];
			console.log("Computer chose this: " + randomNum);

		// blueCrystal = secretNumber[Math.floor(Math.random() * secretNumber.length)];
		// 	console.log("Blue Crystal's value is: " + blueCrystal);

		// orangeCrystal = secretNumber[Math.floor(Math.random() * secretNumber.length)];
		// 	console.log("Orange Crystal's value is: " + orangeCrystal);	

		// greenCrystal = secretNumber[Math.floor(Math.random() * secretNumber.length)];
		// 	console.log("Green Crystal's value is: " + greenCrystal);

		// redCrystal = secretNumber[Math.floor(Math.random() * secretNumber.length)];
		// 	console.log("Red Crystal's value is: " + redCrystal);

		// var crystalNumbers = [blueCrystal, orangeCrystal, greenCrystal, redCrystal]	

			$("#targetscore").text(randomNum);

			// for (var i = 0; i < crystalNumbers.length; i++) {
			// 	crystalNumbers[i] = secretNumber[Math.floor(Math.random() * secretNumber.length)];
			// 	console.log(crystalNumbers[i]);
			// }

			for (var i = 0; i < crystalNumbers.length; i++) {

				// crystalNumbers[i] = secretNumber[Math.floor(Math.random() * secretNumber.length)];
				// console.log(crystalNumbers[i]);

				imageCrystal = crystalNumbers[i];

				// imageCrystal.addClass("crystal-image");

				// imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

				imageCrystal.attr("data-crystalvalue", secretNumber[Math.floor(Math.random() * secretNumber.length)]);
				console.log(crystalNumbers[i]);
				console.log(imageCrystal);
	

				// $(".crystal-image").append(imageCrystal);
  			}

});
			// For each iteration, we will create an imageCrystal
			

			// Each imageCrystal will be given a data attribute called data-crystalValue.
    		// This data attribute will be set equal to the array value.
    		


		// On click event to generate random #'s for each crystal
		$(".crystal-image").on("click", function() {

				// console.log($(this));
			
				crystalValue = ($(this).attr("data-crystalvalue"));
    			crystalValue = parseInt(crystalValue);


				yourSum +=crystalValue;
				$("#sum").text(yourSum);
				
				if (yourSum == randomNum) {
				winsCounter ++;
				$("#wins").text(winsCounter);
				}
				else if (yourSum >= randomNum) {
     			lossesCounter ++;
     			$("#losses").text(lossesCounter);
    }
			})	
    	// });







  //   	$("#orange").on("click", function() {
		// })
  //   	$("#green").on("click", function() {
		// 
		// 
		// })
		// $("#red").on("click", function() {
		// 
		// })

  // });
  	
// });
