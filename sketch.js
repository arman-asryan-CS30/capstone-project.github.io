// Plants vs Zombies Capstone Project
//By Arman and Abdullah
// May 12 / 2026

//Global Variables

//Menu
let menuImg;
let menuText;
let gameOn = false
let button;

//Character bar
let sunImg;
let sunScore = 0;

//Timers
let sunStart; let sunCurrent;
let sunElapsed

//
let sunX; let sunY;

//---------------------------Pea Shooter-----------------------------------------
let peaIdle = []; peaShoot = [];



async function loadAssets(){
  //Fill pea Idle
  for (let i = 1; i < 14; i++) {
    peaIdle.push(loadImage("./assets/Pea Shooter/Idle/pea-idle" + i + ".png"));
  }

  menuImg = loadImage("./assets/Menu/menu.png")
  menuText = loadImage("./assets/Menu/menu-text.webp")

  sunImg = loadImage("./assets/Character Bar/Sun_PvZ2.png")
}



async function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER)
  await loadAssets()
  button  = createButton("Play !")
  sunStart = millis()
  sunX = random(width)
  sunY = 0
}

//Display the menu
function menu() {
  //Menu image
  image(menuImg,width/2,height/2,width,height)
  image(menuText,width/2,height*0.3,500,300)

 
  button.position(width/2-100, height*0.75)
  button.size(200,50)

  button.mousePressed(startGame)
}

//Start the game
function startGame() {
  gameOn = true;
  button.hide()
}

function charactersBar() {

  //The bar
  strokeWeight(10)
  stroke(153, 95, 47)
  fill(98, 43, 20)
  for (let i = 0; i < 900; i+= 150) {
    square(i,0,150)
  }

  //Sun box
  fill(255)
  noStroke()
  image(sunImg,75,60,100,100)
  textSize(20)
  text(sunScore,70,130)
}

function fallSun(x,y) {
  //while(y<height){
    image(sunImg,x,y)
   // y++
  //}
}

let suns = []

function draw() {
  sunCurrent = millis();
  sunElapsed =sunCurrent - sunStart
  background(220);
  charactersBar()
  console.log(sunElapsed)
  if (sunElapsed > 5000) { //5 seconds, since 1s - 60 frames
    
    sunStart = millis();
    suns.push({x:random(width), y:0})
  }
  for (let s of suns) {
    image(sunImg,s.x,s.y,50,50)
    s.y += 10
  }
  
  //if (!gameOn) {
   // menu()
 // }
  //else{

  //}
}




