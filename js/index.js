$(document).ready( function() {
    const _score = document.getElementById("score");
    const _highScore = document.getElementById("highScore");
    // Score counter
    let gameScore = 0;
    // High Score Counter
    let highScore = 0;
    // Counter for the penguin image
    let penguinCounter = 0;
    function audioSound(id) {
        // To play the song of yeti or penguin whichever id is fired from the mousedown function
        var myAudio = document.getElementById(id);
        myAudio.currentTime = 0;
        myAudio.play();
    }
    
    function shuffleIcons() {
        // Shuffling the main div childerns
        var parent = $("#shuffleIcons");
        var divs = parent.children();
        while (divs.length) {
            parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        }
    }
    
    function endGame() {
        // reseting the styles and values
        $("#yeti").removeAttr("style");
        $("#highScore").removeAttr("style");
        gameScore = 0;
        penguinCounter = 0;
        _score.innerHTML = gameScore + "<br/> Score";
        shuffleIcons();
    }
    
    function highScoreAnimate() {
        // Animation effect for the High Score Board
        $("#highScore").css("color","red");
        $("#highScore").animate({
            fontSize:'1.8em'
        },"slow");
         $("#highScore").animate({
            fontSize:'1.5em'
        },"slow");
    }
     
    // used on() method because creating dynamic div tag on different level "easy , normal , difficult " to perform clicking.
    $(document).on("click", "#yeti" , function() {
        // When yeti is clicked
        $("#yeti").css("background-image","url('/images/yeti.png')");
        $(".penguinActive").removeAttr("style");
        $(".penguinActive").attr("class","penguin");
        // Getting high score if greater then main score
        if(gameScore > highScore) {
            highScore = gameScore;
            _highScore.innerHTML = highScore + "<br/> HighScore";
           highScoreAnimate();
        }
        // calling sound function of yeti id
        audioSound("yetiSound");
        // delaying the end game function
        setTimeout(endGame,1500);
        
    });

     $(document).on("click", ".penguin" , function() {
         // reseting counter if penguin is 8 because image name ends on 8 like penguin8
            if(penguinCounter == 8) {
           penguinCounter = 0;
           }
         // if condition to stable the image and sound on click 
        if($(this).attr("class")=="penguin") {
            gameScore += 1;
            penguinCounter += 1;
            _score.innerHTML = gameScore + "<br/> Score";
            $(this).css("background-image","url('/images/penguin_" + penguinCounter + ".png')");
            audioSound("penguinSound");
        }
        $(this).attr("class","penguinActive");
        });
    $("#easy").mousedown(function() {
        // color effect
        $("#normal").css("background-color","rgba(0, 0, 0, .1)");
        $("#difficult").css("background-color","rgba(0, 0, 0, .1)");
        $(this).css("background-color","white");
        // removing the div tag 
        $("#shuffleIcons").find("div").remove();
        // adding the div tag for easy level
        for(var i=0;i<8;i++) {
            $("#shuffleIcons").append("<div class='penguin'></div>");
        }
         $("#shuffleIcons").append("<div id='yeti'></div>");
        gameScore = 0;
        penguinCounter = 0;
        _score.innerHTML = gameScore + "<br/> Score";
        shuffleIcons();
    });
    $("#normal").mousedown(function() {
         // color effect
        $("#easy").css("background-color","rgba(0, 0, 0, .1)");
        $("#difficult").css("background-color","rgba(0, 0, 0, .1)");
        $(this).css("background-color","white");
        // removing the div tag 
        $("#shuffleIcons").find("div").remove();
        // adding the div tag for normal level
        for(var i=0;i<11;i++) {
            $("#shuffleIcons").append("<div class='penguin'></div>");
        }
         $("#shuffleIcons").append("<div id='yeti'></div>");
        gameScore = 0;
        penguinCounter = 0;
        _score.innerHTML = gameScore + "<br/> Score";
        shuffleIcons();
    });
    $("#difficult").mousedown(function() {
         // color effect
        $("#normal").css("background-color","rgba(0, 0, 0, .1)");
        $("#easy").css("background-color","rgba(0, 0, 0, .1)");
        $(this).css("background-color","white");
        // removing the div tag 
        $("#shuffleIcons").find("div").remove();
        // adding the div tag for difficult level
        for(var i=0;i<14;i++) {
            $("#shuffleIcons").append("<div class='penguin'></div>");
        }
         $("#shuffleIcons").append("<div id='yeti'></div>");
        gameScore = 0;
        penguinCounter = 0;
        _score.innerHTML = gameScore + "<br/> Score";
        shuffleIcons();
    });
    
    endGame();
    
});