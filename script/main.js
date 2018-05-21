/*var myHeading = document.querySelector('h1');
myHeading.textContent='Hello World';


document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.png'){
        myImage.setAttribute('src','images/thsirt.jpg');
    }
    else{
        myImage.setAttribute('src','images/firefox.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
var myName = prompt('Please enter your name: ');
localStorage.setItem('name',myName);

myHeading.textContent = 'Mozilla is cool ,'+ myName;
} 

if(!localStorage.getItem('name')){
    setUserName();
} else{
    var storedName= localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool ,'+ storedName;
}

myButton.onclick()=function(){setUserName();}

//this is a practice comment 
/*this is another 
practice comment */
var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox.png') {
      myImage.setAttribute ('src','images/firefox-logo.jpg');
	} else {
	  myImage.setAttribute ('src','images/firefox.png');
	}
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}