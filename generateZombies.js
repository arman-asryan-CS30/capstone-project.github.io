function generateZombie() {
  let row = floor(random(8)); // 0 to 7
  let gridY = row * 150 + 225;
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
      walkingOneArm:zombiesWalkOneArm,
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
    
    image(
      currentAnimation[this.frame],
      this.x,
      this.y,
      150,
      150
    );
  }


  gameOver(){
    if (this.x <0) {
      noLoop();
      text("Game Over", width/2, height/2);
    }
  }
}