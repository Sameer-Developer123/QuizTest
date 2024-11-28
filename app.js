var quizData = [
    {
        question: "1. What does HTML stand for?",
        option1: "Hyper Text Markup Language",
        option2: "Handsome Text Markup Language",
        option3: "Haper Text Markup Lineup",
        option4: "Hyper Text Make Lineup",
        correctAnswer: 1
    },
    {
        question: "2. What does CSS stand for?",
        option1: "Cascading Style Sheets",
        option2: "Colorful Style Sheets",
        option3: "Computer Style Sheets",
        option4: "Creative Style System",
        correctAnswer: 1
    },
    {
        question: "3. What is JavaScript primarily used for?",
        option1: "Styling web pages",
        option2: "Adding interactivity to web pages",
        option3: "Creating server-side applications",
        option4: "Designing graphics",
        correctAnswer: 2
    },
    {
        question: "4. Which HTML element is used to define the title of a document?",
        option1: "head",
        option2: "title",
        option3: "meta",
        option4: "header",
        correctAnswer: 2
    },
    {
        question: "5. What is the correct HTML element for inserting a line break?",
        option1: "break",
        option2: "br",
        option3: "lb",
        option4: "New Line",
        correctAnswer: 2
    },
    {
        question: "6. Which tag is used to create a hyperlink?",
        option1: "Link",
        option2: "a",
        option3: "href",
        option4: "url",
        correctAnswer: 2
    },
    {
        question: "7. What does the 'src' attribute specify in an <img> tag?",
        option1: "The size of the image",
        option2: "The source of the image",
        option3: "The style of the image",
        option4: "The name of the image",
        correctAnswer: 2
    },
    {
        question: "8. Which CSS property controls the text size?",
        option1: "font-size",
        option2: "text-size",
        option3: "font-style",
        option4: "text-style",
        correctAnswer: 1
    },
    {
        question: "9. Which JavaScript method is used to write text to the console?",
        option1: "console.write()",
        option2: "console.log()",
        option3: "console.print()",
        option4: "log.console()",
        correctAnswer: 2
    },
    {
        question: "10. What is the purpose of the div tag in HTML?",
        option1: "To insert an image",
        option2: "To create a block-level container",
        option3: "To create a hyperlink",
        option4: "To style text",
        correctAnswer: 2
    }
];

var Question = document.getElementById("Question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var radio = document.getElementsByName("option");
var option_Container = document.getElementById("option_Container")
var PointCount = 0;
var Count = 0;

    Question.innerHTML = quizData[Count].question;
    option1.innerHTML = quizData[Count].option1;
    option2.innerHTML = quizData[Count].option2;
    option3.innerHTML = quizData[Count].option3;
    option4.innerHTML = quizData[Count].option4;
   

function Nextbtn() {


    Count++
    Question.innerHTML = quizData[Count].question;
    option1.innerHTML = quizData[Count].option1;
    option2.innerHTML = quizData[Count].option2;
    option3.innerHTML = quizData[Count].option3;
    option4.innerHTML = quizData[Count].option4;
    UpdateScore();
    document.getElementById("Nextbtn").disabled = true;

    if(Count === quizData.length -1){
        
        document.getElementById("Resultbtn").className += " show"
        document.getElementById("Nextbtn").style.display = "none"
        
    }

}



function UpdateScore() {
    for (var i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
        if (i + 1 === quizData[Count - 1].correctAnswer) {
          PointCount += 10;
        }
        radio[i].checked = false;
      }
    }
  }


function Enablebtn() {

    document.getElementById("Nextbtn").disabled = false
    if(Count === quizData.length -1){
        document.getElementById("Resultbtn").disabled = false
    }
}



// Timer
var timeLeft = 60;
var timerDisplay = document.getElementById('timer');
var timer = setInterval(() => {
    if (timeLeft <= 0) {
        clearInterval(timer);
        timerDisplay.textContent = "Time's up!";

    } else {
        timerDisplay.textContent = timeLeft;
        timeLeft--;
    }
}, 1000);






function Result() {
    UpdateScore();
    document.getElementById('MainContainer').style.display = 'none'
    document.getElementById('resultmainContainer').style.display = ''
    document.getElementById("obtPoints").innerHTML = PointCount;
    document.getElementById("CorrectAns").innerHTML = PointCount / 10;
    document.getElementById("WrongAns").innerHTML = 10 - PointCount / 10;
    if (PointCount < 40) {
      document.getElementById("result").innerHTML = "Fail";
      document.getElementById("result").setAttribute("class","Fail") 
    } else {
      document.getElementById("result").innerHTML = "Pass";
      document.getElementById("result").setAttribute("class","Pass") 
    }
}
