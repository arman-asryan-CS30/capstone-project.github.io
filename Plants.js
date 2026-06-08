class Plants{
  constructor(x,y,attack,bullet){
    this.x= x,
    this.y= y,
    this.state= "idle",
    this.animation= {
      idle:selectedPlant,
      attack:attack,
      chew:chomperChew
    },
    this.hp= 100,
    this.frame= 0,
    this.speed= 5,
    this.type=currentPlant;
    this.currentAnimation;
    this.bulletImg = bullet;
    this.bullets = [];
  }

  idle(){
    if (this.state === "idle") {
      this.currentAnimation = this.animation.idle;
    }
  }

  shoot(){
    //Shooting animation of the bullet
    for(let b of this.bullets){
      image(b.img, b.x, b.y, 30,30);
      b.x+=5;

      for(let z of zombies){ //Damage of the bullets
        if (b.x > z.x && abs(b.y - z.y) < 20 ) {
          this.bullets.splice(this.bullets.indexOf(b),1);
          z.hp -= 20;
        }
      }
    }
  }

  display(){
    if (this.state === "idle") {
      this.currentAnimation = this.animation.idle;
    }
    else if (this.state === "attack") {
      this.currentAnimation = this.animation.attack;
    }

    image(this.currentAnimation[this.frame], this.x, this.y,100,100);

    //MOve to the next frame
    if(frameCount % this.speed === 0){
      this.frame++;
    }
          
          
    if (this.frame >= this.currentAnimation.length) {
      this.frame = 0; //Reset the animation
      
      //Seperate attack for Chomper since it doesnt shoot a bullet
      if (this.type === "Chomper") {
        for(let z of zombies){ //Damage of the bullets
          if (abs(this.y - z.y) < 20 && abs(z.x - this.x) < 50 ) {
           z.hp -= 100;

           
            this.currentAnimation = this.animation.chew
           
          }
        }
      }
      
      //Generate a new bullet for Pea Shooter
      if (this.type === "Pea" && this.state === "attack") {
        this.bullets.push({img:loadImage("./assets/Pea Shooter/Projectile/pea-projectile.png"), x:this.x, y:this.y});
      }
    }
  }
}
