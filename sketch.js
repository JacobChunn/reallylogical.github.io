var drawCheck = 0;

var shapeSize = 30;

var lineX1 = 0;
var lineY1 = 0;


function setup() {
	createCanvas(1000,1000);
	background(0);
	frameRate(144);
}

function draw() {
	if (drawCheck == 0) {
		stroke(255);
		noFill();
		if (random(1) < 0.5) {
			line(lineX1, lineY1, lineX1 + shapeSize, lineY1 + shapeSize);
			//arc(lineX1,lineY1,shapeSize,shapeSize,3.92699081699,0.785398, OPEN);
		} else {
			line(lineX1 + shapeSize, lineY1, lineX1, lineY1 + shapeSize);
			//arc(lineX1,lineY1, shapeSize, shapeSize, 2.35619, 5.49779, OPEN);
		}
		lineX1 = lineX1 + shapeSize;
		if (lineX1 > width) {
		lineX1 = 0;
		lineY1 = lineY1 + shapeSize;
		}
	}
	
	if (lineY1 > height) {
		drawCheck = 1;
	}
}
