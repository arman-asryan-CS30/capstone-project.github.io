function shoot(){
    for(plant of plants){
        for(let z of zombies){
            if (z.x - plant.x < 30 && z.x - plant.x <10) {
                console.log(1);
                z.moveSpeed = 0;
            }
        }
    }
}