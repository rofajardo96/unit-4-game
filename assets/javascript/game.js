var wins = 0;
var losses = 0;
var random_res;
var prevNum = 0;

var start_reset = function () {

    $(".crystals").empty();
    
    random_res = Math.floor(Math.random() * 101) + 19;

    $("#result").html('Random Result: ' + random_res);
    
    for(var i = 0; i < 4; i++){
        
        var random = Math.floor(Math.random() * 11) + 1;
        
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal', "randomize-number": random
            });

        $(".crystals").append(crystal);

    }
}

start_reset();

$(document).on('click', ".crystal", function () {
    
    var num = parseInt($(this).attr('randomize-number'));
    prevNum += num;
    
    console.log(prevNum);
    
    if(prevNum > random_res){
        
        losses++;
        
        $("#losses").html(losses);

        prevNum = 0;

        start_reset();
    } 
    else if(prevNum === random_res){
        
        wins++;
        
        $("#wins").html(wins);

        prevNum = 0;

        start_reset();
        
    }

    
});

