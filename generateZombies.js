function generateZombie() {
  let gridY = floor((random(height) - 150) / 150) * 150 + 225;
  let zombie = new Zombie(gridY);
  zombies.push(zombie);
}

class Zombie{
  constructor(y){
    this.x = width-100;
    this.y = y;
    this.speed = 5;
    this.state = "walking";
    this.frame = 0; //Current image
    this.moveSpeed = 0.5;
    this.animation = {
      walking: zombiesWalk,
      damaged1:5,
      eatingNoDamage:zombieEats
    };
    this.frameTimer = 0;
    this.hp = 100;
  }

  move(){
    this.x -= this.moveSpeed;
  }



  display(){
    let currentAnimation;
    if (this.state === "walking") {
      currentAnimation = this.animation.walking;
    }
    else if(this.state === "eating, no damage"){
      currentAnimation = this.animation.eatingNoDamage;
    }
    print(this.state, this.frame)
    image(
      currentAnimation[this.frame],
      this.x,
      this.y,
      150,
      150
    );


    // Slow animation down
    this.frameTimer++;

    if(this.frameTimer >= 60){//change every 30 frames
      print("increment frame")
      this.frame++;//Next image
      this.frameTimer = 0; //Restart the timer
   
      // Restart animation
      if(this.frame >= currentAnimation.length){
        this.frame = 0;
        print("reset frame")
      }
    }
  }

  gameOver(){
    if (this.x <0) {
      noLoop();
      text("Game Over", width/2, height/2);
    }
  }
}