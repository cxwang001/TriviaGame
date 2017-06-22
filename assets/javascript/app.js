$(document).ready(function() {


//set up Global variables
var rightAnswer = 0;
var wrongAnswer = 0;
var noAnswer=5;
var number = 50;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
var intervalId;

//function to check rigit and wrong answers
	function checkAnswers() {

		$( '.button-question').on('click', function() {
			var $this = $(this);
			console.log($this);
			var val = $this.attr('value');
			// console.log(val);

			if (val === 'true'){
				rightAnswer ++;
				console.log(rightAnswer);
			} else {
				wrongAnswer ++;
				console.log(wrongAnswer);
			}
			noAnswer = 5 - (rightAnswer + wrongAnswer);
			// console.log("unanswered" + noAnswer);
		});

	}
	checkAnswers();
// checkAnswers();

   				
   	// 
	// $(document).on('click', "#submit", function(){
 //    checkAnswer();
 //    results();
	// });
		
	//When the start button is clicked, start page hide and main trivia page shows up
	$('.startButton').on('click', function() {
    	$('#start').hide();
    	$('.main-body').show();
	});

	//when submit button is clicked, trivia page hide and result page shows up and run stop function
	$('#submit').on('click', function() {
    	$('.main-body').hide();
    	$('#results').show();
    	$('#rightAnswer').html(rightAnswer);
    	$('#wrongAnswer').html(wrongAnswer);
    	$('#noAnswer').html(noAnswer);
    	stop();	
	});

	    //  The run function sets an interval
    //  that runs the decrement function once a second.
   function run() {
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $('#timeRemaining').html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        
        $('.main-body').hide();
    	$('#results').show();
    	$('#rightAnswer').html(rightAnswer);
    	$('#wrongAnswer').html(wrongAnswer);
    	$('#noAnswer').html(noAnswer);
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }
	
    run();

});






