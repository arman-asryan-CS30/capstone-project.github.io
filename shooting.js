function eat(){
    for(plant of plants){
        for(let z of zombies){
            if (z.x - plant.x < 30 && z.y - plant.y <10) {
                z.moveSpeed = 0;
            }
        }
    }
}

function shoot(){
    for(let plant of plants){
        for(let z of zombies){
            if (plant.type === "Pea" && z.x - plant.x <400 && z.y - plant.y <10) {
                plant.state = "shooting"
            }
        }
    }
}