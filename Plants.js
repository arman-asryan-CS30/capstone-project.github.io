class Plants{
    constructor(x,y){
    this.x= x,
      this.y= y,
      this.state= "idle",
      this.animation= {
        idle:selectedPlant,
        shoot:5
      },
      this.hp= 100,
      this.frame= 0,
      this.speed= 5,
      this.type=currentPlant
      this.currentAnimation;;
    }

    idle(){
        if (this.state === "idle") {
            this.currentAnimation = this.animation.idle
        }
    }

    shooting(){
        if (this.state === "shooting") {
            this.currentAnimation = this.animation.shoot
        }
    }

    display(){
        image(this.currentAnimation[this.frame], this.x, this.y,100,100)

        if(frameCount % this.speed === 0){
            this.frame++
          }
          
          
          if (this.frame >= this.currentAnimation.length) {
            this.frame = 0
          }
    }
}
