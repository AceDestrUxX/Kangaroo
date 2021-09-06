var canvas;
var music;
var box;
var greenbox;
var bluebox;
var yellowbox;
var redbox;
var rightEdge;
var leftEdge;
var topEdge;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    box = createSprite(random(50,750),50, 30,30);
    box.shapeColor = "white";
    box.velocityX = 3;
    box.velocityY = 5;
    greenbox = createSprite(100,585,160,30);
    greenbox.shapeColor = "green";
    bluebox = createSprite(300,585,160,30);
    bluebox.shapeColor = "blue";
    yellowbox = createSprite(500,585,160,30);
    yellowbox.shapeColor = "yellow";
    redbox = createSprite(700,585,160,30);
    redbox.shapeColor = "red";
    rightEdge = createSprite(799,300,2,600);
    leftEdge = createSprite(1,300,2,600);
    topEdge = createSprite(400,1,800,2);
}


function draw() {
    background(rgb(169,169,169));
    rightEdge.visible = false;
    leftEdge.visible = false;
    topEdge.visible = false;
    box.bounceOff(rightEdge);
    box.bounceOff(leftEdge);
    box.bounceOff(topEdge);
    if(box.isTouching(greenbox)) {
        box.shapeColor = "green";
    }
    if(box.isTouching(bluebox)) {
        box.shapeColor = "blue";
    }
    if(box.isTouching(yellowbox)) {
        box.shapeColor = "yellow";
        box.velocityX = 0;
        box.velocityY = 0;
    }
    if(box.isTouching(redbox)) {
        box.shapeColor = "red";
    }
    box.bounceOff(greenbox);
    box.bounceOff(bluebox);
    box.bounceOff(yellowbox);
    box.bounceOff(redbox);
    drawSprites();
    

}
