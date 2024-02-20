let x = 300;
let y = 250;
let z = 300;
let a = 250;
let c = 200;
let l = 200;
let f = 300;
let r = 250;
let speed = 5;
let s = 1.0;
let gameStarted = false; 

//clouds in background function
function cloud(c, l) {
    fill(255,255,255,100);
    stroke(255,255,255,10);
    ellipse(c + 100, l + 10, 70, 60);
    ellipse(c + 70, l + 10, 60, 40);
    ellipse(c + 140, l + 15, 50, 40);
}

//cloud under pig function
function cloudfly(c, l) {
    fill(255,255,255,250);
    stroke(0,0,0);
    strokeWeight(0.3);
    ellipse(c + 100, l + 10, 70, 60);
    ellipse(c + 70, l + 10, 60, 40);
    ellipse(c + 140, l + 15, 50, 40);
}
// mud function 
function mud (z,a) {
    ellipse();
    stroke(101, 67, 37);
    fill(88, 57, 39);
    ellipse(z-20, a+210);
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

    function deadpig(x, y, s) {
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
        
        
        // dead eyes  
        stroke(0, 0, 0); 
        line(x - 25 * s, y - 195 * s, x - 15 * s, y - 185 * s); 
        line(x - 25 * s, y - 185 * s, x - 15 * s, y - 195 * s); 
        line(x - 45 * s, y - 195 * s, x - 35 * s, y - 185 * s); 
        line(x - 45 * s, y - 185 * s, x - 35 * s, y - 195 * s); 
    
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

    function isPigTouchingMud() {
        return x - 30 >= z - 175 && x - 30 <= z + 175;
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

 //try again- button
 function tryagainbutton(f, r, w, h) {
    noStroke();
    fill(0,0,0);
    textSize(20);
    text("Sorry, You Loss..", f+ 30, r - 10);
    noStroke();
    fill(255, 0, 0);
    rect(f, r, w, h);

    fill(255, 255, 0);
    textSize(30);
    textFont("Georgia");
    text("Try Again", f + 35, r + 40);
}


function draw() {
    if (!gameStarted && mouseIsPressed && 
        mouseX > f - 100 &&
        mouseX < f - 100 + 200 &&
        mouseY > r - 100 &&
        mouseY < r - 100 + 60) {
        
        gameStarted = true;
        
        // background
        background(135,206,235);

        // grass
        noStroke();
        fill(0, 128, 0);
        rect(0, 420, 600, 200);

        // mud
        fill(88, 57, 39);
        ellipse(z-20, a+230, 350, 70);

        // Movement for mud
        z = z + speed;
        if (z >= 370 || z <= 270) {
            speed *= -1;
        }

        // clouds
        noStroke();    
        cloud(c - 170, 40);
        cloud(c + 20, 200);
        cloud(c +100, 70);
        cloud(c + 140, 90);
        cloud(c + 200, 300);
        cloud(c - 190, 250);

        // Movement for clouds
        c = c + 0.5;
        if (c > 750) {
            c = -250; 
        }

        // pig
        pig(x, y, s);

        // Movement for pig
        if (keyCode == DOWN_ARROW) {
            y = y +10;
        } else if (keyCode == UP_ARROW) {
            y -= 3;
            cloudfly(x - 130, y - 70); 
        } else if (keyCode == RIGHT_ARROW) {
            x += 3;
            cloudfly(x - 130, y - 70); 
        } else if (keyCode == LEFT_ARROW) {
            x -= 3;
            cloudfly(x - 130, y - 70); 
        }

        // Draw flowers
        flower(f, r);
        flower(f + 20, r + 20);
        flower(f + 530, r - 10);

    } else if (gameStarted) {

        // Change background
        background(135,206,235);

        // Draw grass
        noStroke();
        fill(0, 128, 0);
        rect(0, 420, 600, 200);

        // Draw mud
        fill(88, 57, 39);
        ellipse(z-20, a+210, 200, 40);

        // Movement for mud
        z = z + speed;
        if (z >= 440 || z <= 180) {
            speed *= -1;
        }

        // Draw clouds
        noStroke();    
        cloud(c - 170, 40);
        cloud(c + 20, 200);
        cloud(c +100, 70);
        cloud(c + 140, 90);
        cloud(c + 200, 300);
        cloud(c - 190, 250);

        // Movement for clouds
        c = c + 0.5;
        if (c > 750) {
            c = -250; 
        }

        // Draw pig
        pig(x, y, s);

        // Movement for pig
        if (keyCode == DOWN_ARROW) {
            y = y +10;
        } else if (keyCode == UP_ARROW) {
            y -= 3;
            cloudfly(x - 130, y - 70); 
        } else if (keyCode == RIGHT_ARROW) {
            x += 3;
            cloudfly(x - 130, y - 70); 
        } else if (keyCode == LEFT_ARROW) {
            x -= 3;
            cloudfly(x - 130, y - 70); 
        }
        if (keyCode == 32 && isPigTouchingMud()) {
            background(135,206,235);
            noStroke();
            fill(0, 128, 0);
            rect(0, 350, 600, 300);
            cloud(c - 170, 40);
            cloud(c + 20, 200);
            cloud(c +100, 70);
            cloud(c + 140, 90);
            cloud(c + 200, 300);
            cloud(c - 190, 250);
            deadpig(x + 30, y + 250 , s * 1.2);
            tryagainbutton(f - 100, r - 100, 200, 60);
            }

        // Draw flowers
        flower(f, r);
        flower(f + 20, r + 20);
        flower(f + 530, r - 10);

    } else {
        background(135,206,235);
        noStroke();
        fill(0, 128, 0);
        rect(0, 350, 600, 300);
        cloud(c - 170, 40);
        cloud(c + 20, 200);
        cloud(c +100, 70);
        cloud(c + 140, 90);
        cloud(c + 200, 300);
        cloud(c - 190, 250);
        flower(f, r);
        flower(f + 20, r + 20); 
        flower(f + 530, r - 10);
        flower(f + 450, r + 10);
        flower(f + 300, r - 15);
        flower(f + 100, r - 15);
        flower(f + 190, r + 30);
        pig(width / 2, y + 320, Math.min(2, 2.8 - (mouseY / height) * 2));
        button(f - 100, r - 100, 200, 60);
    }

}