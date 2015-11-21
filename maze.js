

var canvas = document.getElementById("mazecanvas");
var context = canvas.getContext("2d");
var currRectX = 425;
var currRectY = 3;
var mazeWidth = 556;
var mazeHeight = 556;
var moveAmmount = 10;
var direction = 0;
var intervalVar;
function makeWhite(x, y, w, h) {
    context.beginPath();
    context.rect(x, y, w, h);
    context.closePath();
    context.fillStyle = "white";
    context.fill();
}
function drawMazeAndRectangle(rectX, rectY) {
    makeWhite(0, 0, canvas.width, canvas.height);
    var mazeImg = new Image();
    mazeImg.onload = function () { // when the image is loaded, draw the image, the rectangle and the circle
        context.drawImage(mazeImg, 0, 0);
        drawRectangle(rectX, rectY, "#0000FF", false, true);
        context.beginPath();
        context.arc(260, 320, 7, 0, 2 * Math.PI, false);
        context.closePath();
        context.fillStyle = '#00FF00';
        context.fill();
    };
    mazeImg.src = "maze.gif";
}
function drawRectangle(x, y, style) {
    makeWhite(currRectX, currRectY, 40, 40);
    currRectX = x;
    currRectY = y;
    context.beginPath();
    context.rect(x, y, 40, 40);
    context.closePath();
    context.fillStyle = style;
    context.fill();
}
function moveRect(e) {
    var newX;
    var newY;
    var canMove;
    e = e || window.event;
    switch (e.keyCode) {
        case 38:   // arrow up key
        case 87: // W key
            newX = currRectX;
            newY = currRectY - moveAmmount;
            break;
        case 37: // arrow left key
        case 65: // A key
            newX = currRectX - moveAmmount;
            newY = currRectY;
            break;
        case 40: // arrow down key
        case 83: // S key
            newX = currRectX;
            newY = currRectY + moveAmmount;
            break;
        case 39: // arrow right key
        case 68: // D key
            newX = currRectX + moveAmmount;
            newY = currRectY;
            break;
    }
    movingAllowed = canMoveTo(newX, newY);
    if (movingAllowed === 1) {      // 1 means 'the rectangle can move'
        drawRectangle(newX, newY, "#0000FF");
        currRectX = newX;
        currRectY = newY;
    }
    else if (movingAllowed === 2) { // 2 means 'the rectangle reached the end point'
        clearInterval(intervalVar); // we'll set the timer later in this article
        makeWhite(0, 0, canvas.width, canvas.height);
        context.font = "40px Arial";
        context.fillStyle = "blue";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText("Congratulations!", canvas.width / 2, canvas.height / 2);
        window.removeEventListener("keydown", moveRect, true);
    }
}

function canMoveTo(destX, destY) {
    var imgData = context.getImageData(destX, destY, 40, 40);
    var data = imgData.data;
    var canMove = 1; // 1 means: the rectangle can move
    if (destX >= 0 && destX <= mazeWidth - 40 && destY >= 0 && destY <= mazeHeight - 40) { // check whether the rectangle would move inside the bounds of the canvas
        for (var i = 0; i < 4 * 40 * 40; i += 4) { // look at all pixels
            if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0) { // black
                canMove = 0; // 0 means: the rectangle can't move
                break;
            }
            else if (data[i] === 0 && data[i + 1] === 255 && data[i + 2] === 0) { // lime: #00FF00
                canMove = 2; // 2 means: the end point is reached
                break;
            }
        }
    }
    else {
        canMove = 0;
    }
    return canMove;
}

drawMazeAndRectangle(240, 60);
window.addEventListener("keydown", moveRect, true);
