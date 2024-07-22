document.addEventListener("DOMContentLoaded", function () {
    changeVideoSrc()
})

function getRandomVideoSrc() {
    const randomNum = Math.floor(Math.random() * 9) + 1;
    return `assets/img/v${randomNum}.mp4`;
}

function changeVideoSrc() {
    const videoElement = document.getElementById('myVideo');
    videoElement.src = getRandomVideoSrc();
    videoElement.load();
}