function menu() {
    //Menu image
    image(menuImg,width/2,height/2,width,height)
    image(menuText,width/2,height*0.3,500,300)
  
   
    button.position(width/2-100, height*0.75)
    button.size(200,50)
  
    button.mousePressed(startGame)
  }
  
  //Start the game
  function startGame() {
    gameOn = true;
    button.hide()
  }