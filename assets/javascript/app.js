$(document).ready(function() {
	$('#start').click(countdownTimer.start);
	var countdownTimer = {
		time : 30,
		reset: function() {
			countdownTimer.time = 30;
			$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(stopwatch.count, 1000);
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
			if (countdownTimer.time > 0) {
				countdownTimer.time--;
				$('.timer').html(stopwatch.time);
			}
		}
	}
});