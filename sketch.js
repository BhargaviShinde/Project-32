const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var rand;

var score = 0;

function preload() {
    //getBackgroundImg();
    bgImg = loadImage("castle.jpg");
    NbgImg = loadImage("nightcastle.jpg");
}

function setup(){
    canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    base1 = new Ground(850,600,300,10);
    base2 = new Ground(980,250,200,10);

    box1 = new Box(800,570,40,40,"red");
    box2 = new Box(830,570,40,40,"violet");
    box3 = new Box(860,570,40,40,"blue");
    box4 = new Box(870,570,40,40,"green");

    box5 = new Box(815.5,550,35,35,"yellow");
    box6 = new Box(840.5,550,35,35,"darkviolet");
    box7 = new Box(865.5,550,35,35,"lightblue");

    box8 = new Box(830.5,530,30,30,"cyan");
    box9 = new Box(850,530,30,30,"green");

    box10 = new Box(840.5,510,30,30,"red");


    
    box11 = new Box(960,240,40,40,"red");
    box12 = new Box(1010,240,40,40,"violet");
    box13 = new Box(980,240,40,40,"blue");

    box14 = new Box(970.5,220,35,35,"yellow");
    box15 = new Box(990.5,220,35,35,"darkviolet");

    box16 = new Box(980.5,200,30,30,"cyan");


    bird = new Bird(200,650);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:700});

    rand = Math.round(random(1,10));
}

function draw(){

    
    if(rand === 2 || rand === 4 || rand === 6 || rand === 8 || rand === 10){
        background(bgImg);
    }
    if(rand === 1 || rand === 3 || rand === 5 || rand === 7 || rand === 9){
        background(NbgImg);
    }
    

    fill(51,0,102);
    textSize(30);
    text("Score: " + score, 700, 150);
    fill("white");
    textSize(25);
    text("Press the SPACE key to get another chance", 10,130);

    if(score === 320){
        fill("red");
        textSize(32);
        text("Congratulations!! You have Won!!", 200,300);
    }
    Engine.update(engine);
    strokeWeight(4);

    slingshot.display();   
    
    strokeWeight(0);
    box1.display();
    box1.score();
    box2.display();
    box2.score();
    box3.display();
    box3.score();
    box4.display();
    box4.score();
    box5.display();
    box5.score();
    box6.display();
    box6.score();
    box7.display();
    box7.score();
    box8.display();
    box8.score();
    box9.display();
    box9.score();
    box10.display();
    box10.score();
    box11.display();
    box11.score();
    box12.display();
    box12.score();
    box13.display();
    box13.score();
    box14.display();
    box14.score();
    box15.display();
    box15.score();
    box16.display();
    box16.score();

    ground.display();
    base1.display();
    base2.display();
    
    bird.display();
     
    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}
 
//async function getBackgroundImg(){
    //var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Calcutta");
    //var responseJSON = await response.json();

    //var datetime = responseJSON.datetime;
    //var hour = datetime.slice(11,13);

    //if(hour>6 && hour<15){
       // backgroundImg = loadImage("castle.jpg");
    //}
    //else{
        //backgroundImg = loadImage("nightcastle.jpg");
    //}
//}