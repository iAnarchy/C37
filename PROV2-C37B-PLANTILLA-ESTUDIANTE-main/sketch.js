//Variables globales 
var canvas;
var backgroundImage;
var bgImg;
var database;
var gameState;
var form, player;
var playerCount;
var allPlayers, car1, car2;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("./assets/car1.png");
  car2_img = loadImage("./assets/car2.png");
  trackimg = loadImage("./assets/track.jpg");
}

//configuración principal 
function setup() {
  
  canvas = createCanvas(windowWidth, windowHeight);
  //Almacenamos la base de datos en una variable 
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

//Ajusta altura y ancho de la ventana automáticamente 
function windowResized() {
  //Crea un nuevo canvas con los ajustes 
  resizeCanvas(windowWidth, windowHeight);
}
