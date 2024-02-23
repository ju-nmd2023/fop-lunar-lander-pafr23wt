function setup() {
  createCanvas(570, 700);
  frameRate(30);
  color = (x, x, x);
}

let gameIsRunning = false;
let normalEyesVisible = true;
let rotationAngle = 0;
let pigY = 150;
let cloudflyY = 150;
let velocity = 0.5;
const acceleration = 0.1;
let softLanding = false;
let gameEnd = false;
let stars = [];
let f = 300;
let r = 250;
let c = 200;
let l = 200;
x = 0;
y = 0;

//clouds in background function
function cloud(c, l) {
  fill(255, 255, 255, 100);
  stroke(255, 255, 255, 10);
  ellipse(c + 100, l + 10, 70, 60);
  ellipse(c + 70, l + 10, 60, 40);
  ellipse(c + 140, l + 15, 50, 40);
}

//cloud under pig function
function cloudfly(x, y) {
  fill(255, 255, 255, 250);
  stroke(0, 0, 0);
  strokeWeight(0.3);
  ellipse(x + 100, y + 20, 70, 60);
  ellipse(x + 70, y + 20, 60, 40);
  ellipse(x + 140, y + 25, 50, 40);
}

function scenery() {
  push();
  fill(0, 0, 20);
  background(135, 206, 235);
  noStroke();
  cloud(c - 170, 40);
  cloud(c + 20, 200);
  cloud(c + 100, 70);
  cloud(c + 140, 90);
  cloud(c + 200, 300);
  cloud(c - 190, 250);
  //Movement for clouds
  c = c + 0.5;
  if (c > 750) {
    c = -250;
  }
  pop();
}

function grass() {
  push();
  fill(166, 166, 166);
  noStroke();
  fill(0, 128, 0);
  rect(0, 600, width, height);
  fill(88, 57, 39);
  ellipse(270, 620, 210, 40);
  flower(f, r + 160);
  flower(f + 50, r + 180);
  flower(f + 530, r + 170);
  pop();
}

//CONFETTI FUNCTION
for (let i = 0; i < 1000; i++) {
  const star = {
    x: Math.floor(Math.random() * 570),
    y: Math.floor(Math.random() * 700),
    snow: Math.random() * 1,
    alpha: Math.random(),
  };
  stars.push(star);
}
// Pig

function pig(x, y) {
  push();
  translate(x, y);
  rotate(radians(sin(rotationAngle) * 0.5));

  // Tail
  fill(255, 182, 193);
  stroke(255, 105, 180);
  strokeWeight(2);
  ellipse(x + 10, y - 80, 20);

  // Body for pig
  fill(255, 182, 193);
  stroke(255, 105, 180);
  strokeWeight(2);
  ellipse(x + 70, y - 70, 120, 80);
  ellipse(x + 70, y - 130, 75, 80);

  if (normalEyesVisible) {
    fill(255, 255, 255);
    ellipse(x + 60, y - 140, 20);
    ellipse(x + 80, y - 140, 20);
    fill(0, 0, 0);
    stroke(51, 171, 249);
    strokeWeight(2);
    ellipse(x + 80, y - 137, 10);
    ellipse(x + 60, y - 137, 10);
  } else {
    // 'X' shapes for eyes when the game is lost
    stroke(255, 0, 0);
    strokeWeight(3);
    line(x + 75, y - 150, x + 85, y - 135);
    line(x + 75, y - 135, x + 85, y - 150);
    line(x + 55, y - 150, x + 65, y - 135);
    line(x + 55, y - 135, x + 65, y - 150);
  }

  // Mouth
  noFill();
  stroke(255, 105, 180);
  strokeWeight(2);
  arc(x + 70, y - 115, 40, 30, 0.1, PI - 0.1);

  // Legs and arms
  fill(255, 182, 193);
  stroke(255, 105, 180);
  strokeWeight(2);
  ellipse(x + 70, y - 120, 35, 25);
  ellipse(x + 65, y - 120, 2, 5);
  ellipse(x + 75, y - 120, 2, 5);
  rect(x + 29, y - 165, 20, 30, 5);
  rect(x + 89, y - 165, 20, 30, 5);
  rect(x + 80, y - 45, 32, 22, 5);
  rect(x + 30, y - 45, 32, 22, 5);
  rect(x + 21, y - 90, 22, 32, 20);
  rect(x + 95, y - 90, 22, 32, 20);
  pop();

  rotationAngle += 0.2;
}

function resetGame() {
  pigY = 150;
  cloudflyY = 240;
  gameIsRunning = true;
  gameEnd = false;
  normalEyesVisible = true;
}

function mouseClicked() {
  if (!gameIsRunning) {
    resetGame();
  }
}

function startScreen() {
  scenery();
  grass();
  pig(100, 100, 2);
  textSize(50);
  fill(255, 0, 0);
  text("PIG LANDER", 130, 250);
  textSize(30);
  fill(255);
  text("Click to start", 195, 290);
}

//flowers on grass function
function flower(x, y) {
  //steam
  noStroke();
  fill(0, 80, 0);
  rect(x - 280, y + 200, 5, 30);

  // Flower
  fill(255, 0, 0);

  // leafs
  ellipse(x - 285, y + 190, 15, 15);
  ellipse(x - 270, y + 190, 15, 15);
  ellipse(x - 285, y + 205, 15, 15);
  ellipse(x - 270, y + 205, 15, 15);

  // Center
  fill(255, 255, 0);
  ellipse(x - 278, y + 198, 12, 12);
}

function draw() {
  scenery();
  grass();
  pig(100, pigY, 2);
  cloudfly(170, cloudflyY, 2);

  if (!gameIsRunning && !gameEnd) {
    startScreen();
  } else if (gameIsRunning) {
    pigY += velocity;
    velocity += acceleration;
    cloudflyY += velocity * 2;
    if (keyIsDown(32)) {
      velocity = velocity - acceleration * 4;
    }
  }

  if (pigY >= 315) {
    softLanding = velocity < 2;
    gameIsRunning = false;
    gameEnd = true;

    if (softLanding) {
      textSize(50);
      fill(0, 128, 0);
      text("YOU WON", 160, 300);
      textSize(30);
      text("Click to try again", 175, 340);
      for (let star of stars) {
        const randomValue = Math.random();
        if (randomValue < 0.33) {
          fill(255, 204, 204);
        } else if (randomValue < 0.66) {
          fill(204, 255, 204);
        } else {
          fill(255, 255, 204);
        }
        fill(
          randomValue < 0.33 ? 255 : 0,
          randomValue >= 0.33 && randomValue < 0.66 ? 255 : 0,
          randomValue >= 0.66 ? 255 : 0,
          Math.abs(Math.sin(star.alpha)) * 255
        );
        ellipse(star.x, star.y, 6, 5);
        star.alpha = star.alpha + 0.05;
        star.y += star.snow;
        if (star.y > height) {
          star.y = 0;
        }
      }
    } else {
      textSize(50);
      fill(255, 0, 0);
      text("YOU LOSS!", 140, 300);
      textSize(30);
      text("Click to restart", 170, 340);
      normalEyesVisible = false;
    }
  }
}
