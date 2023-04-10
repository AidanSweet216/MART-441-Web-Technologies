// Create Variables needed for the various scripts in this file
var canvas = document.getElementById("theCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
var x2 = 100;
var y2 = 100;
var player;
var square;

createSquares();

drawObject();

setInterval(moveSquare, 2000);
//Function that creates the player and non player square
function createSquares() {
    player= new Square(x, y, 20, 20, "yellow");
    square = new Square(x2, y2, 50, 50, "red");
}
// A function to move the non player square
function moveSquare() {
    square.setX(Math.floor(Math.random() * canvas.width));
    square.setY(Math.floor(Math.random() * canvas.height));
    drawObject();
}
function drawObject() {
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.fillStyle = square.color;
    ctx.fillRect(square.x, square.y, square.width, square.height);
}

$(document).ready(function () {
    $(this).keypress(function (event) {
        getKey(event);
    });
});

// check when a key is being pressed
function getKey(event) {

    // check collision 
    var didCollide = hasCollided(player, square);

    if (didCollide) {
        canvas.style.backgroundColor = "blue";
        player.setWidth(player.width - 1);
        player.setHeight(player.height - 1);
        square.setWidth(square.width+ 1);
        square.setHeight(square.height + 1);
    }
    // move the player square
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if (actualLetter == "w") {
        moveUp();
    } else if (actualLetter == "s") {
        moveDown();
    } else if (actualLetter == "d") {
        moveRight();
    } else if (actualLetter == "a") {
        moveLeft();
    }
    // draw the player and the non player square
    drawObject();
}

// moving the player square
function moveUp() {
    if (player.y  >= 0) { // check if player has exceeded top boundary
        player.setY(player.y - 10);
    } else {
        player.setY(0); // reset player position to default
    }
}

function moveDown() {
    if (player.y <= canvas.height - player.height) { // check if player has exceeded bottom boundary
        player.setY(player.y + 10);
    } else {
        player.setY(canvas.height - player.height); // reset player position to default
    }
}


function moveLeft() {
    if (player.x  >= 0) { // check if player has exceeded left boundary
        player.setX(player.x - 10);
    } else {
        player.setX(0); // reset player position to default
    }
}

// add to the x to move to the right
function moveRight() {
    if (player.x <= canvas.width - player.width) { // check if player has exceeded right boundary
        player.setX(player.x + 10);
    } 
    else{
        player.setX(canvas.width - player)

    }
}

// Check for overlapping corners. the script won't work without this
function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}

