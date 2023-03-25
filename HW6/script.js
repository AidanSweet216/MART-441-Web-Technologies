// an array of image element names in the HTML document
var imgNames = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10"];

// a string representing the file path of the placeholder image
var imgCover = "imgs/question.jpg";

// an empty array to hold the paths of the ten images to be displayed
var realIMG = new Array();

// a variable to store the randomly generated number
var randomNumber;



// a variable to declare player info in the JSON 
var player = { "playerFirst": "", "playerLast": "", "playerAge": 0, "score": 0 };

//player score
var playerScore = 0;


var myInterval
var numberOfClicks = 0;
var number1 = -1;
var number2 = -1;

// a function to set all image elements to the placeholder image
function createCovers() {
    // call the createImageArray function to randomly select the images
    createImageArray();

    // iterate through each image element and set its source to the placeholder image
    for (var i = 0; i < imgNames.length; i++) {
        document.getElementById(imgNames[i]).src = imgCover;
    }
}

// a function to randomly select ten images
function createImageArray() {
    // an array of file paths for the ten images
    var imgPath = ["imgs/hamish.jpg", "imgs/reindeer.jpg", "imgs/beagle.jpg", "imgs/bird.jpg", "imgs/calf.jpg", "imgs/cat.jpg", "imgs/fergus.jpg", "imgs/field.jpg", "imgs/satue.jpg", "imgs/trees.jpg"]

    // an array to keep track of how many times each image has been selected
    var counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    // loop until the realIMG array contains ten images
    while (realIMG.length < 10) {
        // generate a random number between 0 and 10
        var randomNumber = Math.floor(Math.random(0, 10) * imgPath.length)

        // check if the selected image has not been selected before
        if (counter[randomNumber] <= 0) {
            // add the image to the realIMG array
            realIMG.push(imgPath[randomNumber]);

            // set the counter value for the selected image to itself
            counter[randomNumber] = counter[randomNumber];
        }
    }
}

// a function to show an image when clicked by setting its source to the corresponding path in the realIMG array
function showIMG(number) {
    // all these should be declared at the top of the page.
    // var myInterval
    // var numberOfClicks = 0;
    //var number1 = -1;
    //var number2= -1;
    document.getElementById(imgNames[number]).src= realIMG[number];

    numberOfClicks ++;
    console.log("Clicks:" + numberOfClicks);
    // then this can be zero and 1
    if (numberOfClicks == 1) {
        // set number1 to the number that was chosen
        number1 = number;
        //realIMG[number] = number1;
    }
    else if (numberOfClicks == 2) {
        // if it's the second click, set number2 to the number chosen
        number2 = number;
        // realIMG[number] = number2;
    }
    // test the actual file paths
    if (realIMG[number1] == realIMG[number2]) {

        numberOfClicks = 0;
        number1 = -1;
        number2 = -1;
        playerScore++;
        // get the player info before setting it.
        var playerInformation = localStorage.getItem("playerInfo");
        player = JSON.parse(playerInformation);
        player.score = playerScore;
        localStorage.setItem("playerInfo", JSON.stringify(player));
        if (playerScore == 5) {
            window.location = "end.html";
        }
        console.log("score:" + playerScore);
    }
    // make sure both numbers have been chosen
    else if ((realIMG[number1] != realIMG[number2]) && number1 >= 0 && number2 >= 0) {
        numberOfClicks = 0;
        myInterval = setInterval(flipImage, 1000);
    }
    



}

function flipImage() {
    // this should be imgNames
    document.getElementById(imgNames[number1]).src = "imgs/question.jpg";
    document.getElementById(imgNames[number2]).src = "imgs/question.jpg"; 
    //document.getElementById(realIMG[number1]).src = "imgs/question.jpg";
    //document.getElementById(realIMG[number2]).src = "imgs/question.jpg";
    number1 = -1;
    number2 = -1;
    clearInterval(myInterval);
}
//a function that collects the player info into the JSON
function newPlayer() {
    // create variables for gathering player info
    var playerFirst = document.getElementById("firstName").value;
    var playerLast = document.getElementById("lastName").value;
    var playerAge = document.getElementById("age").value;

    player.playerFirst = playerFirst;
    player.playerLast = playerLast;
    player.playerAge = playerAge;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "game.html";
    console.log("Im clicking");
}


//display info from the JSON

function playerInfo() {

    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    var str = "Player Name: " + player.playerFirst + " " + player.playerLast + "<br>" +
        "Player Age: " + player.playerAge + " Player Score:" + player.score + "<br>";

    if (document.getElementById("endInfo") != null) {
        document.getElementById("endInfo").innerHTML = str;
    }

}
