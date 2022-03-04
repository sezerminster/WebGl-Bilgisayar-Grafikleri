var red=0.0;
var green=0.0;
var blue=0.0;
var gl;
var theta;
var thetaLoc;
var color;
var colorLoc;
var direction = false;
var translationLocX, translationX = 0;
var translationLocY, translationY = 0;
var scaleLoc, scale = 1;
var delay = 300;
window.onload = function init() {
	const canvas = document.querySelector("#glcanvas");
	// Initialize the GL context
	gl = canvas.getContext("webgl");
	// Only continue if WebGL is available and working
	if (!gl) {
		alert("Unable to initialize WebGL. Your browser or machine may not support it.");
		return;
	}
	var program = initShaders(gl, "vertex-shader", "fragment-shader");
	gl.useProgram(program);

	var myButton = document.getElementById("DirectionButton");
	myButton.addEventListener("click",direction_button_listener);

	var m = document.getElementById("mymenu");
	m.addEventListener("click", menu_listener);
	colorLoc = gl.getUniformLocation(program, "color");

document.getElementById("slideRed").oninput = sliderred;
	
	document.getElementById("slideGreen").oninput = slidergreen;
document.getElementById("slideBlue").oninput = sliderblue;





document.getElementById("red").onclick = colorred ;
	document.getElementById("green").onclick =  colorgreen ;
document.getElementById("orange").onclick = colororange ;
	document.getElementById("blue").onclick =  colorblue ;
document.getElementById("yellow").onclick = coloryellow ;
	document.getElementById("navyblue").onclick =  colornavyblue ;

document.getElementById("sarıark").onclick=sarıark;
document.getElementById("kırmızıark").onclick=kırmızıark;
document.getElementById("yeşilark").onclick=yeşilark;
document.getElementById("lacivertark").onclick=lacivertark;
document.getElementById("siyahark").onclick=siyahark;
document.getElementById("turuncuark").onclick=turuncuark;
document.getElementById("maviark").onclick=maviark;
document.getElementById("griark").onclick=griark;




	

	color = [red, green, blue];

	scaleLoc = gl.getUniformLocation(program, "scale");
	document.getElementById("ScaleBigger").onclick = ScaleBigger ;
	document.getElementById("ScaleSmaller").onclick =  ScaleSmaller ;

	translationLocX = gl.getUniformLocation(program, "translationX");
	document.getElementById("slideX").oninput = translationXlist;


	translationLocY = gl.getUniformLocation(program, "translationY");
	document.getElementById("slideY").oninput = translationYlist ;

	var vertices = new Float32Array([
		//O
		

		-0.6, 0.5,
		-0.5, 0.5,
		-0.6, -0.5,
		-0.5, -0.5,
		
		-0.5, 0.5,
		-0.1, 0.5,
		-0.5, 0.4,
		-0.1, 0.4,
		
		-0.5, -0.4,
		-0.1, -0.4,
		-0.5, -0.5,
		-0.1, -0.5,
		
		
		-0.2, 0.5,
		-0.1, 0.5,
		-0.2, -0.5,
		-0.1, -0.5,
		
		
		
		//R
		
		0.0, 0.5,
		0.1, 0.5,
		0.0, -0.5,
		0.1, -0.5,
		
		
		
		0.1, 0.5,
		0.4, 0.5,
		0.1, 0.4,
		0.4, 0.4,
		
		0.3, 0.4,
		0.4, 0.4,
		0.3, 0.0, 
		0.4, 0.0,
		 

		0.3, 0.0,
		0.4, 0.0,
		0.4, 0.4,
		
		
		
		
		0.1, 0.0,
		0.3, 0.0,
		0.3, 0.1,
		
		
		0.1, 0.0,
		0.3, 0.1,
		0.1, 0.1,
		
	   
	   
		0.2,0.0,
		0.1,0.0,
		0.4,-0.5,
		0.6,-0.5,
		

	]);

	var bufferId = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
	gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

	
	var vPosition = gl.getAttribLocation(program, "vPosition");
	gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vPosition);

	thetaLoc = gl.getUniformLocation(program, "theta");
	theta = 0;

	window.addEventListener("keydown", keyboard_func, true);
	// Set clear color to black, fully opaque
	gl.clearColor(1.0, 1.0, 1.0, 1.0);
	requestAnimFrame(render);
};

