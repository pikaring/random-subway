// timer.js

function zeroPadding(NUM, LEN) {
    return (Array(LEN).join('0') + NUM).slice(-LEN);
}

document.getElementById('start').addEventListener('click', function () {
    const hours = parseInt(document.getElementById('hours').value, 10);
    const minutes = parseInt(document.getElementById('minutes').value, 10);
    const seconds = parseInt(document.getElementById('seconds').value, 10);

    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
        alert('Please enter valid numeric values for hours, minutes, and seconds.');
        return;
    }

    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    let remainingSeconds = totalSeconds;
    let isPaused = false; // フラグを追加

    const progressBar = document.getElementById('progress');
    const countdownDisplay = document.getElementById('countdown');

    const intervalId = setInterval(function () {
        if (!isPaused) { // 一時中断されていない場合のみ進める
            const percentComplete = ((totalSeconds - remainingSeconds) / totalSeconds) * 100;
            progressBar.style.width = percentComplete + '%';

            const displayHours = zeroPadding(Math.floor(remainingSeconds / 3600), 2);
            const displayMinutes = zeroPadding(Math.floor((remainingSeconds % 3600) / 60), 2);
            const displaySeconds = zeroPadding(remainingSeconds % 60, 2);
            countdownDisplay.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;

            if (--remainingSeconds < 0) {
                clearInterval(intervalId);
                countdownDisplay.textContent = 'Time\'s up!';
                alert("Time\'s up!");
            }
        }
    }, 1000);

    // 一時中断ボタンのクリックイベント
    document.getElementById('pause').addEventListener('click', function () {
        isPaused = !isPaused; // フラグを切り替える
    });
    
    /*
     // 一時中断ボタンのクリックイベント(新規)
    pauseButton.addEventListener('click', function () {
        isPaused = !isPaused; // フラグを切り替える
        if (isPaused) {
            pauseButton.classList.add('paused-button'); // 一時中断されたらクラスを追加
        } else {
            pauseButton.classList.remove('paused-button'); // 再開されたらクラスを削除
        }
        });
    */

    // リセットボタンのクリックイベント
    document.getElementById('reset').addEventListener('click', function () {
        clearInterval(intervalId); // タイマーを停止
        remainingSeconds = totalSeconds; // 残り時間をリセット
        progressBar.style.width = '0%'; // プログレスバーを初期状態に戻す
        countdownDisplay.textContent = ''; // 表示を初期状態に戻す
    });
});
