function idle(){
    for(let plant of plants){
      let currentAnimation;
      if(plant.state === "idle"){
        currentAnimation = plant.animation.idle
      }
    image(currentAnimation[plant.frame], plant.x, plant.y,100,100)
    
    if(frameCount % plant.speed === 0){
      plant.frame++
    }
    
    
    if (plant.frame >= currentAnimation.length) {
      plant.frame = 0
    }
  }
}

function walking(){
  for(let z of zombies){
    z.move();
    z.display();
    z.gameOver()
  
  if(frameCount % z.speed === 0){
    z.frame++
  }
  
  
  if (z.frame >= z.animation.walking.length) {
    z.frame = 0
  }
}
}