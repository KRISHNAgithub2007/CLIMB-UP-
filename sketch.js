var mario;
var dragon;
var gamestate="instructions";
var playbut;

function preload(){


    xladderimg = loadImage("IMAGES/ground.png");
    yladderimg = loadImage("IMAGES/ladders.png");

    rockimg = loadImage("IMAGES/rock.jpg");

    dragonfire = loadAnimation("IMAGES/dragon1.png","IMAGES/dragon1.png","IMAGES/dragon2.jpg","IMAGES/dragon2.jpg","IMAGES/dragon3.png","IMAGES/dragon3.png");
    
    fireballimg = loadImage("IMAGES/fireball.png");

    marioimg = loadImage("IMAGES/mario_front.png");
    marioladder = loadImage("IMAGES/mario_back.png");

}

function setup(){
  createCanvas(1350,650);

  fireballgroup = new Group();
  yladdergroup = new Group();
  laddergroup = new Group();

  dragon = createSprite(140,120,50,50);
  dragon.addAnimation("dragon1",dragonfire);
  dragon.scale = 0.2

  //creating x ladders

  xladder1 = createSprite(250,200,10,10);
  xladder1.addImage(xladderimg);
  xladder1.scale = 0.1;

  xladder2 = createSprite(700,200,10,10);
  xladder2.addImage(xladderimg);
  xladder2.scale = 0.1;

  xladder3 = createSprite(1240,200,10,10);
  xladder3.addImage(xladderimg);
  xladder3.scale = 0.1;

  xladder4 = createSprite(285,350,10,10);
  xladder4.addImage(xladderimg);
  xladder4.scale = 0.1;

  xladder5 = createSprite(585,350,10,10);
  xladder5.addImage(xladderimg);
  xladder5.scale = 0.1;

  xladder6 = createSprite(1110,350,10,10);
  xladder6.addImage(xladderimg);
  xladder6.scale = 0.1;

  xladder7 = createSprite(200,500,10,10);
  xladder7.addImage(xladderimg);
  xladder7.scale = 0.1;

  xladder8 = createSprite(740,500,10,10);
  xladder8.addImage(xladderimg);
  xladder8.scale = 0.1;

  xladder9 = createSprite(1100,500,10,10);
  xladder9.addImage(xladderimg);
  xladder9.scale = 0.1;

  xladder10 = createSprite(200,650,10,10);
  xladder10.addImage(xladderimg);
  xladder10.scale = 0.1;

  xladder11 = createSprite(650,650,10,10);
  xladder11.addImage(xladderimg);
  xladder11.scale = 0.1;

  xladder12 = createSprite(1100,650,10,10);
  xladder12.addImage(xladderimg);
  xladder12.scale = 0.1;

// creating y ladders

  yladder1 = createSprite(840,400,10,10);
  yladder1.addImage(yladderimg);
  yladder1.scale = 0.3;
  yladdergroup.add(yladder1);

  yladder2 = createSprite(20,400,10,10);
  yladder2.addImage(yladderimg);
  yladder2.scale = 0.3;
  yladdergroup.add(yladder2);

  yladder3 = createSprite(460,565,10,10);
  yladder3.addImage(yladderimg);
  yladder3.scale = 0.3;
  yladdergroup.add(yladder3);

  yladder4 = createSprite(968,260,10,10);
  yladder4.addImage(yladderimg);
  yladder4.scale = 0.3;
  yladdergroup.add(yladder4);

  mario = createSprite(50,580);
  mario.addImage(marioimg);
  mario.scale = 0.3;

}

function draw(){
    
    if(gamestate == "instructions"){
        background("lightgreen");

        textSize(30);
        fill("yellow");
        stroke("green");
        text("CLIMB UP",displayWidth/2-100,30);
        
        textSize(20);
        fill("black");
        text("INSTRUCTIONS -",200,150)
        text("1. Press the arrow keys to climb the ladder ",200,200);
        text("2. Stay away from rocks and fireballs",200,250);
        text("3. Kill the dragon to win the game ",200,300);
        text("4. Press enter to play the game",200,350);

        if(keyDown("enter")){
            gamestate = "play";
        }

    }

    if(gamestate == "play"){
        background("black");
        spawnfireball();       

        if(keyWentDown("left")){
            mario.velocityX = -10;
        }
        if(keyWentUp("left")){ 
            mario.velocityX = 0;
        }

        if(keyWentDown("right")){
            mario.velocityX = 10;
        }

        if(keyWentUp("right")){
            mario.velocityX = 0;
        }

        if(mario.isTouching(yladdergroup)){
            mario.addImage(marioladder);
            mario.scale = 0.2;

            if(keyWentDown("up") && mario.isTouching(yladdergroup)){
                mario.velocityY = -2;
            }
            
            if(keyWentUp("up") && mario.isTouching(yladdergroup)){
                mario.velocityY = 0;
            }
        }
        else{
            mario.addImage(marioimg);
            mario.scale = 0.3
        }

        drawSprites();
    }

}

function spawnfireball(){
    if(frameCount % 100 == 0){
        var fireball = createSprite(140,100);
        fireball.scale = 0.1;
        fireball.addImage(fireballimg);
        fireball.velocityX = random(3,20);
        fireball.velocityY = random(3,20);
        fireballgroup.add(fireball);
    }
}



