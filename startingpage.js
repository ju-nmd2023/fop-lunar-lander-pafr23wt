let x = 200;
let y = 200;

function draw() {
    //backgroundcolour
    background(135,206,235);

    // grass 
    noStroke();
    fill(0, 128, 0);
    rect(0, 420, 600, 200);
    
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
}