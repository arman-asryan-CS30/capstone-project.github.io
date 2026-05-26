function generateZombies() {
    let gridY = floor((random(height) - 150) / 150) * 150 + 225;
    let zombie = new Zombie(gridY);
    
    if(zombie.state === "walking"){
        zombie.image = zombiesWalk;
    }

    zombies.push(zombie)
}

class Zombie{
    constructor(y){
        this.x = width;
        this.y = y;
        this.speed = 5
        this.state = "walking"
        this.frame = 0;
        this.speed = 5;
        this.image;
    }

    move(){
        this.x -= this.speed;
    }
}