var reveal;

var boxsize = 24;
var cols = 64;
var rows = 36;

var x = {
	left:200
};

var y = {
	left:43,
};

left = [];

var rinput,ginput,binput;
var gridToggle;
var gridBool = true;

class Square {
	constructor(x,y,w) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.color = 150;
	}
	
	show() {
		rect(this.x,this.y,this.w,this.w);
	}
	change(color) {
		this.color = color;
		fill(this.color);
		rect(this.x,this.y,this.w,this.w);
		
	}
	tell() {
		return this.color;
	}
}

function setup() {
	createCanvas(windowWidth-5,windowHeight-5);
	background(0);
	frameRate(60);
	
	rinput = createSlider(0,255,0);
	rinput.position(50,50);
	rinput.size(100);
	
	ginput = createSlider(0,255,0);
	ginput.position(50,100);
	ginput.size(100);
	
	binput = createSlider(0,255,0);
	binput.position(50,150);
	binput.size(100);
	
	gridToggle = createButton('Toggle Grid');
	gridToggle.position(52,200);
	gridToggle.size(100);
	gridToggle.mousePressed(gridCheck);
	
	
	fill(150);	//Default Light Gray Cell
	noStroke();
	for (var i=0; i < cols; i++) {	//left
		left[i] = [];
		for (var j=0; j < rows; j++) {
			
			left[i][j] = new Square(i*boxsize+x.left,j*boxsize+y.left, boxsize);
			left[i][j].show();
		}
	}
	
}

function gridDraw() {
	for (var i=0; i < rows; i++) {
		line(x.left,y.left + (boxsize * i), x.left + (cols * boxsize),y.left + (boxsize * i));
	}
	
	for (var j=0; j < cols; j++) {
		line(x.left + (boxsize * j),y.left, x.left + (boxsize * j),y.left + (boxsize * rows));
	}
}

function gridCheck() {
	if (gridBool == true) {
		gridBool = false;
	} else if (gridBool == false) {
		gridBool = true;
	}
}

function draw() {
	var r = rinput.value();
	var g = ginput.value();
	var b = binput.value();
	reveal = color(r,g,b);
	
	if (gridBool == true) {
		stroke(0);
	gridDraw();
	} else {
		noStroke();
		for (var i=0; i < cols; i++) {
			for (var j=0; j < rows; j++) {
			fill(left[i][j].tell());
			left[i][j].show();
			}
		}
		
		
	}
}

function mousePressed() {
	//gridToggle.mousePressed(gridBool);
	for (var i = 0; i < cols; i ++) {	//left
		for (var j=0; j < rows; j ++) {
			if (mouseX > (i*boxsize+x.left) && mouseX < ( i *boxsize+x.left+boxsize) && mouseY > (j*boxsize+y.left) && mouseY < (j*boxsize+y.left+boxsize)) {
				left[ i ][j].change(reveal);
			}
		}
	}
	
}


