const questions = [
    {
        q: "Who invented JavaScript?",
        options: ["Dennis Ritchie", "Brendan Eich", "James Gosling", "Guido van Rossum"],
        answer: 1
    },
    {
        q: "Which language runs in browser?",
        options: ["C", "Java", "Python", "JavaScript"],
        answer: 3
    },
    {
        q: "Which symbol is used for comments in JS?",
        options: ["//", "<!-- -->", "#", "**"],
        answer: 0
    }
];
let button=document.querySelectorAll("button");


let index = 0;
let score = 0;
function showQuestion()
{
    document.getElementById("question").innerText=questions[index].q;

button[0].innertext=questions[index].options[0];
button[1].innertext=questions[index].options[1];
button[2].innertext=questions[index].options[2];
button[3].innertext=questions[index].options[3];
}
function checkAnswer(selected)
{
    if(selected==questions[index].answer) {
        score++;
        alert("correct")
    }
    else{
        alert("wrong");
    }
    index++;
   if(index<questions.length){
showQuestion();

   }
   else{
    document.body.innerHTML.HTML="<h2>Quiz Finished</h2><h3>Score:"+score+"</h3>"

   }
   
}













