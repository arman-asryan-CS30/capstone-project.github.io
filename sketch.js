// Plants vs Zombies Capstone Project
//By Arman and Abdullah
// May 12 / 2026

//Global Variables

//Menu
let menuImg;
let menuText;
let gameOn = false
let button;

//---------------------------Pea Shooter-----------------------------------------
let peaIdle = []; peaShoot = [];



async function loadAssets(){
  //Fill pea Idle
  for (let i = 1; i < 14; i++) {
    peaIdle.push(loadImage("./assets/Pea Shooter/Idle/pea-idle" + i + ".png"));
  }

  menuImg = loadImage("./assets/Menu/menu.png")
  menuText = loadImage("./assets/Menu/menu-text.webp")
}



async function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  imageMode(CENTER)
  await loadAssets()
  button  = createButton("Play !")
}

function menu() {
  //Menu image
  image(menuImg,width/2,height/2,width,height)
  image(menuText,width/2,height*0.3,500,300)

 
  button.position(width/2-100, height*0.75)
  button.size(200,50)

  button.mousePressed(startGame)
}

function startGame() {
  gameOn = true;
  button.hide()
}


function draw() {
  background(220);

  if (!gameOn) {
    menu()
  }
}




