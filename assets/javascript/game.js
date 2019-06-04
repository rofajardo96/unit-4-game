var wins = 0;
var losses = 0;
var random_res;
var prevNum = 0;

var start_reset = function () {

    $(".crystals").empty();

    var images = [
        'https://static.turbosquid.com/Preview/001208/294/QN/red-crystals-3D-model_D.jpg',
        'http://cdn.shopify.com/s/files/1/1342/5013/products/giant_crystal_blue2_grande.jpg?v=1472097716',
        'https://www.zerotoys.com/v/vspfiles/photos/MAGICALCRYSTALS-3.jpg',
        'http://www.sciencetoystore.com/contents/media/l_crystal_yellow_.jpg',

    ];
    
    random_res = Math.floor(Math.random() * 101) + 19;

    $("#result").html('Random Number: ' + random_res);
    
    for(var i = 0; i < 4; i++){
        
        var random = Math.floor(Math.random() * 11) + 1;
        
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal', "randomize-number": random
            });
            crystal.css({
                "background-image":"url('" + images[i] + "')",
                "background-size":"cover"

            });

        $(".crystals").append(crystal);

    }

    $("#previous-number").html("Total Score:" + prevNum)
}

start_reset();

$(document).on('click', ".crystal", function () {
    
    var num = parseInt($(this).attr('randomize-number'));
    prevNum += num;
    
    $("#previous-number").html("Total Score:" + prevNum);
    
    console.log(prevNum);
    
    if(prevNum > random_res){
        
        losses++;
        
        $("#losses").html("Losses:" + losses);

        prevNum = 0;

        start_reset();
    } 
    else if(prevNum === random_res){
        
        wins++;
        
        $("#wins").html("Wins:" + wins);

        prevNum = 0;

        start_reset();
        
    }

    
});

