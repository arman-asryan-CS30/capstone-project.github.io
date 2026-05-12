// Plants vs Zombies Capstone Project
//By Arman and Abdullah
// May 12 / 2026

//Global Variables

//---------------------------Pea Shooter-----------------------------------------
let peaIdle = []; peaShoot = [];



async function loadAssets(){
  for (let i = 0; i < 15; i++) {
    peaIdle.push(loadImage("./assets/Pea Shooter/Idle/pea-idle" + i + ".png"));
  }
}

async function setup() {
  createCanvas(windowWidth, windowHeight);
  await loadAssets()
}

function draw() {
  background(220);
}




