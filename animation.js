document.addEventListener("keydown", keydown);
var sprite = document.querySelector("sprite");
sprite.style.top = 0;
sprite.style.left = 0;

var facing = 3;
var spriteSize = 64;
var walkingFrame = 0;

function keydown(e){
    console.log(e.key + "  pressed");
    switch(e.key){
        case "w":
            facing = 0;
            walkingFrame += 1;
            sprite.style.top = (parseInt(sprite.style.top) - 10) + "px";
            break;
        case "a":
            facing = 1;
            walkingFrame += 1;
            sprite.style.left = (parseInt(sprite.style.left) - 10) + "px";
            break;
        case "s":
            facing = 2;
            walkingFrame += 1;
            sprite.style.top = (parseInt(sprite.style.top) + 10) + "px";
            break;
        case "d":
            facing = 3;
            walkingFrame += 1;
            sprite.style.left = (parseInt(sprite.style.left) + 10) + "px";
            break;
    }
    sprite.style.backgroundPositionY = (0 - facing * spriteSize) + "px";
    if(walkingFrame >8){
        walkingFrame = 0;
    }

    sprite.style.backgroundPositionX = (0 - walkingFrame * spriteSize) + "px";

}

var canvasContext = document.querySelector("canvas").getContext("2d");

canvasContext.beginPath();
canvasContext.strokeStyle = "blue";
canvasContext.lineWidth = 4;
canvasContext.moveTo(0, 0);
canvasContext.lineTo(100, 100);
canvasContext.stroke();

canvasContext.closePath();

canvasContext.beginPath();
canvasContext.strokeStyle = "red";
canvasContext.lineWidth = 4;
canvasContext.moveTo(100, 0);
canvasContext.lineTo(200, 100);
canvasContext.stroke();

canvasContext.closePath();

canvasContext.beginPath();
canvasContext.strokeStyle = "green";
canvasContext.lineWidth = 4;
canvasContext.moveTo(200, 0);
canvasContext.lineTo(300, 100);
canvasContext.stroke();

canvasContext.closePath();


canvasContext.beginPath();
canvasContext.strokeStyle = "orange";
canvasContext.lineWidth = 10;
canvasContext.lineCap = 'butt'
var x = document.querySelector("canvas").width / 2;
var y = document.querySelector("canvas").height / 2;
var radius = 175;
var startAngle = .1 * Math.PI;
var endAngle = 2 * Math.PI;
var counterClockwise = false;
canvasContext.arc(x, y, radius, startAngle, endAngle, counterClockwise);
canvasContext.stroke();
canvasContext.closePath();
