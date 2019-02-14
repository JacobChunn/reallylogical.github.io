var col;
var brush = 'single';

var boxsize = 24;
var Columns = 64;
var Rows = 36;

var Red = 0;
var Green = 0;
var Blue = 0;
var gridToggle, single, five, circle, callig;
var gridBool = true;
var streamBool = true;

arrPos = [];
saveSquares = [];

var x = {arrPos:240};
var y = {arrPos:40};

var lastJ = -1;
var lastI = -1;

var frameCheck = false;

var vale, button;

var valeMode = false;

var charArr = []; //14 chars

var img;

function setup() 
{
	img = loadImage('valeSans.png');
	
	
	stroke(1);
    createCanvas(windowWidth-5,windowHeight-5);
    frameRate(60);
   
	vale = createInput();
	vale.position(250, 15);
   
	button = createButton('submit password');
	button.position(vale.x + vale.width, 15);
	button.mousePressed(password);
	
    createIO();
   
    ClearCanvas();    
	charArr = ["1","2","3","4","5","6","7","8","9","@","#","$","%","&"];
	textAlign(CENTER);
}
 
 var backg = 0;
 var imgPause = 0;

 
function draw()
{
	if(valeMode == false){
		if (mouseHeldCheck() == false) {
			lastI = -1;
			lastJ = -1;
		}
		
		var r = Red;
		var g = Green;
		var b = Blue;
		
		background(r,g,b);
		
		col = color(r,g,b);
		
		if (mouseIsPressed == true) {
			frameCheck = true;
		} else if (mouseIsPressed == false) {
			frameCheck = false;
		}
		
		if (gridBool == true) 
		{
			gridDraw();
		} 
		else 
		{
			noStroke();
			for (var i=0; i < Columns; i++) 
			{
				for (var j=0; j < Rows; j++) 
				{
					fill(arrPos[i][j].tell());
					arrPos[i][j].show();
				}
			}
		   
		   
		}
		if (streamBool == true && mouseIsPressed) 
		{ 
			changeColors();
		}
		
		noFill();
		stroke(0);
		rect(240,40,Columns*boxsize,Rows*boxsize);
	} else {
		
		if(backg < 255){
			background(252, 204, 247, backg);
			backg++;
			//print(backg);
		} else {
			background(252, 204, 247);
			textFont("Comic Sans MS");
			textSize(32);
			fill(255);
			for (var x = 0; x < width/10; x++) {
			//distances[x] = []; // create nested array
				for (var y = 0; y < height/10; y++) {
					text(charArr[int(random(0,14))], (width/35)*x, (height/20)*y);
				}
			}
			if(imgPause > 50){
				textSize(34);
				fill(249,72,158);
				
				text("i like u", width/2, height/2 - 280);
			}
			if(imgPause > 100){
				imgPause++;
				tint(255, (imgPause-100)/2);
				image(img,width/2-310,height/2-225);
			}
			if(imgPause > 355){
				text("more than i like sans♥", width/2, height/2 + 280);
			}
			if(imgPause > 425){
				text("hap valentine!!! xox", width/2, height/2 + 320);
				textSize(15);
				text("-jake", width/2, height/2 + 360);
			}
			imgPause++;
		}		
	}
}

function heart(){
	
}

 
function mousePressed() 
{
	noStroke();
    if (streamBool == false) 
	{
		changeColors();
    }
}

function password(){
	var name = vale.value();
	if(name == 'pp'){
		valeMode = true;
		print(name);
	}
}