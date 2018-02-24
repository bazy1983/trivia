var reguestQuestions;

reguestQuestions = new XMLHttpRequest();
reguestQuestions.open("GET", "./js/questions.json", true);
reguestQuestions.onload = function() {
    console.log (reguestQuestions.responseText);
    console.log (reguestQuestions.status)
}
reguestQuestions.send(null);