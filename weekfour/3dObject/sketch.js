function setup() {
	createCanvas(710, 400, WEBGL);
	noStroke();
}

function draw() {
	background(0);

	
	pointLight(255, 0, 0, 500, 0, 200);

	directionalLight(0, 0, 255, -1, 0, 0);

	pointLight(255, 0, 0, 0, 0, 300);

	rotateY(map(mouseX, 0, width, 0, PI));
	rotateX(map(mouseY, 0, height, 0, PI));
	box(200);
}