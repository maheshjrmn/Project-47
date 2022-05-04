var back, basketImg, basket;

function preload(){
  back= loadImage("Images/Background.png");
  basketImg= loadImage("Images/Basket 2.png");
  CandyImg= loadImage("Images/Candy6.png");
}

function setup() {
  createCanvas(1200, 600);

basket= createSprite(500,500,100,100);
basket.addImage(basketImg);
basket.scale= 0.5;

}

function draw() {
  background(back);

  if(keyDown("left_arrow")){
    basket.x = basket.x - 3;
  }

  if(keyDown("right_arrow")){
    basket.x = basket.x + 3;
  }

 spawnCandy();

  drawSprites();

}

function spawnCandy() {

  var Candy= createSprite(50,10);
  Candy.addImage(CandyImg);
  Candy.scale= 0.3;
 
}

