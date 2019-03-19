'use strict';

var userNumber = document.getElementsByClassName ('testimonial-number') [0].textContent;
var firstDropElement = document.getElementsByClassName ('drop') [0];
var DropElements = document.getElementsByClassName ('drop');
var secondDropElement = document.getElementsByClassName ('drop') [1];
var thirdDropElement = document.getElementsByClassName ('drop') [2];
var testimonialPictureElement = document.getElementsByClassName ('left-testimonial-block') [0];

console.log(userNumber);

if (userNumber == '.01') {
  firstDropElement.classList.remove('drop-background');
}
else {
  firstDropElement.classList.add('drop-background')
}

function changeForFirstPicture() {

  if (firstDropElement.getAttribute('data-attr-id') == 1) {

    firstDropElement.classList.remove('drop-background');
    secondDropElement.classList.add('drop-background');
    thirdDropElement.classList.add('drop-background');
    testimonialPictureElement.classList.remove('second-testimonial-picture');
    testimonialPictureElement.classList.remove('third-testimonial-picture');
    testimonialPictureElement.classList.add('first-testimonial-picture');
    userNumber = '.01';
    document.getElementsByClassName ('testimonial-number') [0].textContent = '.01';
    console.log(userNumber);
    // если у нас выполнилось условие, то мы должны убрать у остальных дроп элементов класс drop-background и добавить данному
    // элементу класс drop-background, а затем блоку .left-testimonial-block (ведь именно он содержит картинку) уже установить класс
    // second-testimonial-picture. Аналогично для второго обработчика события
  }
}

firstDropElement.addEventListener('click', changeForFirstPicture);


function changeForSecondPicture() {

  if (secondDropElement.getAttribute('data-attr-id') == 2) {

    secondDropElement.classList.remove('drop-background');
    firstDropElement.classList.add('drop-background');
    thirdDropElement.classList.add('drop-background');
    testimonialPictureElement.classList.remove('first-testimonial-picture');
    testimonialPictureElement.classList.remove('third-testimonial-picture');
    testimonialPictureElement.classList.add('second-testimonial-picture');
    userNumber = '.02';
    document.getElementsByClassName ('testimonial-number') [0].textContent = '.02';
    console.log(userNumber);
    // если у нас выполнилось условие, то мы должны убрать у остальных дроп элементов класс drop-background и добавить данному
    // элементу класс drop-background, а затем блоку .left-testimonial-block (ведь именно он содержит картинку) уже установить класс
    // second-testimonial-picture. Аналогично для второго обработчика события
  }
}

secondDropElement.addEventListener('click', changeForSecondPicture);

function changeForThirdPicture() {

  if (thirdDropElement.getAttribute('data-attr-id') == 3) {

    thirdDropElement.classList.remove('drop-background');
    firstDropElement.classList.add('drop-background');
    secondDropElement.classList.add('drop-background');
    testimonialPictureElement.classList.remove('second-testimonial-picture');
    testimonialPictureElement.classList.remove('first-testimonial-picture');
    testimonialPictureElement.classList.add('third-testimonial-picture');
    userNumber = '.03';
    document.getElementsByClassName ('testimonial-number') [0].textContent = '.03';
    console.log(userNumber);
  }
}

thirdDropElement.addEventListener('click', changeForThirdPicture);
