var questions = ["In what year was JavaScript first introduced?", "JavaScript was first developed to add programs to webpages in which browser?", "What to Java and JavaScript have in common as programming languages?", "What other name can be used interchangeably with JavaScript?", "How many bits does JavaScript use to store a single number value?", "What is the appoximate largest whole number that can be stored in JavaScript?", "The % sign represents which arithmetic operator?", "What symbol would you type before a declaration to indicate it is not true?"];
// This code is broken.
var ans0 = ["1993", "1995", "1999", "2001"];
var ans1 = ["Internet Explorer", "Omni Web", "Mozilla", "Netscape Navigator"]
var ans2 = ["Very little. Javascript was named as a marketing ploy to leverage Java's growing popularity", "They were developed by the same company", "The two can be used interchangeably for the same processes", "The two can be used together for complementary processes"]
var ans3 = ["Java", "HTML", "BrowserScript", "ECMAScript"]
var ans4 = ["4", "16", "64", "128"]
var ans5 = ["256 billion", "64 trillion", "9 quadrillion", "18 quintillion"]
var ans6 = ["Remainder", "Percentage of", "Division", "Is less than"]
var ans7 = ["?", "-", "/", "!"]
var minutesLeft = 5;
var secondsLeft = 0;
var startButton = document.querySelector("#start-button");

document.getElementById("start-button").addEventListener("click", question0);

// function getFormattedMinutes() {
//     //
//     var secondsLeft = totalSeconds - secondsElapsed;

//     var minutesLeft = Math.floor(secondsLeft / 60);

//     var formattedMinutes;

//     if (minutesLeft < 10) {
//         formattedMinutes = "0" + minutesLeft;
//     } else {
//         formattedMinutes = minutesLeft;
//     }

//     return formattedMinutes;
// }

// function getFormattedSeconds() {
//     var secondsLeft = (totalSeconds - secondsElapsed) % 60;

//     var formattedSeconds;

//     if (secondsLeft < 10) {
//         formattedSeconds = "0" + secondsLeft;
//     } else {
//         formattedSeconds = secondsLeft;
//     }

//     return formattedSeconds;
// }

// function setTime() {
//     var timerInterval = setInterval(function () {
//         secondsLeft--;
//         timeE1.textContent = secondsLeft + "seconds left"

//         if (secondsLeft === 0) {
//             if (minutesLeft === 0) {
//                 //stop timer
//                 alert("Sorry, time has expired. Please try again.")
//                 //Return to home screen
//             else {
//                 //add 59 seconds to the clock
//                 //subtrack 1 minute from the clock
//             }
//             //add 
//         }
//         clearInterval(timerInterval);
//         sendMessage();
//     }
//     } 1000)
// }

//Display time & check to see if there's any left
// function renderTime() {
//     minutesDisplay.textContent = getFormattedMinutes();
//     secondsDisplay.textContent = getFormattedSeconds();
//     if (secondsElapsed >= totalSeconds) {
//             alert("Sorry, Time's up!");
//         stopTimer();
//     }
// }

function question0() {
    //var quiz = document.getElementsById("#quizArea");
    // quizArea.textContent = (questions[0])
    document.getElementById("start-button").style.display = "none";
    document.getElementById("welcome-message").innerHTML = "Question 1";
    document.getElementById("quizArea").innerHTML = questions[0];
    document.getElementById("highScoresLink").style.display = "none";
    //display 4 answer boxes
    //Start clock countdown
    //Display question 0
    //Display answers 0
}

    //Copy + paste for questions 0-6
// function quetion1() {
//display question[0]
//display 4 answer boxes
//if (userInput === b) {
//Display "correct" below answers for 5 seconds
//Remove current questions and answers
//Display next question & answers
//}
//Else {
//Display "wrong" below answers for 5 seconds
//Display next question & answers
//remove 20 seconds from timer
//}
// }

// function question7() {
//     if (secondsLeft > 0) {
//         alert("Congratulations, you have conquered the quiz!! Are you sure you're not Brian Eich...")
//         var highScore = prompt("You completed with quiz with " + minutesLeft + " minutes, and " + secondsLeft + " seconds to spare. Enter your name to marvel at your achievement on the High Scores page!")
//         //save initials & score to high score page
//     }
//     else {
//         alert("Oohhh so close! Please try again.")
//     }
//Reset timer
//return to homepage
// }

//add startTimer
//startButton.addEventListener("click", question0);