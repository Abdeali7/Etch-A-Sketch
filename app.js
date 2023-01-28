let container = document.querySelector('.container');
let rangeValue = document.querySelector('.rangeValue');
let containerSize = 400;
let color = '#000';
let gridBackgroundColor = '#fff';
let toggle = true;

// function to change the color of an element when the mouse is moved over it while holding down the mouse button
function changeColor(element, c){
  element.addEventListener('mousemove', function(e) {
    if(e.buttons == 1) { // check if the left mouse button is held down
      element.style.backgroundColor = c;
    }
  });
}

// change the color of all boxes when the color picker value is changed
let colour = document.querySelector('#colour');
colour.onchange = function() {
  color = colour.value;
  let boxes = document.querySelectorAll('.box');
  for (box of boxes) {
    changeColor(box, color);
  }
};

// change the background color of all boxes when the background color picker value is changed
let backgroundColour = document.querySelector('#backgroundColour');
function changeBackgroundColor(element){
  element.addEventListener('change', function() {
    gridBackgroundColor = element.value;
    let boxes = document.querySelectorAll('.box');
    for (box of boxes){
      box.style.backgroundColor = element.value;
    }
  });
}
changeBackgroundColor(backgroundColour);

// create the default grid of boxes (20x20)
function defaultGridSize(){
  for (let i = 1; i <= 400; i++) {
    rangeValue.innerText = `20 x 20`;
    let box = document.createElement("div");
    box.style.height = `20px`;
    box.style.width = `20px`;
    box.classList.add('box');
    container.appendChild(box); 
    changeColor(box, color);
  }
}
defaultGridSize();

// change the size of the grid of boxes when the size picker value is changed
let boxSize = document.querySelector('#size');
boxSize.onchange = function () {
  container.innerHTML = "";
  rangeValue.innerText = `${boxSize.value} x ${boxSize.value}`;
  size = containerSize / (boxSize.value * boxSize.value);

  for (let i = 1; i <= (boxSize.value * boxSize.value); i++) {
    let box = document.createElement("div");
    box.style.height = `${size*boxSize.value}px`;
    box.style.width = `${size*boxSize.value}px`;
    box.classList.add('box');
    container.appendChild(box); 
    changeColor(box, color);
  }
}

// function to get a random RGB color
function getRandomRGB() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

let rainbow = document.querySelector('#rainbow');
rainbow.onclick = function() {
  this.classList.toggle('buttonActive');
  let boxes = document.querySelectorAll('.box');
  if (toggle) {
    // If toggle is true, loop through each box and change its color to a random RGB color
    for (box of boxes) {
      changeColor(box, getRandomRGB());
    }
    toggle = false;
  } else {
    // If toggle is false, loop through each box and change its color to #000 (black)
    color = '#000';
    for (box of boxes) {
      changeColor(box, color);
    }
    toggle = true;
  }
};

let clearAll = document.querySelector('#clearAll');
clearAll.onclick = function() {
    let boxes = document.querySelectorAll('.box');
    // Loop through each box and set its background color to the gridBackgroundColor variable
    for (box of boxes) {
      box.style.backgroundColor = gridBackgroundColor;
    }
};

let toggleGrid = true;
let gridlines = document.querySelector('#gridlines');
// Add an onclick event listener to the gridlines button
gridlines.onclick = function() {
  let boxes = document.querySelectorAll('.box');
  if (toggleGrid) {
    // If toggleGrid is true, loop through each box and remove its border
    for (box of boxes) {
      box.style.border = 'none';
    }
    gridlines.innerText = 'Show Gridlines';
    toggleGrid = false;
  } else {
    // If toggleGrid is false, loop through each box and add a 1px solid black border
    for (box of boxes) {
      box.style.border = '1px solid black';
    }
    gridlines.innerText = 'Hide Gridlines';
    toggleGrid = true;
    }
  };
