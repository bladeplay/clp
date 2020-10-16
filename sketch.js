let backg={
  colour:0,
  coldir:'+'
};

let sc = {
  val: 0,
  ang: 0,
  len: 360,
  thick: 2,
  colour: 0,
  coldir: '+'
};

let mn = {
  val: 0,
  ang: 0,
  len: 280,
  thick: 5,
  colour: (255 / 3),
  coldir: '+'
};

let hr = {
  val: 0,
  ang: 0,
  len: 220,
  thick: 8,
  colour: ((255 / 3) * 2),
  coldir: '+'
};


function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  colorMode(HSB);
}

function draw() {

  background(0);
  translate(width / 2, height / 2);
  back();
  rotate(180);
  hr.val = hour();
  mn.val = minute();
  sc.val = second();

  sc.ang = map(sc.val, 0, 60, 0, 360);
  mn.ang = map(mn.val + (sc.val / 60), 0, 60, 0, 360);
  hr.ang = map((hr.val % 12) + (mn.val / 60), 0, 12, 0, 360);

  hand(sc.ang, sc.len, sc.thick, sc.colour);
  hand(mn.ang, mn.len, mn.thick, mn.colour);
  hand(hr.ang, hr.len, hr.thick, hr.colour);

  if (sc.coldir == '+') {
    sc.colour++;
  }
  if (sc.coldir == '-') {
    sc.colour--;
  }


  if (mn.coldir == '+') {
    mn.colour++;
  }
  if (mn.coldir == '-') {
    mn.colour--;
  }


  if (hr.coldir == '+') {
    hr.colour++;
  }
  if (hr.coldir == '-') {
    hr.colour--;
  }

  if (backg.coldir == '+') {
    backg.colour++;
  }
  if (backg.coldir == '-') {
    backg.colour--;
  }


  
  
  if (sc.colour > 255) {
    sc.coldir = '-';
  }
  if (sc.colour < 0) {
    sc.coldir = '+';
  }


  if (mn.colour > 255) {
    mn.coldir = '-';
  }
  if (mn.colour < 0) {
    mn.coldir = '+';
  }


  if (hr.colour > 255) {
    hr.coldir = '-';
  }
  if (hr.colour < 0) {
    hr.coldir = '+';
  }
  
  if (backg.colour > 255) {
    backg.coldir = '-';
  }
  if (backg.colour < 0) {
    backg.coldir = '+';
  }
}

function hand(ang, len, thick, colour) {

  this.ang = ang;
  this.len = len;
  this.thick = thick;
  this.colour = colour;

  this.posX = sin(-this.ang) * len / 2;
  this.posY = cos(-this.ang) * len / 2;

  stroke(this.colour, 255, 255);
  strokeWeight(this.thick);
  push();
  rotate(90);

  noFill();
  arc(0, 0, this.len, this.len, 0, this.ang)
  pop();
  line(0, 0, this.posX, this.posY);
}

function back() {

  let ang = 180;
  stroke(backg.colour,255,backg.colour);
  strokeWeight(3);
  noFill();
  for (let i = 1; i <= 12; i++) {
    ang += 30;
    textAlign(CENTER, CENTER);
    let posX = sin(-ang) * 230;
    let posY = cos(-ang) * 230;
    textSize(60);
    
    let t = text(i, posX, posY);

  }

}