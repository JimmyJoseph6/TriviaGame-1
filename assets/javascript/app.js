
	var countdownTimer = {
		time : 30,
		startFlag : false,
		reset: function() {
			countdownTimer.time = 30;
			startFlag = false;
			$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
		},
		start: function() {
			if (startFlag = false) {
				counter = setInterval(countdownTimer.count, 1000);
				startFlag = true;
			}
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
			if (countdownTimer.time > 0) {
				countdownTimer.time--;
				$('.timer').html(countdownTimer.time);
			}
		}
	}

	var trivia = {
		questions: ['Who was the host for Kitchen Kabaret?',
								'Who starred in the title role of Condorman?',
								'In Captain EO, what is the name of the elephant like alien?',
								'The 1980\'s were big for new personal computer introductions. Which of the following computers was introduced in 1980?',
								'What country was welcomed into the World Showcase at EPCOT Center in 1984?',
								'In 1981 a Disney constructed WED-Way People Mover opened at which airport?',
								'What school is attended in the Disney Channel Series, Girl Meets World?',
								'Which Walt Disney World location opened on the same day as the Disney-MGM Studios theme park on May 1, 1989?',
								'Which of the following films is NOT part of the Walt Disney Studios Silly Symphonies?',
								'Which wartime activity did the Walt Disney Studios partake in to support the American war effort?'],
		q1: ['A. Fud Wrapper',
				 'B. Cookie Ann Milk',
				 'C. Bonnie Appetit',
				 'D. Cherry Ontop'],
		q2: ['A. Zac Efron',
				 'B. Michael Crawford',
				 'C. Billy Crystal',
				 'D. Michael Keaton'],
		q3: ['A. Trunks',
				 'B. Hooter',
				 'C. Elle',
				 'D. Odie'],
		q4: ['A. Sinclair ZX80',
				 'B. IBM PC',
				 'C. Commodore 64',
				 'D. Atari 2600'],
		q5: ['A. Norway',
				 'B. Morocco',
				 'C. France',
				 'D. Japan'],
		q6: ['A. Houston Intercontinental Airport',
				 'B. Orlando International Airport',
				 'C. Atlanta International Airport',
				 'D. Dallas/Ft. Worth International Airport'],
		q7: ['A. Vintage High School',
				 'B. Peyton Middle School',
				 'C. John Quincy Adams Middle School',
				 'D. Washington High School'],
		q8: ['A. Typhoon Lagoon',
				 'B. Pleasure Island',
				 'C. Both A & B',
				 'D. None of the above'],
		q9: ['A. The Night Before Christmas',
				 'B. Three Little Pigs',
				 'C. The Old Mill',
				 'D. The Gallopin\' Gaucho'],
		q10: ['A. Recycling used film footage',
				  'B. Designing US Army & US Navy insignia',
				  'C. Hosted a Studio Victory Garden where employees grew food for their families',
				  'D. Forced employees to carpool by closing parking lots to non-carpool cars']		 						
	}

$(document).ready(function() {
	$('#start').click(countdownTimer.start);
});