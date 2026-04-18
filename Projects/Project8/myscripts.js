// JavaScript Document
var PrintButton1 = new Image()
var PrintButton2 = new Image()
var logo = new Image()
var logo2 = new Image()

if (document.images) {
	PrintButton1.src = "Images/Print1.jpg"
	PrintButton2.src = "Images/Print2.jpg"
	logo.src = "Images/Logo.png"
	logo2.src = "Images/Logo2.png"
}

var imgArray = [
	'Image1Lg.jpg',
	'Image2Lg.jpg',
	'Image3Lg.jpg',
	'Image4Lg.jpg'
];

var titleArray = [
	'Newlyweds Sailing',
	'Snowboarder in Air',
	'Couple Hiking',
	'Couple Biking'
];

var imgPath = "Images/fullsize/";

function swapImage(imgID) {
	var theImage = document.getElementById('theImage');
	var textDiv = document.getElementById('bottomText');
	var newImg;
	var textTitle;
	newImg = imgArray[imgID];
	theImage.src = imgPath + newImg;
	textTitle = titleArray[imgID];
	textDiv.innerHTML = textTitle;
}

function preloadImages() {
	for (let i = 0; i < imgArray.length; i++) {
		let tmpImg = new Image()
		tmpImg.src = imgPath + imgArray[i];
	}
}