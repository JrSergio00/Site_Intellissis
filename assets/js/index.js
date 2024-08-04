let randomNum
let videoElement = document.getElementById('myVideo')

document.addEventListener("DOMContentLoaded", function () {
    changeVideoSrc()
})

function getRandomVideoSrc(randomNum) {
    return `assets/img/v${randomNum}.mp4`
}

function changeVideoSrc() {
    randomNum = Math.floor(Math.random() * 9) + 1
    videoElement.src = getRandomVideoSrc(randomNum)
    videoElement.load()
}

function previousVideo() {
    if(randomNum == 1) {
        randomNum = 9
    } else {
        randomNum = --randomNum
    }
    videoElement.src = getRandomVideoSrc(randomNum)
    videoElement.load()
}
function nextVideo() {
    if(randomNum == 9) {
        randomNum = 1
    } else {
        randomNum = ++randomNum
    }
    videoElement.src = getRandomVideoSrc(randomNum)
    videoElement.load()
}