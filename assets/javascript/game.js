var minNumber = 19;
var maxNumber = 120
var randomNumber = randomNumberFromRange(minNumber, maxNumber);
function randomNumberFromRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
console.log(randomNumber);
var randNum = $("#rand-num");
var newDrinkDiv = $("<div>");
newDrinkDiv.html(randomNumber);
randNum.append(newDrinkDiv);
