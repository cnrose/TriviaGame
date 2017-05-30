$(document).ready(function(){

	$("#start-screen").show();

	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	var seconds = 60;
	var intervalId;

	//change to the trivia game on start button click
	$("#start-button").on("click", function() {
		$("#start-screen").hide();
		$("#game-screen").show();
		var pageTimeout = setTimeout(myInterval(), 500);
	});

	//timer function
	function myTimer() {
		seconds--;
		$("#timer").html("Time Remaining: " + seconds + " Seconds");

		if (seconds <= 0) {
			clearInterval(intervalId);
		};

		if (seconds === 0) {
			submitFunction(event);

			$("#correct-answers").html("Correct Answers: " + correct);
			$("#wrong-answers").html("Incorrect Answers: " + incorrect);
			$("#unanswered").html("Unanswered: " + unanswered);

			$("#game-screen").hide();
			$("#score-screen").show();
		};
	};

	function myInterval() {
		intervalId = setInterval(myTimer, 1000);
	};			


	//process form when submitted
	function submitFunction(event) {

		var answerArray = [];
		//find value of answers
		var answer1 = parseInt($( 'input[name="one"]:checked' ).val());
		answerArray.push(answer1);

		var answer2 = parseInt($('input[name="two"]:checked').val());
		answerArray.push(answer2);

		var answer3 = parseInt($( 'input[name="three"]:checked' ).val());
		answerArray.push(answer3);

		var answer4 = parseInt($( 'input[name="four"]:checked' ).val());
		answerArray.push(answer4);

		var answer5 = parseInt($( 'input[name="five"]:checked' ).val());
		answerArray.push(answer5);

		var answer6 = parseInt($( 'input[name="six"]:checked' ).val());
		answerArray.push(answer6);

		var answer7 = parseInt($( 'input[name="seven"]:checked' ).val());
		answerArray.push(answer7);

		var answer8 = parseInt($( 'input[name="eight"]:checked' ).val());
		answerArray.push(answer8);

		var answer9 = parseInt($( 'input[name="nine"]:checked' ).val());
		answerArray.push(answer9);

		var answer10 = parseInt($( 'input[name="ten"]:checked' ).val());
		answerArray.push(answer10);

		console.log(answerArray);

		for (var i = 0; i < answerArray.length; i++) {
			if (answerArray[i] === 25) {
				correct++	
			}
			else if (answerArray[i] === 0) {
				incorrect++;
			}
			else {
				unanswered++;
			}
		};
	};	

	//process the form on submit
	$("#trivia").on("submit", function() { 
		seconds = 0;
		submitFunction(event);
		event.preventDefault();


		$("#correct-answers").html("Correct Answers: " + correct);
		$("#wrong-answers").html("Incorrect Answers: " + incorrect);
		$("#unanswered").html("Unanswered: " + unanswered);

		$("#game-screen").hide();
		$("#score-screen").show();
		
	});	



});	