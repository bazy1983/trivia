$(document).ready(function(){
    
console.log (myQuestions);
// iterate through the length of the array myQuestions and create P element
for (var i = 0; i < myQuestions.length; i++){
    var newP = $("<p class ='lead '>" + myQuestions[i].question + "</p>");
    
    $("#questions").append(newP);

    //create a box for the radio buttons
    var row = $("<div class = 'row "+myQuestions[i].name +"' </div>")
    var hairLine = $("<hr>")
    $("#questions").append(row);
    $("#questions").append(hairLine);

    for (var ai = 0; ai < myQuestions[i].answers.length; ai++){
        

        var choice = $("<div>");
            choice.addClass ("col-sm-3 txtred");
            choice.html("<input type = 'radio' name = '"+myQuestions[i].name+"' value = '" + myQuestions[i].answers[ai] + "'/>"
             + myQuestions[i].answers[ai])
        $("."+myQuestions[i].name).append(choice);
        
    } //end of answers loop
    
} // end of questions loop

var answerArray
$("input").on("change", function(){
    answerArray = $(this).val();
    console.log(answerArray)
})



})
