'use strict';

var userNumberElement = document.getElementsByClassName ('testimonial-number')[0];

var dropElements = document.getElementsByClassName ('drop');
var firstDropElement = dropElements[0];
var secondDropElement = dropElements[1];
var thirdDropElement = dropElements[2];


var testimonialPictureElement = document.getElementsByClassName ('left-testimonial-block') [0];

function onDropElementClick(evt) {
  for (var i = 0; i < dropElements.length; i++) {
    dropElements[i].classList.add('drop-background');
  }

  if (evt) {
    console.log(evt.target.getAttribute('data-attr-id'));
    var targetElementAttrId = evt.target.getAttribute('data-attr-id');
    evt.target.classList.remove('drop-background');

    if (targetElementAttrId === '1') {
      userNumberElement.textContent = '.01';
    } else if (targetElementAttrId === '2') {
      userNumberElement.textContent = '.02';
    } else if (targetElementAttrId === '3') {
      userNumberElement.textContent = '.03';
    }
  } else {
    dropElements[0].classList.remove('drop-background');
  }

}

onDropElementClick();


function changeForFirstPicture() {

  if (firstDropElement.getAttribute('data-attr-id') == 1) {

    firstDropElement.classList.remove('drop-background');
    secondDropElement.classList.add('drop-background');
    thirdDropElement.classList.add('drop-background');

    testimonialPictureElement.classList.remove('second-testimonial-picture');
    testimonialPictureElement.classList.remove('third-testimonial-picture');
    testimonialPictureElement.classList.add('first-testimonial-picture');

    userNumberElement.textContent = '.01';
    // если у нас выполнилось условие, то мы должны убрать у остальных дроп элементов класс drop-background и добавить данному
    // элементу класс drop-background, а затем блоку .left-testimonial-block (ведь именно он содержит картинку) уже установить класс
    // second-testimonial-picture. Аналогично для второго обработчика события
  }
}

firstDropElement.addEventListener('click', onDropElementClick);


function changeForSecondPicture() {

  if (secondDropElement.getAttribute('data-attr-id') == 2) {

    secondDropElement.classList.remove('drop-background');
    firstDropElement.classList.add('drop-background');
    thirdDropElement.classList.add('drop-background');

    testimonialPictureElement.classList.remove('first-testimonial-picture');
    testimonialPictureElement.classList.remove('third-testimonial-picture');
    testimonialPictureElement.classList.add('second-testimonial-picture');

    userNumberElement.textContent = '.02';
    // если у нас выполнилось условие, то мы должны убрать у остальных дроп элементов класс drop-background и добавить данному
    // элементу класс drop-background, а затем блоку .left-testimonial-block (ведь именно он содержит картинку) уже установить класс
    // second-testimonial-picture. Аналогично для второго обработчика события
  }
}

secondDropElement.addEventListener('click', onDropElementClick);

function changeForThirdPicture() {

  if (thirdDropElement.getAttribute('data-attr-id') == 3) {

    thirdDropElement.classList.remove('drop-background');
    firstDropElement.classList.add('drop-background');
    secondDropElement.classList.add('drop-background');

    testimonialPictureElement.classList.remove('second-testimonial-picture');
    testimonialPictureElement.classList.remove('first-testimonial-picture');
    testimonialPictureElement.classList.add('third-testimonial-picture');

    userNumberElement.textContent = '.03';
  }
}

thirdDropElement.addEventListener('click', onDropElementClick);
