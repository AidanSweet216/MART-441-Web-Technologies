var canvas = document.getElementById("theCanvas");
var ctx = canvas.getContext("2d");
var score = 1;

var squaresJSON = '{"squares":[{"x":100,"y":150,"h":20,"w":20,"color":"green"},'+
                   '{"x":700,"y":250,"h":20,"w":20,"color":"red"},'+
                   '{"x":250,"y":200,"h":20,"w":20,"color":"blue"},'+
                   '{"x":500,"y":300,"h":20,"w":20,"color":"pink"},'+
                   '{"x":100,"y":330,"h":20,"w":20,"color":"purple"}]}'
                
var squaresData = JSON.parse(squaresJSON).squares;

var squares = [];
for(var i = 0; i < squaresData.length; i++) {
    var squareData = squaresData[i];
    var square = new Square(squareData.x, squareData.y, squareData.h, squareData.w, squareData.color);
    squares.push(square);
}

var collectablesJSON = '{"collectables":[{"x":500,"y":350,"h":10,"w":10,"color":"yellow"},'+
'{"x":300,"y":350,"h":10,"w":10,"color":"yellow"},'+
'{"x":400,"y":200,"h":10,"w":10,"color":"yellow"},'+
'{"x":600,"y":300,"h":10,"w":10,"color":"yellow"}]}'

var collectablesData = JSON.parse(collectablesJSON).collectables;

var collectables = [];

for(var i = 0; i < collectablesData.length; i++) {
    var collectableData = collectablesData[i];
    var collectable = new Square(collectableData.x, collectableData.y, collectableData.h, collectableData.w, collectableData.color);
    collectables.push(collectable);
}

function drawCollectables() {
    for(var i = 0; i < collectables.length; i++) {
        if (!collectables[i].collected) {
            drawSquare(collectables[i]);
        }
    }
  

}

var player = new Square(50, 50, 20, 20, "orange");

drawSquares();
drawCollectables();


function update() {
  drawSquares();
  drawCollectables();
}

function drawSquare(square) {
    ctx.fillStyle = square.theColor;
    ctx.fillRect(square.theX, square.theY, square.theWidth, square.theHeight);
}

function drawSquares() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0; i < squares.length; i++) {
        drawSquare(squares[i]);
    }
    drawSquare(player);
}

function drawCollectables() {
    for(var i = 0; i < collectables.length; i++) {
        if (!collectables[i].collected) {
            drawSquare(collectables[i]);
        }
    }
}

function movePlayer(direction) {
    var collisionDetected = false;
    var nextX = player.theX;
    var nextY = player.theY;
    switch(direction) {
        case "up":
            nextY -= 10;
            break;
        case "down":
            nextY += 10;
            break;
        case "left":
            nextX -= 10;
            break;
        case "right":
            nextX += 10;
            break;
    }
    for(var i = 0; i < squares.length; i++) {
        if (nextX < squares[i].theX + squares[i].theWidth &&
            nextX + player.theWidth > squares[i].theX &&
            nextY < squares[i].theY + squares[i].theHeight &&
            nextY + player.theHeight > squares[i].theY) {
            collisionDetected = true;
            break;
        }
    }
    if (!collisionDetected) {
        for(var i = 0; i < collectables.length; i++) {
            if (!collectables[i].collected && 
                nextX < collectables[i].theX + collectables[i].theWidth &&
                nextX + player.theWidth > collectables[i].theX &&
                nextY < collectables[i].theY + collectables[i].theHeight &&
                nextY + player.theHeight > collectables[i].theY) {
                collectables[i].collected = true;
                score++;
                break;
            }
        }
        player.setX(nextX);
        player.setY(nextY);
    }
    
}





document.addEventListener("keydown", function(event) {
    switch(event.keyCode) {
        case 38: // Up arrow
            movePlayer("up");
            break;
        case 40: // Down arrow
            movePlayer("down");
            break;
        case 37: // Left arrow
            movePlayer("left");
            break;
        case 39: // Right arrow
            movePlayer("right");
            break;
    }
    update();
});

