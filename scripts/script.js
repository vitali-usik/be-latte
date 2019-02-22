'use strict';

var userNumber = document.getElementsByClassName ('testimonial-number') [0].textContent;
var firstDropElement = document.getElementsByClassName ('drop') [0];
var DropElements = document.getElementsByClassName ('drop');
var secondDropElement = document.getElementsByClassName ('drop') [1];
var thirdDropElement = document.getElementsByClassName ('drop') [2];

console.log(userNumber);

if (userNumber == '.01') {
  firstDropElement.classList.remove('drop-background');
}
else {
  firstDropElement.classList.add('drop-background')
}

function changeForSecondPicture() {

  if (secondDropElement.hasAttribute('data-attr-id') == 2) {
    secondDropElement.classList.add('second-testimonial-picture');
  }
  else {
    secondDropElement.classList.remove('second-testimonial-picture');
  }
}

secondDropElement.addEventListener('click', changeForSecondPicture);

function changeForThirdPicture() {

  if (thirdDropElement.hasAttribute('data-attr-id') == 3) {
    thirdDropElement.classList.add('third-testimonial-picture');
  }
  else {
    thirdDropElement.classList.remove('third-testimonial-picture');
  }
}

thirdDropElement.addEventListener('click', changeForThirdPicture);
