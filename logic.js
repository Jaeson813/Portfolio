var words = ["scattered", "crazy", "mailbox","tent","quaint","filthy","long-term"];
var chosenWord = words[Math.floor((Math.random()*words.length))];
var guessedCorrectly = []
var guessedIncorrectly = []
var incorrectGuesses = 10

var target = document.getElementById("incorrect-guesses")
target.textContent = "Incorrect guesses left: " + incorrectGuesses

function refresh() {
    var display = ""
    var target = document.getElementById("display")
    for(var i = 0; i < chosenWord.length; i++) {
        if(chosenWord[i] == " ") {
             display = display + " ␣ "
        }
        else if(guessedCorrectly.includes(chosenWord[i])) {
            display = display + " " + chosenWord[i];
        }
        else {
            display = display + " _";
        }
    }
    target.textContent = display;
    if(!display.includes("_")) {
        alert("You win!")
    }
}

function checkGuess(key) {
    if(chosenWord.includes(key)) {
        guessedCorrectly.push(key);
        refresh();
    }
    else {
        var target = document.getElementById("incorrect-guesses")
        if(!guessedIncorrectly.includes(key)) {
            guessedIncorrectly.push(key);
            incorrectGuesses--;
            target.textContent = "Incorrect guesses left: " + incorrectGuesses + ". You have already guessed: " + guessedIncorrectly.join(", ");
        }
        if(incorrectGuesses == 0) {
            alert("You lose.")
        }
    }
}

document.addEventListener("keypress", newGuess);
function newGuess(e) {
    checkGuess(e.key);
}

refresh();