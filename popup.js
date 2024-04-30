document.getElementById('laugh1').addEventListener('click', function() { playSound('audio/laugh1.mp3'); });
document.getElementById('laugh2').addEventListener('click', function() { playSound('audio/laugh2.mp3'); });
document.getElementById('laugh3').addEventListener('click', function() { playSound('audio/laugh3.mp3'); });
document.getElementById('gasp').addEventListener('click', function() { playSound('audio/gasp.mp3'); });
document.getElementById('boo').addEventListener('click', function() { playSound('audio/boo.mp3'); });

function playSound(soundFile) {
    let audio = new Audio(soundFile);
    audio.play();
}