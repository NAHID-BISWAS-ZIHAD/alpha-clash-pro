function getHiddenId(eventId) {
    const hiddenId = document.getElementById(eventId);
    hiddenId.classList.add('hidden');
}
function getShowId(eventId) {
    const showId = document.getElementById(eventId);
    showId.classList.remove('hidden');
}



function getARandomNumber() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const makeArray = alphabetString.split('');

    const getOneNumber = Math.random() * 25;
    const makeRound = Math.round(getOneNumber);
    const getStringValue = makeArray[makeRound];

    return getStringValue;
}

function setBackground(eventId) {
    const getId = document.getElementById(eventId);
    getId.classList.add('bg-orange-400');
}

function removeBackground(eventId) {
    const getId = document.getElementById(eventId);
    getId.classList.remove('bg-orange-400');
}

function currentScore(eventId) {
    const currentScoreId = document.getElementById(eventId);
    const currentScoreText = currentScoreId.innerText;
    const currentScoreNumber = parseInt(currentScoreText);
    return currentScoreNumber;
    
}
function setValue(eventId,value){
    const getValue = document.getElementById(eventId);
    getValue.innerText = value;
}

function getTextElementId (eventId){
    const getId = document.getElementById(eventId);
    const text = getId.innerText;
    return text;
}