function render() {
	setTimeout(function () {
		gl.clear(gl.COLOR_BUFFER_BIT);
		theta += (direction ? -0.1 : 0.1);
		gl.uniform1f(thetaLoc, theta);
		gl.uniform3fv(colorLoc, color);
		gl.uniform1f(translationLocX, translationX);
		gl.uniform1f(translationLocY, translationY);
		gl.uniform1f(scaleLoc, scale);
		gl.drawArrays(gl.TRIANGLES, 0, 3);
		gl.drawArrays(gl.TRIANGLES, 1, 3);
		gl.drawArrays(gl.TRIANGLES, 4, 3);
		gl.drawArrays(gl.TRIANGLES, 5, 3);
		gl.drawArrays(gl.TRIANGLES, 8, 3);
		gl.drawArrays(gl.TRIANGLES, 9, 3);
		gl.drawArrays(gl.TRIANGLES, 12, 3);
		gl.drawArrays(gl.TRIANGLES, 13, 3);
		gl.drawArrays(gl.TRIANGLES, 16, 3);
		gl.drawArrays(gl.TRIANGLES, 17, 3);
		gl.drawArrays(gl.TRIANGLES, 20, 3);
		gl.drawArrays(gl.TRIANGLES, 21, 3);
		gl.drawArrays(gl.TRIANGLES, 24, 3);
		gl.drawArrays(gl.TRIANGLES, 27, 3);
		gl.drawArrays(gl.TRIANGLES, 28, 3);
		gl.drawArrays(gl.TRIANGLES, 31, 3);
		gl.drawArrays(gl.TRIANGLES, 34, 3);
		gl.drawArrays(gl.TRIANGLES, 37, 3);
		gl.drawArrays(gl.TRIANGLES, 38, 3);
		
					  
		requestAnimFrame(render);
	}, delay);
}


function colorred () {
	color=[1.0,0.0,0.0];
};
function colorgreen () {
	color=[0.0,1.0,0.0];
};
function colorblue () {
	color=[0.0,0.0,1.0];
};
function colororange () {
	color=[1.0,0.5,0.0];
};
function coloryellow () {
	color=[1.0,1.0,0.0];
};
function colornavyblue () {
	color=[0.2,0.0,0.7];
};

function sliderred() {red=this.value/255;
color=[red,green,blue]; }
function slidergreen() { green = this.value/255;
color=[red,green,blue]; };
function sliderblue() { blue=this.value/255;
color=[red,green,blue];
 };
function sarıark() {
		gl.clearColor(1.0, 1.0, 0.0, 1.0);
}
function kırmızıark() {
		gl.clearColor(1.0, 0.0, 0.0, 1.0);
}
function siyahark() {
		gl.clearColor(0.0, 0.0, 0.0, 1.0);
}
function yeşilark() {
		gl.clearColor(0.0, 1.0, 0.0, 1.0);
}
function griark() {
		gl.clearColor(0.5, 0.5, 0.5, 1.0);
}
function maviark() {
		gl.clearColor(0.0, 0.0, 1.0, 1.0);
}
function lacivertark() {
		gl.clearColor(0.0, 0.0, 0.5, 1.0);
}
function turuncuark() {
		gl.clearColor(1.0, 0.5, 0.0, 1.0);
}

function keyboard_func(event) {
	if (event.defaultPrevented) {
		return; 
	}
	switch (event.key) {
		case "2": 
		
			translationY -= 0.1;
			break;
		case "8": 
	
			translationY += 0.1;
			break;
		case "4": 
			translationX -= 0.1;
			break;
		case "6": 
		
			translationX += 0.1;
			break;
		case "1":
		translationX -= 0.1;
		translationY -= 0.1;
			break;
		case "9":
		translationX += 0.1;
		translationY += 0.1;
		break;
		
		case "3":
		translationX += 0.1;
		translationY -= 0.1;
		break;
		
		case "7":
		translationX -= 0.1;
		translationY += 0.1;
		break;
		
		case ">":
		scale+=0.1;
		break;
		case "<":
		scale-=0.1;
		break;
		
		default:
			return; 
	}



}
function menu_listener(event) {
	switch (event.target.value) {
		case '0':
			delay /= 2.0;
			break;
		case '1':
			delay *= 2.0;
			break;
	}

}
function direction_button_listener () { direction = !direction; }
function translationXlist() { translationX = this.value; };
function translationYlist() { translationY = this.value; };
function ScaleBigger() {
scale += 0.1; };
function ScaleSmaller() {
scale = (scale - 0.1) < 0.2 ? 0.2 : scale - 0.1; };