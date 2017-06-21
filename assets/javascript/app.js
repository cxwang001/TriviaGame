$(document).ready(function() {

var rightAnswer = 0;
var wrongAnswer = 0;

	function checkAnswers() {

		$( '.button-question').on('click', function() {
			var $this = $(this);
			// console.log($this);
			var val = $this.attr('value');
			// console.log(val);

			if (val === 'true'){
				rightAnswer ++;
				console.log("right");
				console.log(rightAnswer);
			} else {
				wrongAnswer ++;
				console.log("wrong");
			}
		});

	}
	
checkAnswers();	// }




console.log(rightAnswer);

});






