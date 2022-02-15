const drawContainer = (containerSize, childSize, numberOfChildren) => {};

drawContainer(200, 50, 17);

var squares = document.getElementsByClassName('box');




for(var i = 0; i < squares.length; i++) {
squares[i].addEventListener("click", changeColor);
squares[i].addEventListener("mouseover", changeColor);
squares[i].addEventListener("mouseover", deleteBox);
}


function changeColor(event) {
  this.style.backgroundColor = randomColor();

}

function deleteBox(event){
    setTimeout( () => { this.style.display = 'none'}, 2000)
}

function randomColor() {

var randomRed = Math.floor(Math.random() * 255);
var randomGreen = Math.floor(Math.random() * 255);
var randomBlue = Math.floor(Math.random() * 255);
//create the string that is the ‘random color’
var randomColor = "rgb("+randomRed+","+randomGreen+","+randomBlue+")";

return randomColor;
}