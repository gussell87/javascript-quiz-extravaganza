var questions = ["In what year was JavaScript first introduced?   \n \n A. 1993 \n B. 1995 \n C. 1999 \n D. 2001",
    "JavaScript was first developed to add programs to webpages in which browser?\n \n A. Internet Explorer \n B. Omni Web \n C. Mozilla \n D. Netscape Navigator",
    "What to Java and JavaScript have in common as programming languages?  \n \n A. Very little. Javascript was named as a marketing ploy to leverage Java's growing popularity \n B. They were developed by the same company \n C. The two can be used interchangeably for the same processes \n D. The two can be used together for complementary processes",
    "What other name can be used interchangeably with JavaScript?  \n \n A. Java \n B. HTML \n C. BrowserScript \n D. ECMAScript",
    "How many bits does JavaScript use to store a single number value?  \n \n A. 4 \n B. 16 \n C. 64 \n D. 128",
    "What is the appoximate largest whole number that can be stored in JavaScript? \n \n A. 256 Billion \n B. 64 Trillion \n C. 9 Quadrillion \n D. 18 Quintillion",
    "The % sign represents which arithmetic operator?  \n \n A. Remainder \n B. Percentage of \n C. Divide \n D. Less than",
    "What symbol would you type before a declaration to indicate it is not true?  \n \n A. ? \n B. - \n C. / \n D. !"];

var minutesLeft = 5;
var secondsLeft = 0;
var startButton = document.querySelector("#start-button");
var secondsElapsed = 0;
var answerButtons = document.getElementById("answer-buttons");

document.getElementById("start-button").addEventListener("click", question1);
// document.getElementById("start-button").addEventListener("click", startTimer);

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

function wrongAnswer() {
    document.getElementById("footer-note").innerHTML = "Wrong";
    //subtract 20 seconds
}

function correctAnswer() {
    document.getElementById("footer-note").innerHTML = "Correct";
}

function question1() {
    //Which year
    //Unique to first question
    answerButtons.classList.remove("hide");
    document.getElementById("start-button").style.display = "none";
    document.getElementById("highScoresLink").style.display = "none";

    //Repeat for subsequent questions
    //Display question
    document.getElementById("welcome-message").innerHTML = "Question 1";
    document.getElementById("quizArea").innerHTML = questions[0];

    //When answer button clicked (has to be a way to shorten this....)
    document.getElementById("buttonA").addEventListener("click", wrongAnswer);
    document.getElementById("buttonB").addEventListener("click", correctAnswer);
    document.getElementById("buttonC").addEventListener("click", wrongAnswer);
    document.getElementById("buttonD").addEventListener("click", wrongAnswer);
    document.getElementById("answer-buttons").addEventListener("click", question2);

    //Start clock countdown
}

function question2() {
    //Which browser
    document.getElementById("welcome-message").innerHTML = "Question 2";
    document.getElementById("quizArea").innerHTML = questions[1];
    document.getElementById("answer-buttons").addEventListener("click", question2);
    document.getElementById("buttonA").addEventListener("click", wrongAnswer);
    document.getElementById("buttonB").addEventListener("click", wrongAnswer);
    document.getElementById("buttonC").addEventListener("click", wrongAnswer);
    document.getElementById("buttonD").addEventListener("click", correctAnswer);
    document.getElementById("answer-buttons").addEventListener("click", question3);
}

function question3() {
    //JS vs Java
    document.getElementById("welcome-message").innerHTML = "Question 3";
    document.getElementById("quizArea").innerHTML = questions[2];
    document.getElementById("buttonD").removeEventListener("click", correctAnswer);
    document.getElementById("buttonA").addEventListener("click", correctAnswer);
    document.getElementById("buttonB").addEventListener("click", wrongAnswer);
    document.getElementById("buttonC").addEventListener("click", wrongAnswer);
    document.getElementById("buttonD").addEventListener("click", wrongAnswer);
    document.getElementById("answer-buttons").addEventListener("click", question4);
}

function question4() {
    //Other Java name
    document.getElementById("welcome-message").innerHTML = "Question 4";
    document.getElementById("quizArea").innerHTML = questions[3];
    document.getElementById("buttonA").removeEventListener("click", correctAnswer);
    document.getElementById("buttonA").addEventListener("click", wrongAnswer);
    document.getElementById("buttonB").addEventListener("click", wrongAnswer);
    document.getElementById("buttonC").addEventListener("click", wrongAnswer);
    document.getElementById("buttonD").addEventListener("click", correctAnswer);
    document.getElementById("answer-buttons").addEventListener("click", question5);
}

function question5() {
    //How many bits (thinks A is correct)
    document.getElementById("welcome-message").innerHTML = "Question 5";
    document.getElementById("quizArea").innerHTML = questions[4];
    document.getElementById("buttonD").removeEventListener("click", correctAnswer);
    document.getElementById("buttonA").addEventListener("click", wrongAnswer);
    document.getElementById("buttonB").addEventListener("click", wrongAnswer);
    document.getElementById("buttonC").addEventListener("click", correctAnswer);
    document.getElementById("buttonD").addEventListener("click", wrongAnswer);
    document.getElementById("answer-buttons").addEventListener("click", question6);
    //
}

function question6() {
    //largest whole number (thinks A is correct)
    document.getElementById("welcome-message").innerHTML = "Question 6";
    document.getElementById("quizArea").innerHTML = questions[5];
    document.getElementById("buttonA").addEventListener("click", wrongAnswer);
    document.getElementById("buttonB").addEventListener("click", wrongAnswer);
    document.getElementById("buttonC").addEventListener("click", correctAnswer);
    document.getElementById("buttonD").addEventListener("click", wrongAnswer);
    document.getElementById("answer-buttons").addEventListener("click", question7);
    //c
}
function question7() {
    // What does % mean (thinks D is correct)
    document.getElementById("welcome-message").innerHTML = "Question 7";
    document.getElementById("quizArea").innerHTML = questions[6];
    document.getElementById("buttonC").removeEventListener("click", correctAnswer);
    document.getElementById("buttonA").addEventListener("click", correctAnswer);
    document.getElementById("buttonB").addEventListener("click", wrongAnswer);
    document.getElementById("buttonC").addEventListener("click", wrongAnswer);
    document.getElementById("buttonD").addEventListener("click", wrongAnswer);
    document.getElementById("answer-buttons").addEventListener("click", question8);
    //a
}

function question8() {
    // What symbol for not true (thinks A is correct)
    document.getElementById("welcome-message").innerHTML = "Question 8";
    document.getElementById("quizArea").innerHTML = questions[7];
    document.getElementById("buttonA").removeEventListener("click", correctAnswer);
    document.getElementById("buttonA").addEventListener("click", wrongAnswer);
    document.getElementById("buttonB").addEventListener("click", wrongAnswer);
    document.getElementById("buttonC").addEventListener("click", wrongAnswer);
    document.getElementById("buttonD").addEventListener("click", correctAnswer);
    //d
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

// function setTime() {
//     var minutes;
//     minutes = workMinutesInput.value.trim();
//     clearInterval(interval);
//     totalSeconds = minutes * 60;
// }

// function startTimer() {
//     setTime();
//     interval = setInterval(function () {
//         secondsElapsed++;
//         renderTime();
//     }, 1000);
// }