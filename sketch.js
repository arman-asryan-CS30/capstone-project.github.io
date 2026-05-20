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

let suns = []; //Keep the suns in an array

//
let sunX; let sunY;

//Grid
let grid = []

let selectedPlant;
let plants = []

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

function drawGrid(grid) {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === 1) {
        fill(0, 169, 44)
      }else{
        fill(0, 205, 61)
      }
      square(x*150,(y+1)*150,150)
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



//Generate a sun that falls
function fallSun() {
    for (let s of suns) {
      image(sunImg,s.x,s.y,60,60)
      s.y += 5

      if(s.y > height-100){
        s.y = height
      }
    }
}

function collectSun() {
  for(let s of suns){

    //Check if mouseX is in the range of the width of the image
    if (mouseX >= s.x -30 && mouseX <= s.x+30 ) {

      //Chech if mouseY is in the range of the height of the image
      if (mouseY >= s.y -30 && mouseY <= s.y+30) {
        sunScore += 50
        suns.splice(suns.indexOf(s),1) //Remove the sun from the screen
      }
    }
  }
}

function placeCharacter() {
  if (selectedPlant) {
    image(selectedPlant, mouseX, mouseY,100,100);
  }
}


function draw() {
  //Timer
  sunCurrent = millis();
  sunElapsed =sunCurrent - sunStart
  
  
  background(220);
  

  
   if (!gameOn) {
    menu()
  }
   else{
      drawGrid(grid)
      
      charactersBar()

      //Render all chosen plants on the screen
      for(let plant of plants){
        image(plant.img, plant.x, plant.y,100,100)
      }
     
      placeCharacter()
    
      
      if (sunElapsed > 1000) { //Generate new sun every 5 seconds
    
        sunStart = millis();
        suns.push({x:round(random(width)), y:0})
      }
      fallSun()
    
  }
}

function mousePressed() {
  collectSun()

  // Clicking Pea Shooter in character bar
  if (
    mouseX >= 150 &&
    mouseX <= 300 &&
    mouseY >= 0 &&
    mouseY <= 150
  ) {
    selectedPlant = peaIdle[0];
    return;
  }

  // Place plant on grid
  if (selectedPlant && mouseY > 150) {

    // Snap to grid
    let gridX = floor(mouseX / 150) * 150 + 75;
    let gridY = floor((mouseY - 150) / 150) * 150 + 225;

    image(selectedPlant, gridX, gridY,100,100);

    plants.push({
      x: gridX,
      y: gridY,
      img: selectedPlant
    });

    selectedPlant = null;
}



}
