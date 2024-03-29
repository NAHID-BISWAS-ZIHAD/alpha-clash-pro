// function play(){
//     const hiddenHome = document.getElementById('home');
//     hiddenHome.classList.add('hidden');

//     const showPlayGround = document.getElementById('play-ground');
//     showPlayGround.classList.remove('hidden');
// }

const audio = new Audio();
let onGamePlay = false;

document.addEventListener('keyup', function (event) {
    if(onGamePlay === false) return;
    const getEvent = event.key;
    console.log('key pressed', getEvent);

    if(getEvent === 'Escape'){
        gameOver();
    }

    const getcurrentAlphabet = document.getElementById('current-alphabet');
    const getText = getcurrentAlphabet.innerText;
    const getLower = getText.toLowerCase();
    // console.log(getEvent,getLower);

    if (getEvent === getLower) {
        console.log('you get a point');
        removeBackground(getLower);
        startGame();
        audio.src = "../audio/success.mp3";
        audio.play();
        const currentScoreId = currentScore('current-score');
        const newScore = currentScoreId + 1;
        setValue('current-score', newScore);
    }
    else {
        console.log('you are failed');
        const currentLifeId = currentScore('current-life');
        const updateLife = currentLifeId - 1;
        setValue('current-life', updateLife);
        audio.src = '../audio/wrong.mp3';
        audio.play();
        if (updateLife === 0) {
            gameOver();
        }
    }
})

function startGame() {
    const alphabat = getARandomNumber();

    const getcurrentAlphabet = document.getElementById('current-alphabet');
    getcurrentAlphabet.innerText = alphabat;
    setBackground(alphabat);

    
}

function play() {
    getHiddenId('home');
    getHiddenId('final-score');
    getShowId('play-ground');
    startGame();
    onGamePlay = true;
    setValue('current-life', 3);
    setValue('current-score', 0);
     
}

function gameOver() {
    getHiddenId('play-ground');
    getShowId('final-score');

    // show last score

    const lastScore = currentScore('current-score');
    setValue('last-score',lastScore);

    // 
    const removeBackColor = getTextElementId('current-alphabet');
    removeBackground(removeBackColor);

    onGamePlay = false;
}
