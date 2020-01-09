const html = document.querySelector("html");
const s = document.styleSheets[0];

// text at the top include text-buttons
const tryBtn = document.querySelector('.popout');
const ants = document.querySelector('.ants');
const text = document.querySelector('.text');
const goodbye = document.querySelector('.goodbye');

// body parts
const leftLeg = document.querySelector("#LeftLeg");
const rightLeg = document.querySelector("#RightLeg");
const rightHand = document.querySelector("#RightHand");
const head = document.querySelector(".roboHead");
const audio = document.querySelector('.media');
const mouth = document.querySelector("#mouth");

// pause play stop buttons
const buttons = document.querySelector(".buttons");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const stop = document.querySelector(".stop");


// add animation to the robo-parts in css
function startMoving() {
        mouth.classList.remove("hidden");
        leftLeg.classList.add("animate-LeftLeg");
        rightLeg.classList.add("animate-RightLeg");
        head.classList.add("animate-roboHead");
        rightHand.classList.add("animate-RightHand");
        mouth.classList.add("animate-mouth");

        changeStylesheetRule(s, ".animate-LeftLeg", "animation-play-state", "running");
        changeStylesheetRule(s, ".animate-RightLeg", "animation-play-state", "running");
        changeStylesheetRule(s, ".animate-roboHead", "animation-play-state", "running");
        changeStylesheetRule(s, ".animate-RightHand", "animation-play-state", "running");
        changeStylesheetRule(s, ".animate-mouth", "animation-play-state", "running");
}

function stopMoving() {
    leftLeg.classList.remove("animate-LeftLeg");
    rightLeg.classList.remove("animate-RightLeg");
    head.classList.remove("animate-roboHead");
    rightHand.classList.remove("animate-RightHand");
    mouth.classList.remove("animate-mouth");
}

function pauseMoving() {
    changeStylesheetRule(s, ".animate-LeftLeg", "animation-play-state", "paused");
    changeStylesheetRule(s, ".animate-RightLeg", "animation-play-state", "paused");
    changeStylesheetRule(s, ".animate-roboHead", "animation-play-state", "paused");
    changeStylesheetRule(s, ".animate-RightHand", "animation-play-state", "paused");
    changeStylesheetRule(s, ".animate-mouth", "animation-play-state", "paused");

}

// manipulate with buttons
function btnAdjustToStartDancing() {
    tryBtn.classList.add("hidden");
    ants.classList.remove("hidden");
    text.classList.add("hidden");
    buttons.classList.remove("hidden");
    goodbye.classList.add('hidden');
}

function dance() {
    startMoving();
    audio.play();
    btnAdjustToStartDancing();
}

function pauseDancing() {
    audio.pause();
    pauseMoving();
}

 function stopDancing() {
     audio.load();
     stopMoving(); 
     ants.classList.add("hidden");
     goodbye.classList.remove("hidden");
}

// set background change
function setGradient () {
    let color1 = `rgb(${Math.floor(Math.random() * 257 - 1)},${Math.floor(Math.random() * 257 - 1)},${Math.floor(Math.random() * 257 - 1)})`;
    let color2 = `rgb(${Math.floor(Math.random() * 257 - 1)},${Math.floor(Math.random() * 257 - 1)},${Math.floor(Math.random() * 257 - 1)})`;    
	html.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}

// change stylesheet rule
function changeStylesheetRule(s, selector, property, value) {

    for (let i = 0; i < s.cssRules.length; i++) {
        let rule = s.cssRules[i];
        if (rule.selectorText === selector) {
            rule.style[property] = value;
            break;
        }
    }
}

tryBtn.addEventListener('click', dance);
pause.addEventListener('click', pauseDancing);
play.addEventListener('click', dance);
stop.addEventListener('click', stopDancing);
head.addEventListener('animationiteration', setGradient);