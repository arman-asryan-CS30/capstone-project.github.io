function generateZombie() {
    let gridY = floor((random(height) - 150) / 150) * 150 + 225;
    let zombie = new Zombie(gridY)
    zombies.push(zombie)
}

class Zombie{
    constructor(y){
        this.x = width-100;
        this.y = y;
        this.speed = 5
        this.state = "walking"
        this.frame = 0;
        this.moveSpeed = 1;
        this.image = zombiesWalk;
        this.frameTimer = 0
    }

    move(){
        this.x -= this.moveSpeed;
    }

    display(){
        image(
            this.image[this.frame],
            this.x,
            this.y,
            150,
            150
        );

           // Slow animation down
           this.frameTimer++;

        if(this.frameTimer >= 30){
   
               this.frame++;
               this.frameTimer = 0;
   
               // Restart animation
               if(this.frame >= this.image.length){
                   this.frame = 0;
               }
        }
    }

    gameOver(){
        if (this.x <0) {
            noLoop()
            text("Game Over", width/2, height/2)
        }
    }
}