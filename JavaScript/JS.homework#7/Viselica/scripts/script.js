const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".full-game");
const playAgainBtn = gameModal.querySelector("button");


// Инициализация игровых переменных
let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;

const resetGame = () => {
    // Сброс игровых переменных и элементов UI
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = "img/hangman-0.svg";
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    gameModal.classList.remove("show");
}

const getRandomWord = () => {
    // Выбор случайного слова и подсказки из списка слов
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word; //Создание "currentWord" - как случайного слова
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
}

const gameOver = (isVictory) => {
    // После завершения игры, отображение модального окна с соответствующими деталями
    const modalText = isVictory ? `Ты угадал слово:` : 'Правильное слово:';
    gameModal.querySelector("img").src = `img/${isVictory ? 'victory' : 'lost'}.gif`;
    gameModal.querySelector("h4").innerText = isVictory ? 'Ты угадал, харош!' : 'Мда, ты пытался';
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");
}

const initGame = (button, clickedLetter) => {
    // Проверяем, существует ли выбранная буква в текущем слове
    if(currentWord.includes(clickedLetter)) {
        // Показ всех правильных букв
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        // Если выбранная буква не существует, обновить неправильное GuessCount
        wrongGuessCount++;
        hangmanImage.src = `img/hangman-${wrongGuessCount}.svg`;
    }
    button.disabled = true; // Отключаем нажатую кнопку, чтобы пользователь не мог нажать еще раз
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    // Вызов функции gameover, если выполняется любое из этих условий
    if(wrongGuessCount === maxGuesses) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);
    
    if (guessedLetters.length === word.length) {
        score++;
      }

}

// Создание кнопок клавиатуры 
for (let i = 1072; i <= 1103; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);

// строка весело?
var leftOffset = 0;

var moveHeading = function () {
    $("#heading").offset({ left: leftOffset });

    leftOffset++;

    if (leftOffset > 1500) {
        leftOffset = 0;
    }
};

setInterval (moveHeading, 30);
