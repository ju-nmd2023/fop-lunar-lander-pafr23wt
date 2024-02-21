let x = 300;
let y = 250;
let z = 300;
let a = 250;
let c = 200;
let l = 200;
let f = 300;
let r = 250;
let b = 300;
let d = 250;
let speed = 5;
let s = 1.0;
let gameStarted = false; 
let stars = [];


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

    function happypig(b, d, s) {
        //tail 
        fill(255, 182, 193);
        stroke(255, 105, 180);
        strokeWeight(2);
        ellipse(b-95 * s, d-130 * s, 20 * s);
        
        // body for pig
        fill(255, 182, 193);
        stroke(255, 105, 180);
        strokeWeight(2);
        ellipse(b-30 * s, d-120 * s, 120 * s, 80 * s);
        ellipse(b-30 * s, d-180 * s, 75 * s, 80 * s);
        
       // eyes for pig
       fill(255,255,255);
       ellipse(b-20 * s, d-190 * s, 20 * s);
       ellipse(b-40 * s, d-190 * s, 20 * s);
       
       // eyeballs  
       fill(0,0,0);
       stroke(51,171,249);
       strokeWeight(2);
       ellipse(b-20 * s, d-187 * s, 10 * s);
       ellipse(b-40 * s, d-187 * s, 10 * s);
    
       //mouth
       noFill();
       stroke(255, 105, 180);
       strokeWeight(2);
       arc(b - 30 * s, d - 165 * s, 40 * s, 30 * s, 0.1, PI - 0.1); // Adjusted y-coordinate
       
        // legs and arms
        fill(255, 182, 193);
        stroke(255, 105, 180);
        strokeWeight(2);
        ellipse(b-30 * s, d-170 * s, 35 * s, 25 * s);
        ellipse(b-35 * s, d-170 * s, 2 * s, 5 * s);
        ellipse(b-25 * s, d-170 * s, 2 * s, 5 * s);
        rect(b-71 * s, d-215 * s, 20 * s, 30 * s, 5 * s);
        rect(b-11 * s, d-215 * s, 20 * s, 30 * s, 5 * s);
        rect(b-20 * s, d-95 * s, 32 * s, 22 * s, 5 * s);
        rect(b-70 * s, d-95 * s, 32 * s, 22 * s, 5 * s);
        rect(b-78 * s, d-140 * s, 22 * s, 32 * s, 20 * s);
        rect(b-78 * s, d-140 * s, 22 * s, 32 * s, 20 * s);
        rect(b-5 * s, d-140 * s, 22 * s, 32 * s, 20 * s);
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
    

    function deadpig(b, d, s) {
        //tail 
        fill(255, 182, 193);
        stroke(255, 105, 180);
        strokeWeight(2);
        ellipse(b-95 * s, d-130 * s, 20 * s);
        
        // body for pig
        fill(255, 182, 193);
        stroke(255, 105, 180);
        strokeWeight(2);
        ellipse(b-30 * s, d-120 * s, 120 * s, 80 * s);
        ellipse(b-30 * s, d-180 * s, 75 * s, 80 * s);
        
        
        // dead eyes  
        stroke(0, 0, 0); 
        line(b - 25 * s, d - 195 * s, b - 15 * s, d - 185 * s); 
        line(b - 25 * s, d - 185 * s, b - 15 * s, d - 195 * s); 
        line(b - 45 * s, d - 195 * s, b - 35 * s, d - 185 * s); 
        line(b - 45 * s, d - 185 * s, b - 35 * s, d - 195 * s); 
    
        // legs and arms
        fill(255, 182, 193);
        stroke(255, 105, 180);
        strokeWeight(2);
        ellipse(b-30 * s, d-170 * s, 35 * s, 25 * s);
        ellipse(b-35 * s, d-170 * s, 2 * s, 5 * s);
        ellipse(b-25 * s, d-170 * s, 2 * s, 5 * s);
        rect(b-71 * s, d-215 * s, 20 * s, 30 * s, 5 * s);
        rect(b-11 * s, d-215 * s, 20 * s, 30 * s, 5 * s);
        rect(b-20 * s, d-95 * s, 32 * s, 22 * s, 5 * s);
        rect(b-70 * s, d-95 * s, 32 * s, 22 * s, 5 * s);
        rect(b-78 * s, d-140 * s, 22 * s, 32 * s, 20 * s);
        rect(b-78 * s, d-140 * s, 22 * s, 32 * s, 20 * s);
        rect(b-5 * s, d-140 * s, 22 * s, 32 * s, 20 * s);
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
for (let i = 0; i < 1000; i++) {
    const star = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
        snow: Math.random() * 1,
        alpha: Math.random(),
    };
    stars.push(star);
}


function draw() {
            background(135,206,235);
            noStroke();
            fill(0,0,0);
            textSize(20);
            text("Congratulations, YOU WON!", f - 140, r - 100);
            noStroke();
            fill(0, 128, 0);
            rect(0, 350, 600, 300);
            cloud(c - 170, 40);
            cloud(c + 20, 200);
            cloud(c +100, 70);
            cloud(c + 140, 90);
            cloud(c + 200, 300);
            cloud(c - 190, 250); 
            noStroke();
            fill(88, 57, 39);
            ellipse(b, d+140, 400, 70);
            happypig(b + 30, d + 200, s * 1.2);
            }

        // Draw flowers
        
        flower(f, r);
        flower(f + 20, r + 20);
        flower(f + 530, r - 10);

        for (let star of stars) {
            fill(255, 255, 255, Math.abs(Math.sin(star.alpha)) * 255);
            ellipse(star.x, star.y, 6, 5);
            star.alpha = star.alpha + 0.05;
            star.y += star.snow;
            if (star.y > height) {
                star.y = 0;
            }
        }