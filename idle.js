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