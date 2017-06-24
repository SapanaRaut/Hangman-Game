//<script type="text/javascript">
        //variables used
var count = 0;
var remainingGuesses = 15;


//Array of words for hangman
var fruitsArray = ["apple", "mango", "banana", "pineapple", "cherry", "qiwi"];


//empty arrays to hold letters that are guessed
var guessAnswer = [];
var wrongGuess = [];
var noofWin = [];

var theWord = fruitsArray[Math.floor(Math.random() * fruitsArray.length)];
//computer displays word with underscores 
function startUp() {
    for (var i = 0; i < theWord.length; i++) {

        // answerToGuess[i] = "_";
        guessAnswer.push("_");
    }

    var n = guessAnswer.join(" ");
    document.getElementById("answer").innerHTML = n;
    remainingGuesses = 15;
}

startUp();
//User input
document.onkeyup = function (event) {

    var guessedLetter = String.fromCharCode(event.keyCode).toLowerCase();

    document.getElementById("letter").innerHTML = guessedLetter;


    if (guessedLetter.length > 0) {

        for (var j = 0; j < theWord.length; j++) {
            if (theWord[j] === guessedLetter) {
                guessAnswer[j] = guessedLetter;
                    if (win()) {
                    }
            }
            if (guessedLetter !== theWord[j]) {
                if (wrongGuess.indexOf(guessedLetter) === -1) {
                wrongGuess.push(guessedLetter);
                remainingGuesses--;
                document.getElementById("logged-guess").innerHTML = wrongGuess;  
                }
            }
            if (remainingGuesses === 0) {
                var confirmAgain = confirm("Game Over! Would you like to play again?");
                console.log(confirmAgain);
                if (confirmAgain === true) {
                    location.reload();
                }
            }
        }
    }
    document.getElementById("counter").innerHTML = "Remaining guesses: " + remainingGuesses;
    document.getElementById("answer").innerHTML = guessAnswer.join(" ");
};

function win() {
    var checkUserInput = guessAnswer.join("");
    var checkCompWord = theWord;
 var guessCounter = document.getElementById("counter").innerHTML = "Guesses: " + remainingGuesses;
    if (checkUserInput === checkCompWord) {
        alert("You Win!");
        noofWin++;
        document.getElementById("winNumber").innerHTML = noofWin;
        restart();
};
  
//location.reload();
    
    function restart(){
    theWord = fruitsArray[Math.floor(Math.random() * fruitsArray.length)]; 
    wrongGuess = [];
    guessAnswer = [];
    startUp();
    document.getElementById("counter").innerHTML = "Remaining guesses: " + remainingGuesses;
    document.getElementById("logged-guess").innerHTML = " ";
    document.getElementById("letter").innerHTML = " ";  
        
};
};

//</script>