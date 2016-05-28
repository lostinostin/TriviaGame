$(document).ready(function () {

	$('.choices').hide();
	document.onkeyup = function(event) {
		var userInput = (event.keyCode);
		if (userInput === 13) {
			var questions;
			var currentQuestion = -1;
			var numCorrect = 0; 
			var numIncorrect = 0;

			var timer = {

			    time: 30,

			    reset: function(){
			        timer.time = 30;
			        $('#display').html('00:30');
			    },

			    start: function(){
			        counter = setInterval(timer.count, 1000);
			    },

			    stop: function(){
			        clearInterval(counter);
			    },
			    
			    count: function(){
			        timer.time--;
			    }
			    
			};

			function game() {
				questions = [
					
					{ 	
						question: "Who are the founders of Thrasher Magazine?",
						choices: ['Derick Porter, Elmo Petrizzo, and Adam Koffner', 'Eric Swenson, Kevin Thatcher, and Fausto Vitello', 'Jake Phelps, Manny Diaz, and Bruce Logan', 'Bruce Walker, Scotty D, and Tom Sims'],
						answer: '1',
						pic: 'assets/images/swenson_1932394b.jpg'
					},

					{
						question: "What year did Jake Phelps become the editor of Thrasher?",
						choices: ['1990', '1993', '1995', '1998'],
						answer: '1',
						pic: 'assets/images/jakePhelps.jpg'
					},

					{ 	
						question: "Which skateboarder was the first person to kickflip the Carlsbad Gap?",
						choices: ['Rob Dyrdek', 'Jeremy Wray', 'Josh Kalis', 'Kris Markovich'],
						answer: '3',
						pic: 'assets/images/Markovich-kickflip.jpg'
					},

					{ 	
						question: "Which of these skateboarders was not on Flip Skateboards before they moved to America in 1994?",
						choices: ['Ali Boulala', 'Tom Penny', 'Rune Glifberg', 'Andy Scott'],
						answer: '0',
						pic: 'assets/images/ali.jpg'
					},

					{
						question: "Who won the first Thrasher SOTY award and what year was it?",
						choices: ['The Gonz, 1988', 'Tony Hawk 1989', 'The Gonz 1994', 'Tony Hawk 1990'],
						answer: '3',
						pic: 'assets/images/tonyhawksoty.jpg'
					},

					{
						question: "What is the title of Thrasher's music compilation series?",
						choices: ['Skate Rock', 'Wild in the Streets', 'Double Rock', 'Skate and Destroy'],
						answer: '0',
						pic: 'assets/images/Thrasher-SKATEROCK_v1.jpg'
					}, 

					{
						question: "How many volumes of Skate Rock were released?",
						choices: ['Four', 'Five', 'Six', 'Seven'],
						answer: '3',
						pic: 'assets/images/srv7.jpg'
					}

				];

				$('.question').html("<button class='btn' id='start'>Start</button>");

				$('#start').on("click", function() {
					nextQuestion();
					$('.choices').show();
				});			
			};


			function askQuestion() {

		  		$('.question').html(questions[currentQuestion].question);
			    $('.a').attr('id', 0).html(questions[currentQuestion].choices[0]);
				$('.b').attr('id', 1).html(questions[currentQuestion].choices[1]);
				$('.c').attr('id', 2).html(questions[currentQuestion].choices[2]);
				$('.d').attr('id', 3).html(questions[currentQuestion].choices[3]);
				$('.choice').off('click');
				guessAnswer();

			}

			function guessAnswer() {	  	

		  		$('.choice').on('click', function() {

		  			userChoice = this.id;
		  			correctAnswer = questions[currentQuestion].answer;

		  			if (userChoice === correctAnswer) {
		  				correct();
		  			} else {
		  				incorrect();
		  			}

				  	console.log(currentQuestion);
				  	console.log(userChoice);
				  	console.log(correctAnswer);
				  	delete userChoice;
				  	delete correctAnswer;

				  	
		  		});

		  	}

			function nextQuestion() {

		  		currentQuestion++;
		  		$('.next').off('click');
		  		if (currentQuestion < questions.length) {
		  			askQuestion();
		  		} else {
		  			endGame();
		  		}
		  	};
	  			
		  	

		  	function correct() {

		  		$('.question').html("Correct!");
		  		$('.next').show();
		  		$('.next').html("<button class='btn btn-primary center' id='next'>Next</button>");
		  		$('.media').show();
		  		$('.media').html("<img class='text-center' src=" + questions[currentQuestion].pic + ">")
		  		$('.next').on('click', function() {
		  			nextQuestion();
		  			$('.next').hide();
		  			$('.media').hide();

		  		});

		  		numCorrect++;
		  		console.log(numCorrect);
		  	};


		  	function incorrect() {

		  		$('.question').html("Incorrect!");
		  		$('.next').show();
		  		$('.next').html("<button class='btn btn-primary center' id='next'>Next</button>");
		  		$('.media').html("<img src=" + questions[currentQuestion].pic + ">")
		  		$('.next').on('click', function() {
		  			nextQuestion();
		  			$('.next').hide();
		  			$('.media').hide();
		  		});

		  		numIncorrect++;
		  		console.log(numIncorrect);
		  	};
		  	

		  	function startTime() {

		  	};


		  	function timesUp() {

		  	};


		  	function endGame() {

		  	}; 
		  	
		game();

  		}; 


	};
});