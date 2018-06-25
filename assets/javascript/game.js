//global variables 
var generatedNum;
var gemScore = {
    ruby: null,
    diamond: null,
    emerald: null,
    canary: null,
}

var userScore;
var wins = 0;
var losses = 0;





//onclick gem 

$(".gem").on("click",function() {
    var gemName = $(this).attr("data-gemType");
    userScore =+ userScore + gemScore[gemName];
    $('#score').text(userScore);
    if (userScore === generatedNum) {
        wins ++;
        $("#wins").text(wins);
        $("#alert").text("You freakin Win!");
        reset();
    } else if 
        (userScore > generatedNum) {
        losses ++;
        $('#losses').text(losses);
        $('#alert').text("You loser!");
        reset();
        }
        else {
            return;
        }
    

    
    
    
    
    console.log(userScore)
});








// onStart funtion 

function reset() {
   generatedNum = Math.ceil(Math.random()*100)+19;
   $("#generatedNum").text(generatedNum);
   gemScore.ruby = Math.ceil(Math.random()*12);
   gemScore.diamond = Math.ceil(Math.random()*12);
   gemScore.emerald = Math.ceil(Math.random()*12);
   gemScore.canary = Math.ceil(Math.random()*12);
   console.log(gemScore);
   userScore = 0;
   $("#score").text(userScore);
}



reset();