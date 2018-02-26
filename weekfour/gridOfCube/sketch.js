

function setup() {
	createCanvas(720, 360, WEBGL); 
	ortho(-width / 2, width / 2, height / 2, -height / 2, 0, 500);
	noStroke();
	
}



function draw() {
	background(0);
	orbitControl();
	
	pointLight(255, 0, 0, 500, 0, 200);

	directionalLight(10, 10, 255, -1, 0, 0);

	pointLight(255, 0, 0, 0, 0, 300);

	for (var i = -1; i < 10; i++) {
	    for (var j = -2; j < 30; j++) {
	      push();
	      translate(i * 160, 0, j * 160);
	      box(40, 40, 40);
	      pop();
	    }
  }


}

