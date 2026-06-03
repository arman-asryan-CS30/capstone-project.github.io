function displayPlants(){
  for(let plant of plants){
    plant.display();
  }
}

function walking(){
  for(let z of zombies){
    z.move();
    z.display();
    z.gameOver();

    if (z.hp <= 0) {
      zombies.splice(zombies.indexOf(z),1);
    }
  
    if(frameCount % z.speed === 0){
      z.frame++;
    }
  
  
    if (z.frame >= z.animation.walking.length) {
      z.frame = 0;
    }
  }
}