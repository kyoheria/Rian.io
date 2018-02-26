let img; 
function preload(){
	img = loadImage('assets/asyu.png');
}

function setup() {
	creatcanvus(1000,800);

}



function draw() {
	image(img,0,0);
}

