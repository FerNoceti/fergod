function setup() {
	createCanvas(windowWidth, windowHeight);
	textStyle(BOLD)
	textAlign(CENTER);
	frameRate(60)
  }

  function draw() {
	background(random(255), random(255), random(255));

	translate(width/2, height/2);
	stroke(255);
	noFill();
	beginShape();
	for(let i = 0; i < TWO_PI; i+=0.01){
	  let r = random(50, windowHeight + windowWidth / 2);
	  let x = r * cos(i);
	  let y = r * sin(i);
	  vertex(x,y);

	}
	fill(random(255), random(255), random(255));
	noStroke();
	endShape(CLOSE);

	if (random(0, 1) > 0.5){
	  textSize(random(69, 200));
	  fill(random(0, 1) > 0.5 ? "white" : "black")
	  text(random(0, 1) > 0.5 ? "fer" : "god", random(-50, 50), random(-50, 50));

	}

  }