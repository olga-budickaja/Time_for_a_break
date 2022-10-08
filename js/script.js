let containerSettings = document.querySelector(".container_setting");
let openSettings = document.querySelector(".open_settings");

openSettings.addEventListener("click", openMenuSettings);
function openMenuSettings() {
    containerSettings.classList.toggle("none")
}

let selectHour = document.querySelector(".currency__hour");
let hour;
hourFunction = function () {
    hour = selectHour.value;
    console.log(hour);
}

document.querySelector(".unicode").addEventListener("click", hideСontainerSetting);
function hideСontainerSetting() {
    containerSettings.classList.toggle("none")
}

let theme = document.querySelector(".check").addEventListener("click", changeTopic);
function changeTopic() {
    let keyTopic = document.body.classList.toggle("themeBody")
    localStorage.setItem("theme", JSON.stringify(keyTopic))
}

let keyTopic = JSON.parse(localStorage.getItem("theme"));
if (keyTopic == true) {
    document.body.classList.toggle("themeBody")
}

let selectMusic = document.querySelector(".currency");
let music;
let audio;

musicFunction = function () {
    music = selectMusic.value;
    localStorage.setItem("melody", JSON.stringify(music))
}

music = JSON.parse(localStorage.getItem("melody"));
if (music == "bell") {
    console.log(music);
    audio = new Audio("musics/bell.mp3");
    audio.play();
}
if (music == "bird") {
    console.log(music);
}
if (music == "relax") {
    console.log(music);
}
if (music == "digital") {
    console.log(music);
}
if (music == "beer") {
    console.log(music);
}