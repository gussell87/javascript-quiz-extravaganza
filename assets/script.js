var questions = ["In what year was JavaScript first introduced?   \n \n A. 1993 \n B. 1995 \n C. 1999 \n D. 2001",
    "JavaScript was first developed to add programs to webpages in which browser?\n \n A. Internet Explorer \n B. Omni Web \n C. Mozilla \n D. Netscape Navigator",
    "What to Java and JavaScript have in common as programming languages?  \n \n A. Very little. Javascript was named as a marketing ploy to leverage Java's growing popularity \n B. They were developed by the same company \n C. The two can be used interchangeably for the same processes \n D. The two can be used together for complementary processes",
    "What other name can be used interchangeably with JavaScript?  \n \n A. Java \n B. HTML \n C. BrowserScript \n D. ECMAScript",
    "How many bits does JavaScript use to store a single number value?  \n \n A. 4 \n B. 16 \n C. 64 \n D. 128",
    "What is the appoximate largest whole number that can be stored in JavaScript? \n \n A. 256 Billion \n B. 64 Trillion \n C. 9 Quadrillion \n D. 18 Quintillion",
    "The % sign represents which arithmetic operator?  \n \n A. Remainder \n B. Percentage of \n C. Divide \n D. Less than",
    "What symbol would you type before a declaration to indicate it is not true?  \n \n A. ? \n B. - \n C. / \n D. !"];

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
var secondsElapsed = 0;

document.getElementById("start-button").addEventListener("click", question0);
document.getElementById("start-button").addEventListener("click", startTimer);

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
    var ansList = "";
    for (var i = 0; i < ans0.length; i++) {

        ansList += "<li>" + ans[0] + "</li>";
    }


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

function setTime() {
    var minutes;
    minutes = workMinutesInput.value.trim();
    clearInterval(interval);
    totalSeconds = minutes * 60;
}

function startTimer() {
    setTime();
    interval = setInterval(function () {
        secondsElapsed++;
        renderTime();
    }, 1000);
}