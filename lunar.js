//background
let c = 200;
let l = 200;
let b = 300;
let d = 250;
let s = 1.0;


function scenery() {
  push();
  fill(0, 0, 20);
  background(135, 206, 235);
  pop();
}
function moon() {
  push();
  fill(166, 166, 166);
  noStroke();
  fill(0, 128, 0);
  rect(0, 600, width, height);
  fill(88, 57, 39);
  ellipse(300, 620, 200, 40);
  pop();
}

//plant monster
let normalEyesVisible = true;
let rotationAngle = 0;

function plant(x, y) {
  push();
  //tail
  fill(255, 182, 193);
  stroke(255, 105, 180);
  strokeWeight(2);
  ellipse(b - 95 * s, d - 130 * s, 20 * s);

  // body for pig
  fill(255, 182, 193);
  stroke(255, 105, 180);
  strokeWeight(2);
  ellipse(b - 30 * s, d - 120 * s, 120 * s, 80 * s);
  ellipse(b - 30 * s, d - 180 * s, 75 * s, 80 * s);

  // eyes for pig
  fill(255, 255, 255);
  ellipse(b - 20 * s, d - 190 * s, 20 * s);
  ellipse(b - 40 * s, d - 190 * s, 20 * s);

  // eyeballs
  fill(0, 0, 0);
  stroke(51, 171, 249);
  strokeWeight(2);
  ellipse(b - 20 * s, d - 187 * s, 10 * s);
  ellipse(b - 40 * s, d - 187 * s, 10 * s);

  //mouth
  noFill();
  stroke(255, 105, 180);
  strokeWeight(2);
  arc(b - 30 * s, d - 165 * s, 40 * s, 30 * s, 0.1, PI - 0.1); // Adjusted y-coordinate

  // legs and arms
  fill(255, 182, 193);
  stroke(255, 105, 180);
  strokeWeight(2);
  ellipse(b - 30 * s, d - 170 * s, 35 * s, 25 * s);
  ellipse(b - 35 * s, d - 170 * s, 2 * s, 5 * s);
  ellipse(b - 25 * s, d - 170 * s, 2 * s, 5 * s);
  rect(b - 71 * s, d - 215 * s, 20 * s, 30 * s, 5 * s);
  rect(b - 11 * s, d - 215 * s, 20 * s, 30 * s, 5 * s);
  rect(b - 20 * s, d - 95 * s, 32 * s, 22 * s, 5 * s);
  rect(b - 70 * s, d - 95 * s, 32 * s, 22 * s, 5 * s);
  rect(b - 78 * s, d - 140 * s, 22 * s, 32 * s, 20 * s);
  rect(b - 78 * s, d - 140 * s, 22 * s, 32 * s, 20 * s);
  rect(b - 5 * s, d - 140 * s, 22 * s, 32 * s, 20 * s);
}


  if (normalEyesVisible) {
    //the normal eyes when you win or game i running
    fill(255, 255, 255);
    noStroke();
    ellipse(180, 290, 30);
    ellipse(220, 290, 30);
    fill(0, 0, 0);
    noStroke();
    ellipse(180, 295, 20);
    ellipse(220, 295, 20);
    fill(255, 255, 255);
    ellipse(182, 300, 7);
    ellipse(218, 300, 7);
  } else {
    // 'X' shapes for eyes when the game is lost
    stroke(255, 0, 0);
    strokeWeight(3);

    line(170, 280, 190, 300);
    line(170, 300, 190, 280);

    line(210, 280, 230, 300);
    line(210, 300, 230, 280);

    noStroke();
  }

  //mouth
  fill(0, 80, 0);
  arc(200, 320, 40, 40, TWO_PI, PI);
  fill(160, 0, 0);
  ellipse(200, 336, 20, 7);
  pop();

  rotationAngle += 0.1;
}

let gameIsRunning = false;
let plantY = 100;
let velocity = 0.5;
const acceleration = 0.1;
let softLanding = false;
let gameEnd = false;
let stars = [];

let gameState = "start";

function resetGame() {
  plantY = 0;
  gameIsRunning = true;
  gameEnd = false;
  normalEyesVisible = true;
}

function mousePressed() {
  if (!gameIsRunning) {
    gameState = "running";
    resetGame();
  }
}

function startScreen() {
  scenery();
  moon();
  plant(100, 100);
  textSize(50);
  fill(255);
  text("Press to start", 150, 200);
} 

for (let i = 0; i < 300; i++) {
  const star = {
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height),
    alpha: Math.random(),
    snow: Math.random(),
  };
  stars.push(star);
}

function draw() {
  scenery();
  noStroke();
  for (let star of stars) {
    fill(255, 255, 255, Math.abs(Math.sin(star.alpha)) * 255);
    ellipse(star.x, star.y, 3);
    star.alpha = star.alpha;
    star.y += star.snow;

    if (star.y > height) {
      star.y = 0;
    }
  }

  moon();
  plant(100, plantY);

  if (gameState === "start") {
    startScreen();
  } else if (gameState === "running") {
    gameIsRunning = true;
  } else if (gameState === "end") {
    gameIsRunning = false;
    gameEnd = true;
  }

  if (gameIsRunning === true) {
    plantY = plantY + velocity;
    velocity = velocity + acceleration;

    if (keyIsDown(32)) {
      velocity = velocity - acceleration * 3;
    }
  }

  if (plantY >= 250) {
    softLanding = velocity < 2;
    gameIsRunning = false;
    gameEnd = true;
    gameState = "end";

    textSize(50);
    if (softLanding) {
      roots = true;
      fill(0, 255, 0);
      text("WIN", 250, 300);
      textSize(30);
      text("Press to restart", 200, 340);
      console.log("win");
    } else {
      normalEyesVisible = false;
      fill(255, 0, 0);
      text("GAME OVER!", 160, 300);
      textSize(30);
      text("Press to restart", 200, 340);
      console.log("game over");
    }
  }
}
