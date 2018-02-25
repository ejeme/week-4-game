

//Global Variables
var crys1 = Math.floor(Math.random() * (12 - 1) + 1);
var crys2 = Math.floor(Math.random() * (12 - 1) + 1);
var crys3 = Math.floor(Math.random() * (12 - 1) + 1);
var crys4 = Math.floor(Math.random() * (12 - 1) + 1);

//Counter
var win = 0;
var loss = 0;
var finalScore;
var ranNum;


//functions
function reset()
{
    //reset
    ranNum = Math.floor(Math.random() * (120 - 19) + 19);
    console.log('randomNumber = ' + ranNum);
    crys1 = Math.floor(Math.random() * (12 - 1) + 1);
    crys2 = Math.floor(Math.random() * (12 - 1) + 1);
    crys3 = Math.floor(Math.random() * (12 - 1) + 1);
    crys4 = Math.floor(Math.random() * (12 - 1) + 1);
    finalScore = 0;
    console.log(ranNum);
    //HTML
    $('.ranNumBox').html(ranNum);
    $('.scoreDisplayChild').html(finalScore);

}

$(document).ready(function start()
{
    //reset
    ranNum = Math.floor(Math.random() * (120 - 19) + 19);
    console.log('randomNumber = ' + ranNum);
    crys1 = Math.floor(Math.random() * (12 - 1) + 1);
    crys2 = Math.floor(Math.random() * (12 - 1) + 1);
    crys3 = Math.floor(Math.random() * (12 - 1) + 1);
    crys4 = Math.floor(Math.random() * (12 - 1) + 1);
    finalScore = 0;

    //HTML
    $('.ranNumBox').html(ranNum);
    $('.scoreDisplayChild').html(finalScore);



    //This gives each crystal a random value
    $('.crystal1').attr("value", crys1);
    var test = $('.crystal1').attr("value");
    //Test / Debug
    console.log('crystal1   '+test);

    $('.crystal2').attr("value", crys2);
    var test = $('.crystal2').attr("value");
    //Test / Debug
    console.log('crystal2   '+test);
    
    $('.crystal3').attr("value", crys3);
    var test = $('.crystal3').attr("value");
    //Test / Debug
    console.log('crystal3   '+test);

    $('.crystal4').attr("value", crys4);
    var test = $('.crystal4').attr("value");
    //Test / Debug
    console.log('crystal4   '+test);


    
    //When clicked saves to final score
    $('.box').on('click', function()
    {
        var test1 = $(this).attr("value");
        //Adds to final score when clicked
        finalScore = parseInt(finalScore) + parseInt(test1);
        console.log('crystal*  ' + test1);
        console.log('finalScore***  ' + finalScore);
        $('.scoreDisplayChild').html(finalScore);
        

    if(ranNum === finalScore)
        {
        alert('win');
        win++;
        $('.win').html(win);
        $('.scoreDisplayChild').html(0);
        reset();
        }

        else if (finalScore > ranNum)
        {
        alert('loser');
        loss++;
        $('.loss').html(loss);
        $('.scoreDisplayChild').html(0);
        reset();
        }
    });

})



/*$(document).ready(function(){

    var ranNum = Math.floor(Math.random() * (120 - 19 +1)) +19;
    
    $('.ranNumBox').html(ranNum);
});
*/

/*

var random_result;
var lost;
var win;

var resetAndStart = function () {
    $(".crystals").empty();

    random_result = Math.floor(Math.random() * 69) + 30;


    $("#result").html('Random Result: ' + random_results);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;
        //console.log(random)

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        crystal.html(random);

        $(".crystal").append(crystal);


    }
}
resetAndStart();
$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    console.log(previous);

    if (previous > random_result) {
        lost--;

        $("#lost").html(lost);

        previous = 0;

        resetAndStart();


    }
    else if (previous === random_result) {
        win++;
        $("#win").html(win);

        previous = 0;

        resetAndStart();
    }


});

*/
