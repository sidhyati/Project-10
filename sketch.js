var ship, shipSailing;
var sea, seaImg;

function preload(){
    shipSailing = loadAnimation ("ship-1.png","ship-2.png");
    seaImg= loadAnimation("sea.png")
  }

function setup(){
      createCanvas(700,770);

      //creating sea sprite
      sea = createSprite(350,350,700,700);
      sea.addAnimation("sea.png", seaImg);
      
      //setting x position of sea sprite
      sea.x=sea.width/2;
    
    //creating ship sprite
      ship = createSprite(200,370,390,390);
      ship.addAnimation("sailing", shipSailing);

    //resizing ship sprite
      ship.scale=0.5;

      
}

function draw() {
      background("blue");
      
      //giving velocity to sea sprite
      sea.velocityX=-4;

      //resetting sea sprite
      if (sea.x<0)
      {
        sea.x=sea.width/2
      }

 drawSprites();
}