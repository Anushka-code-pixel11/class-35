var canvas, backgroundImg;
var gameState = 0;
var playerCount = 0;
var database;
var form,player,game;

function setup(){
    canvas = createCanvas(400,400);

    database = firebase.database();
    //console.log(database);
    game = new Game();
    game.gameState();
    game.start();
}

function draw(){
    
}