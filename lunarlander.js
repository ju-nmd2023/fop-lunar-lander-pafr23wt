let x = 300;
let y = 250;
let z = 300;
let a = 250;
let c = 200;
let l = 200;
let speed = 2;
let rotationAngle = 10;


//clouds

function cloud(c, l) {
    fill(255,255,255,100);
    stroke(255,255,255,10);
    ellipse(c + 100, l + 10, 70, 60);
    ellipse(c + 70, l + 10, 60, 40);
    ellipse(c + 140, l + 15, 50, 40);
}

function cloudfly(c, l) {
    fill(255,255,255,250);
    stroke(0,0,0);
    strokeWeight(0.3);
    ellipse(c + 100, l + 10, 70, 60);
    ellipse(c + 70, l + 10, 60, 40);
    ellipse(c + 140, l + 15, 50, 40);
}

function pig(x, y) {
//tail 
fill(255, 182, 193);
stroke(255, 105, 180);
strokeWeight(2);
ellipse(x-95, y-130, 20);

// body for pig
fill(255, 182, 193);
stroke(255, 105, 180);
strokeWeight(2);
ellipse(x-30, y-120, 120, 80);
ellipse(x-30, y-180, 75, 80);

// eyes for pig
fill(255,255,255);
ellipse(x-20, y-190, 20);
ellipse(x-40, y-190, 20);

// eyeballs 
fill(0,0,0);
stroke(51,171,249);
strokeWeight(2);
ellipse(x-20, y-187, 10);
ellipse(x-40, y-187, 10);

// legs and arms
fill(255, 182, 193);
stroke(255, 105, 180);
strokeWeight(2);
ellipse(x-30, y-170, 35, 25);
ellipse(x-35, y-170, 2, 5);
ellipse(x-25, y-170, 2, 5);
rect(x-71, y-215, 20, 30, 5);
rect(x-11, y-215, 20, 30, 5);
rect(x-20, y-95, 32, 22, 5);
rect(x-70, y-95, 32, 22, 5);
rect(x-78, y-140, 22, 32, 20);
rect(x-78, y-140, 22, 32, 20);
rect(x-5, y-140, 22, 32, 20);
}

function draw() {
//background
background(135,206,235);

// grass 
noStroke();
fill(0, 128, 0);
rect(0, 420, 600, 200);
// mud
ellipse();
stroke(101, 67, 37);
fill(88, 57, 39);
ellipse(z-20, a+210, 350, 70);

// stones
stroke(85,85,85);
fill(101, 100, 101);
ellipse(z-185, a+200, 40, 30);
ellipse(z-200, a+210, 35, 27);
ellipse(z-190, a+220, 30, 35);
ellipse(z-170, a+230, 32, 30);
ellipse(z+150, a+205, 45,35);
ellipse(z+150, a+220, 40,30);

z = z + speed;
if (z >= 370 || z <= 270) {
    speed *= -1;
}

noStroke();    
cloud(c - 170, 40);
cloud(c + 20, 200);
cloud(c +100, 70);
cloud(c + 140, 90);
cloud(c + 200, 300);
cloud(c - 190, 250);
c = c + 0.5;
if (c > 750) {
    c = -250; 
}

pig(x,y);
if (keyCode == DOWN_ARROW) {
y = y +10;}
else if (keyCode == UP_ARROW) {
    y -= 3;
    cloudfly(x - 130, y - 70); 
}
else if (keyCode == RIGHT_ARROW) {
    x += 3;
    cloudfly(x - 130, y - 70); 
}
else if (keyCode == LEFT_ARROW) {
    x -= 3;
    cloudfly(x - 130, y - 70); 
}
}

