let x = 300;
let y = 250;
let clouds = [];

// background
background(135,206,235);


for (let i = 0; i < 6; i++) {
    const cloud = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * 350),
        speed: Math.random() * 1  ,
        size: Math.random() * 100 + 50,
        alpha: Math.random(),  
    };
    
    clouds.push(cloud); 
}

function draw() {
    noStroke();    
    

    for (let cloud of clouds) {
        fill(255, 255, 255, Math.abs(Math.sin(cloud.alpha)) * 4 );
        
        ellipse(cloud.x, cloud.y, cloud.size * 0.7, cloud.size * 0.5);
        ellipse(cloud.x - cloud.size * 0.4, cloud.y, cloud.size * 0.6, cloud.size * 0.2);
        ellipse(cloud.x + cloud.size * 0.4, cloud.y, cloud.size * 0.6, cloud.size * 0.4);

        cloud.alpha = cloud.alpha + 0.5;

        cloud.x += cloud.speed * 0.1; 
        
        if (cloud.x > width + cloud.size * 0.7) {
            cloud.x = -cloud.size * 0.7; 
        }
    }


// grass 
fill(0, 128, 0);
rect(0, 420, 600, 200);

// mud
ellipse();
stroke(43, 29, 20);
fill(88, 57, 39);
ellipse(280, 460, 350, 70);

// stones
fill(101, 100, 101);
ellipse(115, 450, 40, 30);
ellipse(100, 460, 35, 27);
ellipse(110, 470, 30, 35);
ellipse(130, 480, 32, 30);
ellipse(450, 455, 45,35);
ellipse(450, 470, 40,30);

//tail 
push();
fill(255, 182, 193);
stroke(255, 105, 180);
strokeWeight(2);
rotate(7);
rect(x-80, -60, 30, 10, 100);
pop();

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
