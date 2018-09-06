
//create var cities,randomNumber,randomWord,randomOnPageDisplay and alphabets
var cities = ["Edh", "Folsom", "Rancho", "Mather", "Fairoaks"];
var citiesHints = ["golden hills", "Huge lake", "Businesses", "Airport", "American River"];
var nuts = ["almond", "cashewnut", "pista", "walnut"];
var nutsHints = ["brown", "earshape", "green", "big"];


var randomNumber = Math.floor(Math.random() * cities.length);
var randomWord = cities[randomNumber].toLowerCase();
var randomOnPageDisplay = document.getElementById("randomcities");
var alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function resetGame() {
    tries = 0;
    randomNumber = Math.floor(Math.random() * cities.length);
    randomWord = cities[randomNumber].toLowerCase();
    randomOnPageDisplay.innerHTML = "";
    for (i = 0; i < randomWord.length; i++) {
        randomOnPageDisplay.innerHTML = randomOnPageDisplay.innerHTML + "@";
    }
    document.getElementById("tries").innerHTML = 0;
    document.getElementById("hint").innerHTML = citiesHints[randomNumber];
    didItMatch = 0;
    document.getElementById("letterguess").innerHTML = "";
}
// alert(randomWord);

//create for loop for randomWord:

for (i = 0; i < randomWord.length; i++) {
    randomOnPageDisplay.innerHTML = randomOnPageDisplay.innerHTML + "@";
}

document.getElementById("hint").innerHTML = document.getElementById("hint").innerHTML + citiesHints[randomNumber];

var tries = 0;
var allowedTries = 10;
var didItMatch = 0;
var didYouWin = 1;



// create document.onkeyup function:

document.onkeyup = function (event) {
    var keyPressed = event.key;
    var gussedAlphabets = document.getElementById("letterguess").innerHTML;
  //  alert("Guessed Alphabets "+gussedAlphabets);
    //alert(gussedAlphabets.includes(keyPressed));
    if (alphabets.includes(keyPressed) ) {
        if (tries < allowedTries) {
            keyPressed = keyPressed.toLowerCase();
           if (!gussedAlphabets.includes(keyPressed)) {
            document.getElementById("letterguess").innerHTML = document.getElementById("letterguess").innerHTML + keyPressed + ",";
           }
            //create for loop for CurrentWord:
            for (i = 0; i < randomWord.length; i++) {
                var currentWord = document.getElementById("randomcities").innerHTML;
                if (keyPressed.toLowerCase() === randomWord[i].toLowerCase()) {
                    // alert("substring "+ currentWord.substring(0, i));
                    // alert("keyPressed is "+ keyPressed);
                    // alert("substring "+ currentWord.substring(i, 1));
                    document.getElementById("randomcities").innerHTML = currentWord.substring(0, i) + keyPressed + currentWord.substring(i + 1);
                    didItMatch = 1;
                }
            }
            if (didItMatch !== 1) {
                tries++;
            }
            document.getElementById("tries").innerHTML = tries;
            didItMatch = 0;
            if (randomWord === document.getElementById("randomcities").innerHTML.toLowerCase()) {
                alert("you won!!!");
                resetGame();
            }
        }
        else {
            alert("sorry you lost");
            resetGame();
        }
    }
    else {
        alert("You pressed a non-alpha character");
    }


};