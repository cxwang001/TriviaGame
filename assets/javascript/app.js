$(document).ready(function() {

var rightAnswer = 0;
var wrongAnswer = 0;
var noAnswer=0;

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
		});

	}
	checkAnswers();
// checkAnswers();

   				
   	// 
	// $(document).on('click', "#submit", function(){
 //    checkAnswer();
 //    results();
	// });
		

	$('.startButton').on('click', function() {
    	$('#start').hide();
    	$('.main-body').show();
	});

	$('#submit').on('click', function() {
    	$('.main-body').hide();
    	$('#results').show();
    	$('#rightAnswer').html(rightAnswer);
    	$('#wrongAnswer').html(wrongAnswer);
    	$('#noAnswer').html(noAnswer);	
	});


	
    	

});






