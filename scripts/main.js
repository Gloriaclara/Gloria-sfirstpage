var myHeading = document.getElementById('heading');
myHeading.textContent = "HELLO WELCOME !!!!";

var myImage = document.getElementById('imageChg');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bro.jpg') {
      myImage.setAttribute ('src','images/minion.jpg');
    } else {
      myImage.setAttribute ('src','images/bro.jpg');
    }
}

var myButton = document.getElementById('button');
var myHeading = document.getElementById('heading');

function setUserName() {
  var myName = alert('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'google is cool, ' + myName;
}


// On double click event
var header = document.getElementById('navigation'); //Get the header
header.ondblclick = function(){ //Detect double click
  if(header.style.backgroundColor === "white"){ //If it is white
    header.style.backgroundColor = "red"; //change background to white
  }else{ //otherwise
    header.style.backgroundColor = "white"; //change background color to red
  }
}

function bigImg(x) { //define function bigImg
    x.style.height = "300px"; //set height of image to 300
}

function normalImg(x) { // define function normalImg
    x.style.height = "200px"; //set height of image to 200
}

function setName(x){ //define function setName
  var name= prompt('Please enter your name'); //Display prompt to get name
  x.innerHTML = 'Welcome, '+name; //set the text welcome, <name>
}

function scrolledP(){ //define function scrolledP
  var instructions = document.getElementById('scroll-instrctions'); //get instructions paragrag
  instructions.innerHTML = "You have scrolled!!";  //set text
  instructions.style.color = "black"; //set color
}
