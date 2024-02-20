let x = 200;
let y = 200;
let c = 200;
let l = 200;
let speed = 2;
let s = 1.0;
let f = 300;
let r = 250;


//clouds
function cloud(c, l) {
    fill(255,255,255,100);
    stroke(255,255,255,10);
    ellipse(c + 100, l + 10, 70, 60);
    ellipse(c + 70, l + 10, 60, 40);
    ellipse(c + 140, l + 15, 50, 40);
}

//flowers on grass function
function flower (x,y) {
    //steam
    noStroke();
    fill(0, 80, 0);
    rect(x - 280, y + 200, 5, 30);
    
    // Flower
    fill(255, 0, 0); 
    
    // leafs
    ellipse(x-285, y+190, 15, 15);
    ellipse(x-270, y+190, 15, 15);
    ellipse(x-285, y+205, 15, 15);
    ellipse(x-270, y+205, 15, 15);
    
    // Center
    fill(255, 255, 0); 
    ellipse(x-278, y+198, 12, 12);
    }

function pig(x, y, s) {
    //tail 
    fill(255, 182, 193);
    stroke(255, 105, 180);
    strokeWeight(2);
    ellipse(x-95 * s, y-130 * s, 20 * s);
    
    // body for pig
    fill(255, 182, 193);
    stroke(255, 105, 180);
    strokeWeight(2);
    ellipse(x-30 * s, y-120 * s, 120 * s, 80 * s);
    ellipse(x-30 * s, y-180 * s, 75 * s, 80 * s);
    
    // eyes for pig
    fill(255,255,255);
    ellipse(x-20 * s, y-190 * s, 20 * s);
    ellipse(x-40 * s, y-190 * s, 20 * s);
    
    // eyeballs 
    fill(0,0,0);
    stroke(51,171,249);
    strokeWeight(2);
    ellipse(x-20 * s, y-187 * s, 10 * s);
    ellipse(x-40 * s, y-187 * s, 10 * s);
    
    // legs and arms
    fill(255, 182, 193);
    stroke(255, 105, 180);
    strokeWeight(2);
    ellipse(x-30 * s, y-170 * s, 35 * s, 25 * s);
    ellipse(x-35 * s, y-170 * s, 2 * s, 5 * s);
    ellipse(x-25 * s, y-170 * s, 2 * s, 5 * s);
    rect(x-71 * s, y-215 * s, 20 * s, 30 * s, 5 * s);
    rect(x-11 * s, y-215 * s, 20 * s, 30 * s, 5 * s);
    rect(x-20 * s, y-95 * s, 32 * s, 22 * s, 5 * s);
    rect(x-70 * s, y-95 * s, 32 * s, 22 * s, 5 * s);
    rect(x-78 * s, y-140 * s, 22 * s, 32 * s, 20 * s);
    rect(x-78 * s, y-140 * s, 22 * s, 32 * s, 20 * s);
    rect(x-5 * s, y-140 * s, 22 * s, 32 * s, 20 * s);
    }

    //Start Game- button
    function button(f, r, w, h) {
    noStroke();
    fill(255, 0, 0);
    rect(f, r, w, h);

    fill(255, 255, 0);
    textSize(30);
    textFont("Georgia");
    text("Start Game", f + 25, r + 40);
}

function draw() {
    //backgroundcolour
    background(135,206,235);

    // grass 
    noStroke();
    fill(0, 128, 0);
    rect(0, 350, 600, 300);

    //clouds in background
    noStroke();    
    cloud(c - 170, 40);
    cloud(c + 20, 200);
    cloud(c +100, 70);
    cloud(c + 140, 90);
    cloud(c + 200, 300);
    cloud(c - 190, 250);
    
    //movement for clouds
    c = c + 0.5;
    if (c > 750) {
    c = -250; }

    //flowers on grass
    flower(f,r);
    flower(f + 20, r + 20); 
    flower(f + 530, r - 10);
    flower(f + 450, r + 10);
    flower(f + 300, r - 15);
    flower(f + 100, r - 15);
    flower(f + 190, r + 30);

    pig(width / 2, y + 320, Math.max(0.8, (mouseX / width) * 2));

    if (mouseIsPressed && mouseX > f - 100 && mouseX < f - 100 + 200 && mouseY > r - 100 && mouseY < r - 100 + 60) {
        console.log("Mouse is pressed");
    }
    button(f - 100, r - 100, 200, 60);

    



}