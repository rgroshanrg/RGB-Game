var red = document.querySelector("#red");
var green = document.querySelector("#green");
var blue = document.querySelector("#blue");


var result = document.querySelector("#result");

var newcolor = document.querySelector("#newcolor");

var box1 = document.querySelector("#box1");
var box2 = document.querySelector("#box2");
var box3 = document.querySelector("#box3");
var box4 = document.querySelector("#box4");
var box5 = document.querySelector("#box5");
var box6 = document.querySelector("#box6");

var redquantity;
var greenquantity;
var bluequantity;
var mainred;
var maingreen;
var mainblue;

var boxarray = [box1,box2,box3,box4,box5,box6];

var correctclick = false;

function randomise(){
	redquantity = Math.floor(Math.random() * (256 - 0) + 0);
	greenquantity = Math.floor(Math.random() * (256 - 0) + 0);
	bluequantity = Math.floor(Math.random() * (256 - 0) + 0);
}

function changeh1(){

	red.textContent = redquantity;
	green.textContent = greenquantity;
	blue.textContent = bluequantity;
	var randbox = boxarray[Math.floor(Math.random() * boxarray.length)];
	return randbox;
}

function colorise(){
	var rgbstr;
	for(var i=0; i<boxarray.length; i++)
	{
		randomise();
		rgbstr = "rgb(" + redquantity + ", " + greenquantity + ", " + bluequantity + ")";
		boxarray[i].style.backgroundColor = rgbstr;
	}
}

var randbox;
var rgbstr;
function reload(arrlength){	
	randomise();
	result.textContent = null;
	randbox = changeh1();
	mainred = redquantity;
	maingreen = greenquantity;
	mainblue = bluequantity;
	rgbstr = "rgb(" + mainred + ", " + maingreen + ", " + mainblue + ")";
	colorise();
	randbox.style.backgroundColor = rgbstr;
}

reload();

function afterclick(){
	if(this.style.backgroundColor === rgbstr){
		result.textContent = "			You are Right!!!";
		for(var i=0; i<boxarray.length; i++){
			boxarray[i].style.backgroundColor = rgbstr;
		}
	}
	else
		this.style.backgroundColor = "white";
}

newcolor.addEventListener("click", reload);

for(var i = 0;i<boxarray.length;i++)
	boxarray[i].addEventListener("click", afterclick);


