function pickCharacter() {
    if (selectedPlant) {
      image(selectedPlant[0], mouseX, mouseY,100,100);
    }
  }

  function placeCharacter() {
    // Place plant on grid
  if (selectedPlant && mouseY > 150) {

    // Snap to grid
    let gridX = floor(mouseX / (width/10)) * (width/10) + 75;
    let gridY = floor((mouseY - 150) / 150) * 150 + 225;

    image(selectedPlant[0], gridX, gridY,100,100);

    plants.push(new Plants(gridX,gridY, plantAttack, loadImage("./assets/Pea Shooter/Projectile/pea-projectile.png")));

    selectedPlant = null;
}
  }