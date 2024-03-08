// timer.js
document.getElementById('start').addEventListener('click', function () {
    const hours = parseInt(document.getElementById('hours').value, 10);
    const minutes = parseInt(document.getElementById('minutes').value, 10);
    const seconds = parseInt(document.getElementById('seconds').value, 10);

    if (isNaN(hours)) { hours = 0; }
    if (isNaN(minutes)) { minutes = 0; }
    if (isNaN(seconds)) { seconds = 0; }

    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
        alert('Please enter valid numeric values for hours, minutes, and seconds.');
        return;
    }

    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    let remainingSeconds = totalSeconds;

    const progressBar = document.getElementById('progress');
    const countdownDisplay = document.getElementById('countdown');

    const intervalId = setInterval(function () {
        const percentComplete = ((totalSeconds - remainingSeconds) / totalSeconds) * 100;
        progressBar.style.width = percentComplete + '%';

        const displayHours = Math.floor(remainingSeconds / 3600);
        const displayMinutes = Math.floor((remainingSeconds % 3600) / 60);
        const displaySeconds = remainingSeconds % 60;
        countdownDisplay.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;

        if (--remainingSeconds < 0) {
            clearInterval(intervalId);
            countdownDisplay.textContent = 'Time\'s up!';
        }
    }, 1000);
});
