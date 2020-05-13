
function submitAnswers(){
	var questionAmount = 8; 
	var userScore = 0;


	var q1 = document.forms['quizForm']['q1'].value;
	var q2 = document.forms['quizForm']['q2'].value;
	var q3 = document.forms['quizForm']['q3'].value;
	var q4 = document.forms['quizForm']['q4'].value;
  var q5 = document.forms['quizForm']['q5'].value;
  var q6 = document.forms['quizForm']['q6'].value;
  var q7 = document.forms['quizForm']['q7'].value;
  var q8 = document.forms['quizForm']['q8'].value;

	for (i=1; i<=questionAmount; i++) {

		if(eval('q'+i)==null || eval('q'+i)==''){
			alert('You havent selected anything for question '+i+'!');
			return false; 
		}

	}


	var answers = ['a','a','d','c','d','a','b','b'];


	for (i=1; i<=questionAmount; i++){
		if(eval('q'+i)==answers[i-1]){
			userScore++;
		}
	}

	var result = document.getElementById('results');
	results.innerHTML = '<h3>You scored <span>'+userScore+'</span> out of <span>' + questionAmount + '</span>!';

	alert('You scored ' + userScore + ' out of ' + questionAmount);

	return false; 

}


var minutesLeft = 10;
var timeLeft = Date.parse(new Date());
var lastTime = new Date(timeLeft + minutesLeft*60*1000);


function timeRemaining(endtime){
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );
	return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
}

function startClock(id,endtime){
	var clock = document.getElementById(id);
	function updateTime(){
		var t = timeRemaining(endtime);
		clock.innerHTML = 'minutes: '+t.minutes+'<br>seconds: '+t.seconds;
		if(t.total<=0){ clearInterval(timeinterval); }
	}
	updateTime(); // run function once at first to avoid delay
	var timeinterval = setInterval(updateTime,1000);
}

startClock('clockwork',lastTime);

if (minutesLeft = 0){
  alert("You lost. Too Slow")
}