function idle(){
    for(let plant of plants){
    image(plant.img[plant.frame], plant.x, plant.y,100,100)
    
    if(frameCount % plant.speed === 0){
      plant.frame++
    }
    
    
    if (plant.frame >= plant.img.length) {
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
  
  
  if (z.frame >= z.image.length) {
    z.frame = 0
  }
}
}