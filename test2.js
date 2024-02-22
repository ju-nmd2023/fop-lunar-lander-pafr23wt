let gameIsRunning = false;
let pigY = 150;
let velocity = 0.5;
const acceleration = 0.1;
let softLanding = false;
let gameEnd = false;
let stars = [];

function scenery() {
  push();
  fill(0, 0, 20);
  background(135, 206, 235);
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
  pop();
}

//CONFETTI FUNCTION
for (let i = 0; i < 1000; i++) {
  const star = {
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height),
    snow: Math.random() * 1,
    alpha: Math.random(),
    color: getRandomColor(),
  };
  stars.push(star);
}
//chat GPT
function getRandomColor() {
  const randomValue = Math.random();
  noStroke();
  if (randomValue < 0.33) {
    return color(0, 255, 0); // Green
  } else if (randomValue < 0.66) {
    return color(255, 255, 0);
  } else {
    return color(255, 105, 180);
  }
}
//chat GPT

// Pig
let normalEyesVisible = true;
let rotationAngle = 0;

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

    line(x - 60, y - 20, x - 110, y);
    line(x - 60, y, x - 110, y - 20);

    line(x - 30, y - 20, x - 70, y);
    line(x - 20, y, x - 70, y - 20);

    noStroke();
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
  pigY = 150; // Adjusted starting position
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
  fill(255);
  text("PIG LANDER", 130, 250);
  textSize(30);
  fill(255);
  text("Click to start", 195, 290);
}

function draw() {
  scenery();
  grass();
  pig(100, pigY, 2);

  if (!gameIsRunning && !gameEnd) {
    startScreen();
  } else if (gameIsRunning) {
    pigY = pigY + velocity;
    velocity = velocity + acceleration;

    if (keyIsDown(32)) {
      velocity = velocity - acceleration * 3;
    }
  }

  if (pigY >= 315) {
    softLanding = velocity < 2;
    gameIsRunning = false;
    gameEnd = true;

    if (softLanding) {
      textSize(50);
      fill(0, 255, 0);
      text("YOU WON", 160, 300);
      textSize(30);
      text("Click to try again", 175, 340);
      for (let star of stars) {
        fill(
          star.color.levels[0],
          star.color.levels[1],
          star.color.levels[2],
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
    }
  }
}
