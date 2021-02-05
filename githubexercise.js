let startBtn = document.querySelector('#start-timer');
let stopBtn = document.querySelector('#stop-timer');
let timerDisplay = document.querySelector('#timer');
let time = 0.0;

startBtn.addEventListener('click', function(e) {
	e.preventDefault();
	if (e.target === startBtn) {
		timer();
	}
});

function timer(e) {
	let counter = setInterval(function() {
		time += 0.1;
		time = Math.round(time * 10) / 10;
		timerDisplay.innerText = `${time}s`;
		stopBtn.addEventListener('click', function(e) {
			e.preventDefault();
			if (e.target === stopBtn) {
				clearInterval(counter);
			}
		});
	}, 100);
}
