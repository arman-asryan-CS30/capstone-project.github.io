class Plants{
  constructor(x,y,attack,bullet){
    this.x= x,
    this.y= y,
    this.state= "idle",
    this.animation= {
      idle:selectedPlant,
      attack:attack
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
    for(let b of this.bullets){
      image(b.img, b.x, b.y, 30,30);
      b.x+=5;

      for(let z of zombies){
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

    if(frameCount % this.speed === 0){
      this.frame++;
    }
          
          
    if (this.frame >= this.currentAnimation.length) {
      this.frame = 0;
      if (this.type === "Pea" && this.state === "attack") {
        this.bullets.push({img:loadImage("./assets/Pea Shooter/Projectile/pea-projectile.png"), x:this.x, y:this.y});
      }
    }
  }
}
