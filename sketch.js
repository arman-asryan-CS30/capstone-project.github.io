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
let textX = 70

//Timers
let sunStart; let sunCurrent;
let sunElapsed

let zombieStart; let zombieCurrent;
let zombieElapsed;

let suns = []; //Keep the suns in an array

//
let sunX; let sunY;

//Grid
let grid = []

//
let selectedPlant;
let plants = []

//---------------------------Pea Shooter-----------------------------------------
let peaIdle = []; peaShoot = [];

//Zombies
let zombies = []
let zombiesWalk = []



async function loadAssets(){
  //Fill pea Idle
  for (let i = 1; i < 14; i++) {
    peaIdle.push(loadImage("./assets/Pea Shooter/Idle/pea-idle" + i + ".png"));
  }

  for (let i = 1; i < 14; i++) {
    zombiesWalk.push(loadImage("./assets/Zombies/Walk/Zombie idle " + i + ".png"));
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
  zombieStart = millis()
  sunX = random(width)
  sunY = 0



  grid = [
      [0,1,0,1,0,1,0,1,0,1],
      [1,0,1,0,1,0,1,0,1,0],
      [0,1,0,1,0,1,0,1,0,1],
      [1,0,1,0,1,0,1,0,1,0],
      [0,1,0,1,0,1,0,1,0,1],
      [1,0,1,0,1,0,1,0,1,0],
      [0,1,0,1,0,1,0,1,0,1],
      [1,0,1,0,1,0,1,0,1,0],
  ]
}

function drawGrid(grid) {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === 1) {
        fill(0, 169, 44)
      }else{
        fill(0, 205, 61)
      }
      rect(x*(width/10),(y+1)*(height/8),width/10, height/8)
    }
  }
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
  textAlign(CENTER, CENTER)
  text(sunScore,75,130)

  //Pea Shooter
  image(peaIdle[0],225,60,100,100)
  text("150",225,130)
}

function draw() {
  //Timer for suns
  sunCurrent = millis();
  sunElapsed =sunCurrent - sunStart

  //Timer for Zombie spawn
  zombieCurrent = millis()
  zombieElapsed = zombieCurrent - zombieStart
  
  
  background(220);
  

  
  //  if (!gameOn) {
  //   menu()
  // }
  //  else{
      drawGrid(grid)
      charactersBar()
      idle()
      walking()
      pickCharacter()
    
      
      if (sunElapsed > 5000) { //Generate new sun every 5 seconds
    
        sunStart = millis();
        suns.push({x:round(random(width)), y:0})
      }

      if (zombieElapsed > 10000) { //Generate new sun every 5 seconds
    
        zombieStart = millis();
        generateZombie()
      }
      
      
      fallSun()
    
  //}
}

function mousePressed() {
  collectSun()

  // Clicking Pea Shooter in character bar
  if (
    mouseX >= 150 &&
    mouseX <= 300 &&
    mouseY >= 0 &&
    mouseY <= 150  &&
    sunScore >= 150
  ) {
    selectedPlant = peaIdle;
    sunScore -= 150
    return;
  }


  placeCharacter()



}
