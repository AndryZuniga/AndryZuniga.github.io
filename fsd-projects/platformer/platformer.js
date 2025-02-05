$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(10, 650, 100, 20, "yellow");
    createPlatform(400, 600, 50, 25, "red");
    createPlatform(650, 470, 20, 280, "orange");
    createPlatform(400, 400, 50, 50, "Pink");
    createPlatform(800, 450, 100, 25, "blue");
    createPlatform(1000, 400, 300, 50, "green");



    // TODO 3 - Create Collectables
    createCollectable("steve", 645, 430);
    createCollectable("diamond", 1000, 350);
    createCollectable("max", 400, 350);


    
    // TODO 4 - Create Cannons
    createCannon("top", 600, 550);
    createCannon("left", 300, 1000);
    createCannon("bottom", 950, 750);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
